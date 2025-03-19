import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock surveillance and monitoring of your property using advanced security systems.',
      price: 'Starting from $299/month',
      features: ['Real-time monitoring', 'Emergency response', 'Mobile alerts'],
    },
    {
      title: 'Smart Security Systems',
      description: 'Integration of cutting-edge security technology including smart locks, cameras, and sensors.',
      price: 'Custom quote',
      features: ['Smart lock installation', 'HD cameras', 'Motion sensors'],
    },
    {
      title: 'Security Personnel',
      description: 'Professional security guards stationed at your property for physical security.',
      price: 'Starting from $499/month',
      features: ['Trained guards', 'Regular patrols', 'Incident reporting'],
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Security Solutions
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
            >
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                <p className="mt-4 text-sm text-gray-500">{service.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{service.price}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 