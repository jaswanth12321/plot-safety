import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertyMonitoring = () => {
  const challenges = [
    {
      title: 'Property Encroachment',
      description: 'Protection against unauthorized occupation of your property',
      icon: '⚠️',
    },
    {
      title: 'Misuse of the Site',
      description: 'Prevention of unauthorized activities on your property',
      icon: '🚫',
    },
    {
      title: 'Legal Protection',
      description: 'Fear of site / land getting into litigation',
      icon: '⚖️',
    },
    {
      title: 'Fraudulent Sales',
      description: 'Sale of your site / land by an impersonator',
      icon: '🏷️',
    },
    {
      title: 'Anti-Social Elements',
      description: 'Squatting by antisocial elements / touts',
      icon: '🚷',
    },
    {
      title: 'Property Maintenance',
      description: 'Upkeep and clearing of wild shrubs',
      icon: '🌿',
    },
    {
      title: 'Property Protection',
      description: 'Prevention of littering and property damage',
      icon: '🛡️',
    },
    {
      title: 'Tax Management',
      description: 'Payment of property tax',
      icon: '💰',
    }
  ];

  const securityModes = [
    {
      title: 'Property Signboard',
      description: 'Signboard with the company name and contact number which will safeguard the site from encroachment or fraudulent deals. (Display of your contact number also is optional)',
      icon: '🏷️',
    },
    {
      title: 'Regular Monitoring',
      description: 'The physical visit by our field staff, real-time pictures and 360° video of the property will be uploaded through email and WhatsApp which will make it as good as your personal physical visit',
      icon: '📸',
    }
  ];

  const valueAddedServices = [
    { title: 'Payment of Taxes', icon: '💳' },
    { title: 'Documentation', icon: '📋' },
    { title: 'Property Maintenance', icon: '🧹' },
    { title: 'Security Infrastructure', icon: '🔒' },
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
              Property Monitoring Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
            >
              Real Estate is one of the best investment options. However, in most built-up urban environments the most affordable properties are located outside core areas, making regular monitoring a challenge.
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
            Furthermore legal work and payment of taxes need to be attended to in a systematic and periodic manner. All of these take time, effort and mind space.
          </p>
        </motion.div>

        {/* Challenges Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Difficulties in Managing Vacant Property
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Role Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            It is not easy for an individual to manage a vacant property / site especially when he / she is located at a distance. PlotSafety can take care of all the above issues for you assuring you peace of mind. We know that you would have invested a huge sum into the site. Regardless of your physical location, we can take care of this precious investment and keep it safe.
          </p>
          <p className="text-lg text-gray-600">
            PlotSafety plays an ideal role in taking care of your property, updating you with the latest developments in and around your property that may take place in your absence.
          </p>
        </motion.div>

        {/* Mode of Securing Property */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Mode of Securing Your Property
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{mode.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{mode.title}</h3>
                <p className="text-gray-600">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value Added Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Value Added Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAddedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-yellow-400 mt-6 text-lg">
            Payment of Taxes, Completion of Documentation, Clearing of wild shrubs & Construction of Compound / Fencing
          </p>
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
            Ready to Secure Your Property?
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

export default PropertyMonitoring; 