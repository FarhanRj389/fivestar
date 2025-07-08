import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp number (replace with actual number)
  const whatsappNumber = "+6420457496";
  
  // Pre-filled messages for different scenarios
  const quickMessages = [
    {
      title: "General Inquiry",
      message: "Hi! I'd like to know more about your property management services."
    },
    {
      title: "Property Appraisal",
      message: "Hi! I'm interested in getting a free rental appraisal for my property."
    },
    {
      title: "Tenant Support",
      message: "Hi! I'm a tenant and need assistance with my rental property."
    },
    {
      title: "Maintenance Request",
      message: "Hi! I need to report a maintenance issue with my rental property."
    },
    {
      title: "Emergency",
      message: "Hi! This is an emergency maintenance issue that needs immediate attention."
    }
  ];

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Five Star Rentals</h3>
                      <p className="text-sm text-green-100">Typically replies instantly</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <div className="bg-gray-100 rounded-lg p-3 mb-3">
                    <p className="text-sm text-gray-700">
                      👋 Hi there! How can we help you today?
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Choose a quick message or start a custom chat:
                  </p>
                </div>

                {/* Quick Message Options */}
                <div className="space-y-2 mb-4">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => openWhatsApp(msg.message)}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
                    >
                      <div className="text-sm font-medium text-gray-900 group-hover:text-green-700">
                        {msg.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {msg.message.substring(0, 50)}...
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Message Button */}
                <button
                  onClick={() => openWhatsApp("Hi! I have a question about your services.")}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Custom Chat</span>
                </button>

                {/* Call Option */}
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <a
                    href={`tel:${whatsappNumber}`}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {whatsappNumber}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            1
          </motion.div>
        )}
      </div>

      {/* Pulsing Ring Animation */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="w-14 h-14 rounded-full bg-green-500/30 animate-ping"></div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;