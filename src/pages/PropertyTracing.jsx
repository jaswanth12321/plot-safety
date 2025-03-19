import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertyTracing = () => {
  const causes = [
    {
      title: 'Mortgaged Properties',
      description: 'Financed / purchased on a mortgage by individuals / institution / banks but which cannot be located.',
      icon: '🏦',
      emphasis: ['individuals', 'institution', 'banks']
    },
    {
      title: 'Ancestral Properties',
      description: 'Procured by ancestors but not shown to the family members / successors',
      icon: '👨‍👩‍👧‍👦',
      emphasis: ['family members', 'successors']
    },
    {
      title: 'Development Changes',
      description: 'Purchased but cannot be located due to vast development of the area and change in topography.',
      icon: '🏗️'
    }
  ];

  const services = [
    {
      title: 'Property History Research',
      description: 'We will trace properties that would have got lost in time, amidst the haphazard urbanisation.',
      icon: '📚',
    },
    {
      title: 'Physical Location',
      description: 'We will go hunting for the property, trace property history and physically locate it.',
      icon: '🔍',
    },
    {
      title: 'Document Recovery',
      description: 'If the documents provided are not sufficient, we will dig out additional records from the old shelves of Survey offices / Civic departments.',
      icon: '📋',
    },
    {
      title: 'Title Investigation',
      description: 'We conduct land title investigation to ensure property authenticity.',
      icon: '⚖️',
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
              Tracing Lost Property/Site
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
            >
              Expert assistance in locating and tracing properties lost to time and urban development.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Causes Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 mb-8"
          >
            Cause of the property having become untraceable may be due to
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((item, index) => (
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
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            If you have the documents of an old / Purchased / Inherited / Gifted property but are unable to locate it, Team PlotSafety can handle this challenging task. We will trace the properties that would have got lost in time, amidst the haphazard urbanisation. We will go hunting for the property, trace property history and physically locate it. If the documents provided are not sufficient we will dig out additional records from the old shelves of Survey offices / Civic departments and conduct land title investigation.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
            <p className="text-xl font-semibold text-blue-800 mb-4">Success Story</p>
            <p className="text-gray-600 italic">
              "In a bustling city like Bangalore, how bright are the chances of tracing a nearly 100-year old property or its documents? Team PlotSafety has done it and has been successfully donning the role of a property tracing agent."
            </p>
          </div>
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
            Our Property Tracing Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cost Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Service Cost
          </h2>
          <p className="text-lg text-white mb-4">
            Cost of tracing depends on case to case basis, based on the availability of documents / procurement of additional documents from competent authorities to execute tracing of property.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-12"
        >
          DISCLAIMER: PlotSafety reserves the right not to service a request if it is deemed to be infeasible as per its findings.
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
            Need Help Finding Your Property?
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

export default PropertyTracing; 