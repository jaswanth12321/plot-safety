import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { WorldMapDemo } from '../components/ui/world-map-demo';

const Home = () => {
  const features = [
    {
      title: 'Property Security',
      description: '24/7 monitoring and protection for your valuable assets',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Smart Solutions',
      description: 'Advanced technology integration for modern security needs',
      icon: '🔒',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Expert Team',
      description: 'Trained professionals ensuring your safety',
      icon: '👥',
      color: 'from-green-500 to-green-600',
    },
  ];

  const services = [
    {
      title: 'Property Monitoring',
      description: 'Regular inspections and surveillance to protect your property',
      icon: '👁️',
      link: '/service/property-monitoring'
    },
    {
      title: 'Legal Services',
      description: 'Expert legal assistance for property documentation and disputes',
      icon: '⚖️',
      link: '/service/legal-services'
    },
    {
      title: 'Investment Advisory',
      description: 'Professional guidance for property investments',
      icon: '📈',
      link: '/service/investment-advice'
    }
  ];

  const benefits = [
    {
      title: 'Trusted by Property Owners',
      description: 'Join thousands of satisfied property owners who trust us',
      stat: '1000+',
      label: 'Happy Clients'
    },
    {
      title: 'Cities Covered',
      description: 'Operating in major cities across India',
      stat: '4+',
      label: 'Major Cities'
    },
    {
      title: 'Success Rate',
      description: 'Proven track record of successful property management',
      stat: '99%',
      label: 'Success Rate'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹999',
      period: 'month',
      features: [
        'Property Monitoring',
        'Basic Security',
        'Email Support',
        'Monthly Reports'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: '₹1999',
      period: 'month',
      features: [
        'Everything in Basic',
        '24/7 Support',
        'Advanced Security',
        'Weekly Reports',
        'Legal Assistance'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹3999',
      period: 'month',
      features: [
        'Everything in Professional',
        'Dedicated Manager',
        'Custom Solutions',
        'Daily Reports',
        'Priority Support'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const faqs = [
    {
      question: 'How does PlotSafety protect my property?',
      answer: 'We use advanced security systems, 24/7 monitoring, and regular inspections to ensure your property is always protected.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We currently operate in major cities across India, including Mumbai, Delhi, Bangalore, and Chennai.'
    },
    {
      question: 'How quickly do you respond to issues?',
      answer: 'Our team responds within 30 minutes for urgent issues and within 24 hours for non-urgent matters.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, UPI, and bank transfers for your convenience.'
    }
  ];

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="sm:text-center lg:text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                  >
                    <span className="block">Secure Your Property</span>
                    <span className="block text-yellow-400">With Confidence</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    Professional property management solutions for your peace of mind. We handle everything from security to maintenance.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3"
                  >
                    <Link
                      to="/contact"
                      className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]"
                    >
                      <span className="absolute inset-0 w-full h-full rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      Get Started
                    </Link>
                    <Link
                      to="/services"
                      className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-yellow-400 text-base font-medium rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-blue-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                    >
                      <span className="absolute inset-0 w-full h-full rounded-full bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      Learn More
                    </Link>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20, rotateY: 20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:p-8 max-w-md mx-auto w-full transform hover:scale-[1.02] transition-all duration-300"
                >
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-white sm:text-4xl"
            >
              Trusted by Property Owners Nationwide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-xl text-yellow-400 sm:mt-4"
            >
              Join thousands of satisfied property owners who trust us
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <dt className="text-5xl font-extrabold text-yellow-400 mb-4">
                  {benefit.stat}
                </dt>
                <dd className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </dd>
                <dd className="text-sm text-gray-300">
                  {benefit.description}
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-lg text-gray-600">Trusted by leading companies</span>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlay Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            
            {/* Gradient Overlay Right */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling Container */}
            <div className="flex space-x-12 animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center">
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Amazon_logo.svg" alt="Amazon" className="h-12" />
                </div>
              </div>
              
              {/* Duplicate set for seamless scrolling */}
              <div className="flex space-x-12 items-center">
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12" />
                </div>
                <div className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Amazon_logo.svg" alt="Amazon" className="h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              See How We Work
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Watch our comprehensive property management process in action
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/GT5I_Hr9qww"
                title="PlotSafety Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive property management solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose PlotSafety?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the difference with our comprehensive property management solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className={`absolute -top-4 left-6 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${feature.color} text-white text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <p className="mt-8 text-xl leading-6 font-medium text-gray-900">{feature.title}</p>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Pricing Plans Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Select the perfect plan for your property management needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`group relative block w-full text-center py-3 px-6 rounded-full text-white font-medium bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  <span className="absolute inset-0 w-full h-full rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-8">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 mb-16">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                Working with SoftHouse transformed our business. Their expertise in software development helped us streamline operations and improve customer experience.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">CEO, TechCorp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                The team at SoftHouse delivered our project on time and exceeded our expectations. Their communication and technical skills are outstanding.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600">CTO, MobiConnect</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                We've been working with SoftHouse for over 3 years now, and they've consistently delivered high-quality solutions for our complex requirements.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-gray-600">Product Manager, CloudSys</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                      openFaqId === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openFaqId === index ? 'max-h-48 pb-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">PlotSafety</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See how our premium features stack up against traditional property management solutions
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-3">
                {/* Header */}
                <div className="p-8 border-r border-gray-100">
                  <div className="h-full flex items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Features</h3>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-100 bg-gradient-to-br from-blue-50 to-white">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-blue-900">PlotSafety</h3>
                      <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Recommended
                      </span>
                    </div>
                    <p className="mt-2 text-blue-600">Premium Solution</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-400">Others</h3>
                    <p className="mt-2 text-gray-500">Traditional Solution</p>
                  </div>
                </div>
              </div>

              {/* Features Comparison */}
              <div className="divide-y divide-gray-100">
                {[
                  {
                    feature: "24/7 Property Monitoring",
                    description: "Round-the-clock surveillance and security monitoring",
                    plotSafety: true,
                    others: false
                  },
                  {
                    feature: "Real-time Security Alerts",
                    description: "Instant notifications for any security concerns",
                    plotSafety: true,
                    others: false
                  },
                  {
                    feature: "AI-Powered Analytics",
                    description: "Advanced data analysis for better decision making",
                    plotSafety: true,
                    others: false
                  },
                  {
                    feature: "Mobile App Access",
                    description: "Control and monitor from your smartphone",
                    plotSafety: true,
                    others: true
                  },
                  {
                    feature: "24/7 Customer Support",
                    description: "Always available to help you",
                    plotSafety: true,
                    others: false
                  },
                  {
                    feature: "Automated Reports",
                    description: "Detailed insights delivered automatically",
                    plotSafety: true,
                    others: false
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 group hover:bg-blue-50/50 transition-colors duration-300"
                  >
                    <div className="p-8 border-r border-gray-100">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.feature}</h4>
                        <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="p-8 border-r border-gray-100 bg-gradient-to-br from-blue-50/50 to-transparent">
                      <div className="flex justify-center">
                        {item.plotSafety ? (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shadow-lg shadow-blue-100/50"
                          >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        ) : (
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-center">
                        {item.others ? (
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Started with PlotSafety
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* World Map Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Global Presence
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Serving clients across major cities in India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <WorldMapDemo />
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to secure your property?
                  <span className="block text-yellow-400">Get started today.</span>
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Join our platform and experience hassle-free property management with our expert team.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-full shadow">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Plot</span>
                <span className="text-blue-400">Safety</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Transform your career with expert-led AI development training. From machine learning basics to advanced deep learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
                </li>
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">support@plotsafety.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 AI Street, Tech Valley, CA 94000</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">Get the latest AI news and updates delivered to your inbox.</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} PlotSafety. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 