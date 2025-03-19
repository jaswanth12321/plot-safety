import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvestmentAdvice = () => {
  const services = [
    {
      title: 'Market Analysis',
      description: 'Comprehensive analysis of current real estate market trends and opportunities.',
      icon: '📊',
    },
    {
      title: 'Investment Strategy',
      description: 'Personalized investment strategies based on your goals and risk tolerance.',
      icon: '🎯',
    },
    {
      title: 'Property Evaluation',
      description: 'Thorough evaluation of potential investment properties.',
      icon: '🏘️',
    },
    {
      title: 'Risk Assessment',
      description: 'Detailed analysis of investment risks and mitigation strategies.',
      icon: '⚖️',
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Access to experienced real estate investment advisors.',
      icon: '👥',
    },
    {
      title: 'Market Insights',
      description: 'Up-to-date information on market trends and opportunities.',
      icon: '📈',
    },
    {
      title: 'Due Diligence',
      description: 'Thorough verification of property documents and legal status.',
      icon: '📋',
    },
    {
      title: 'ROI Analysis',
      description: 'Detailed return on investment projections and analysis.',
      icon: '💰',
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
              Investment Advisory Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
            >
              Expert guidance for your real estate investment decisions
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
            PlotSafety provides comprehensive investment advisory services to help you make informed decisions in the real estate market. Our team of experts analyzes market trends, evaluates properties, and creates personalized investment strategies tailored to your goals.
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
            Our Investment Services
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

        {/* Investment Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Investment Process</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">1.</span>
              <p className="text-gray-600">Initial consultation to understand your investment goals and preferences</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">2.</span>
              <p className="text-gray-600">Market analysis and property identification based on your criteria</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">3.</span>
              <p className="text-gray-600">Thorough due diligence and property evaluation</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">4.</span>
              <p className="text-gray-600">Investment strategy development and risk assessment</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-500 text-2xl">5.</span>
              <p className="text-gray-600">Ongoing support and portfolio monitoring</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Benefits of Our Advisory Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Ready to Start Your Investment Journey?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentAdvice; 