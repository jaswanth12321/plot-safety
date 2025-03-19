#!/bin/bash

# Update system
echo "Updating system..."
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
echo "Installing Node.js and npm..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
echo "Installing MongoDB..."
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org

# Start MongoDB
echo "Starting MongoDB..."
sudo systemctl start mongod
sudo systemctl enable mongod

# Install PM2
echo "Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "Installing Nginx..."
sudo apt install -y nginx

# Install Certbot
echo "Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Create application directory
echo "Creating application directory..."
sudo mkdir -p /var/www/plotsafety
sudo chown -R $USER:$USER /var/www/plotsafety

# Copy application files
echo "Copying application files..."
cp -r ./* /var/www/plotsafety/

# Install dependencies
echo "Installing dependencies..."
cd /var/www/plotsafety
npm install

# Build frontend
echo "Building frontend..."
npm run build

# Configure Nginx
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/plotsafety << EOF
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain

    location / {
        root /var/www/plotsafety/dist;
        try_files \$uri \$uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/plotsafety /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Start the application with PM2
echo "Starting application with PM2..."
cd /var/www/plotsafety
pm2 start backend/server.js --name "plotsafety"
pm2 save
pm2 startup

# Setup SSL with Certbot
echo "Setting up SSL..."
sudo certbot --nginx -d your-domain.com  # Replace with your domain

echo "Deployment completed! Please update the domain name in the Nginx configuration and run Certbot with your actual domain." 