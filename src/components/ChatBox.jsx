import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        text: "Hello! I'm your PlotSafety AI assistant. I can help you with:\n\n• Property Monitoring\n• Property Tracing\n• Legal Services\n• RERA Consultation\n• Investment Advice\n• Property Verification\n\nHow can I assist you today?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Property Monitoring related queries
    if (message.includes('property monitoring') || message.includes('monitor') || message.includes('surveillance')) {
      return "Our Property Monitoring service includes regular physical inspections, surveillance, and detailed reporting. We help prevent encroachment, misuse, and maintain property security. Would you like to know more about our monitoring packages?";
    }
    
    // Legal Services related queries
    if (message.includes('legal') || message.includes('law') || message.includes('documentation')) {
      return "Our Legal Services cover property documentation, title verification, legal compliance checks, and dispute resolution. Our expert legal team ensures all property matters are handled professionally. Would you like to schedule a consultation?";
    }
    
    // Investment related queries
    if (message.includes('investment') || message.includes('invest') || message.includes('return') || message.includes('profit')) {
      return "Our Investment Advisory services provide detailed market analysis, ROI projections, and risk assessment for property investments. We can help you make informed investment decisions based on current market trends and future growth potential.";
    }
    
    // Property Verification queries
    if (message.includes('verification') || message.includes('verify') || message.includes('check')) {
      return "Our Property Verification service includes thorough background checks, document verification, and site inspection. We ensure the property you're interested in is legally clear and matches all documented specifications.";
    }
    
    // RERA related queries
    if (message.includes('rera') || message.includes('regulation') || message.includes('compliance')) {
      return "We provide comprehensive RERA consultation services, helping you understand regulatory requirements, compliance matters, and registration processes. Would you like to know more about RERA guidelines?";
    }

    // Property Tracing queries
    if (message.includes('trace') || message.includes('find') || message.includes('search') || message.includes('locate')) {
      return "Our Property Tracing service helps locate and verify ownership of properties, trace property history, and identify legal heirs. We use advanced methods to find property details and ownership records.";
    }

    // Default response for other queries
    return "I understand you're interested in our property services. Could you please specify which aspect you'd like to know more about? I can provide information about property monitoring, legal services, investment advice, verification, or RERA consultation.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Get AI response
    setTimeout(() => {
      const aiMessage = {
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <h3 className="font-medium">PlotSafety AI Assistant</h3>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-md rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white text-gray-800 rounded-lg p-3 shadow-md rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBox; 