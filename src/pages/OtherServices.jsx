import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OtherServices = () => {
  const services = [
    {
      title: 'Property Valuation',
      description: 'Professional valuation of properties based on market trends and location factors.',
      icon: '💰',
    },
    {
      title: 'Documentation Services',
      description: 'Assistance with property documentation, registration, and legal paperwork.',
      icon: '📋',
    },
    {
      title: 'Property Tax Services',
      description: 'Help with property tax assessment, calculation, and payment procedures.',
      icon: '📊',
    },
    {
      title: 'Property Insurance',
      description: 'Guidance on property insurance options and claim assistance.',
      icon: '🛡️',
    }
  ];

  const additionalServices = [
    {
      title: 'Property Maintenance',
      description: 'Regular maintenance and upkeep of your property.',
      icon: '🔧',
    },
    {
      title: 'Renovation Guidance',
      description: 'Expert advice on property renovation and improvement.',
      icon: '🏗️',
    },
    {
      title: 'Tenant Management',
      description: 'Complete tenant management and rental services.',
      icon: '🤝',
    },
    {
      title: 'Property Marketing',
      description: 'Professional marketing services for property sale or rental.',
      icon: '📢',
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Additional Property Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
            >
              Comprehensive property solutions tailored to your needs
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            At PlotSafety, we offer a wide range of additional property services to ensure all your real estate needs are met under one roof. Our expert team provides comprehensive solutions tailored to your specific requirements.
          </p>
        </motion.div>

        {/* Primary Services Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Core Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Additional Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals dedicated to your property needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-lg mb-2">Customized Solutions</h3>
                <p className="text-gray-600">Services tailored to your specific requirements</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-lg mb-2">Transparent Process</h3>
                <p className="text-gray-600">Clear communication and documentation throughout</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-lg mb-2">Timely Delivery</h3>
                <p className="text-gray-600">Efficient service delivery within agreed timelines</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Need Additional Property Services?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OtherServices; 