import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            {...fadeIn}
          >
            What We Do
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Property Consulting & Management
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Property Handling Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            Property Handling manage properties in Hyderabad, Vijayawada, Guntur & Vizag. Currently, we work with properties in Hyderabad, Vijayawada, Guntur & Vizag. Property Handling operates in a manner that would help build customer's trust, guarantees safety for their properties and transactions. Property Handling is run with utmost integrity and transparency to the customer facilitated through our online portal where every customer can login and view their property happenings. All transactions, documents, and deeds will be stored in here.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to deliver the best of services in property management with a hassle-free experience to all our valued customers. We make sure there is no room for error and overcome challenges in every task that we take up.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Professional Service
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Proper Valuation
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Thorough Background Checks
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Ensuring Safety
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Providing Best Value
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a service provider, we envision the company to stand tall amongst the best property management companies in the country and the world. Our team, works relentlessly towards the goal set forth by the founders.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Scaling up to other cities in the country
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Providing One Stop Solution for all Property Needs
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Being the best property management company
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Values</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Any property big or small is precious to the owner as they invest their life's saving into it and that is an undeniable fact. We take pride in acknowledging this fact and we continue to strive to provide our clients by ensuring safety for their property and providing the best value in the market. We abide and adhere to these inheriting values.
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Building Trust through Professional Service
            </li>
            <li className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Valuing Relationships
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 