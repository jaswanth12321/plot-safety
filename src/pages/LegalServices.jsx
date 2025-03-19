import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LegalServices = () => {
  const services = [
    {
      title: 'Property Evaluation',
      description: 'Comprehensive evaluation of property value and market analysis.',
      icon: '📊',
    },
    {
      title: 'Document Verification',
      description: 'Thorough verification of property documents and legal records.',
      icon: '📋',
    },
    {
      title: 'Title Investigation',
      description: 'In-depth investigation of property titles and ownership history.',
      icon: '⚖️',
    },
    {
      title: 'Legal Compliance',
      description: 'Ensuring compliance with all relevant property laws and regulations.',
      icon: '✅',
    }
  ];

  const verificationSteps = [
    {
      title: 'Document Collection',
      description: 'Gathering all necessary property documents and records.',
      icon: '📁',
    },
    {
      title: 'Legal Analysis',
      description: 'Expert analysis of legal aspects and potential issues.',
      icon: '🔍',
    },
    {
      title: 'Market Research',
      description: 'Comprehensive research of property market values and trends.',
      icon: '📈',
    },
    {
      title: 'Report Generation',
      description: 'Detailed report with findings and recommendations.',
      icon: '📝',
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
              Property Evaluation & Verification
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
            >
              Expert legal services for comprehensive property evaluation and document verification
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
            PlotSafety provides comprehensive property evaluation and verification services to ensure your real estate investments are secure and legally sound. Our team of experts conducts thorough investigations of property documents, market values, and legal compliance.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Our Legal Services
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

        {/* Process Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Our Verification Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose Our Legal Services?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Expert legal team with extensive property law experience
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Comprehensive document verification and analysis
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Thorough market research and valuation
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              Clear, detailed reports with actionable insights
            </li>
          </ul>
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
            Ready to Evaluate Your Property?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalServices; 