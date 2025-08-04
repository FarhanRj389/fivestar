import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Calculator,
  MessageSquare,
  CheckCircle,
  Star,
  Award,
  Shield
} from 'lucide-react';

const Contact: React.FC = () => {
  const [appraisalForm, setAppraisalForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    bedrooms: '',
    message: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeForm, setActiveForm] = useState<'appraisal' | 'contact'>('appraisal');

  const handleAppraisalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appraisal form submission
    console.log('Appraisal form submitted:', appraisalForm);
    // Reset form
    setAppraisalForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      propertyType: '',
      bedrooms: '',
      message: ''
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+64 20 457 4963", "24/7 Emergency: +64 20 457 4963"],
      action: "tel:+6420457496"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admin@fivestarrentals.co.nz", "emergency@fivestarrentals.co.nz"],
      action: "mailto:admin@fivestarrentals.co.nz"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Queen Street", "Auckland CBD, 1010", "New Zealand"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8:30 AM - 5:30 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Emergency Only"],
      action: null
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "5-Star Service",
      description: "Consistently rated 5 stars by our clients for exceptional service and results."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as Auckland's Best Property Management Company 2023."
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "Licensed, insured, and compliant with all New Zealand property laws."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' relative -top-24'
      >
      {/* Hero Section */}
      <section className="py-40 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
        
      <div className='absolute z-0 w-ful top-0 right-0 left-0'>
        <video
          className=" w-full h-[600px] lg:h-[630px] object-cover"
          src="/video_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute  z-10 inset-0 bg-black/30">
        </div>

         
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
              Ready to maximize your property investment? Contact Five Star Rentals today for expert property management services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-3 text-yellow-500 hover:text-yellow-600 font-medium text-sm"
                  >
                    Contact Now →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Choose the service you need and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Selection and Forms */}
            <div className="lg:col-span-2">
              {/* Form Toggle */}
              <div className="flex bg-white rounded-2xl p-2 mb-8 shadow-sm">
                <button
                  onClick={() => setActiveForm('appraisal')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    activeForm === 'appraisal'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-black shadow-lg'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  <Calculator className="w-5 h-5" />
                  <span>Free Rent Appraisal</span>
                </button>
                <button
                  onClick={() => setActiveForm('contact')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    activeForm === 'contact'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-black shadow-lg'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>General Contact</span>
                </button>
              </div>

              {/* Appraisal Form */}
              {activeForm === 'appraisal' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Get Your Free Rent Appraisal
                    </h3>
                    <p className="text-secondary-600">
                      Find out how much your property could earn in today's rental market.
                    </p>
                  </div>

                  <form onSubmit={handleAppraisalSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={appraisalForm.name}
                          onChange={(e) => setAppraisalForm({...appraisalForm, name: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={appraisalForm.email}
                          onChange={(e) => setAppraisalForm({...appraisalForm, email: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={appraisalForm.phone}
                          onChange={(e) => setAppraisalForm({...appraisalForm, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="+64 20 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Property Type *
                        </label>
                        <select
                          required
                          value={appraisalForm.propertyType}
                          onChange={(e) => setAppraisalForm({...appraisalForm, propertyType: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="">Select property type</option>
                          <option value="apartment">Apartment</option>
                          <option value="house">House</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="studio">Studio</option>
                          <option value="other">Other</option>    
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={appraisalForm.address}
                          onChange={(e) => setAppraisalForm({...appraisalForm, address: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="123 Example Street, Auckland"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Number of Bedrooms *
                        </label>
                        <select
                          required
                          value={appraisalForm.bedrooms}
                          onChange={(e) => setAppraisalForm({...appraisalForm, bedrooms: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="">Select bedrooms</option>
                          <option value="1">1 Bedroom</option>
                          <option value="2">2 Bedrooms</option>
                          <option value="3">3 Bedrooms</option>
                          <option value="4">4 Bedrooms</option>
                          <option value="5+">5+ Bedrooms</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        rows={4}
                        value={appraisalForm.message}
                        onChange={(e) => setAppraisalForm({...appraisalForm, message: e.target.value})}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Tell us about any special features, recent renovations, or specific questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <Calculator className="w-5 h-5" />
                      <span>Get My Free Appraisal</span>
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Contact Form */}
              {activeForm === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-secondary-600">
                      Have a question or need assistance? We're here to help.
                    </p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="property-management">Property Management Inquiry</option>
                        <option value="tenant-inquiry">Tenant Inquiry</option>
                        <option value="maintenance">Maintenance Request</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </div>

            {/* Why Choose Us Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  Why Choose Five Star Rentals?
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-secondary-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-500 p-6 rounded-2xl text-black"
              >
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-4 text-black">
                  Our team is available 24/7 for emergency property issues.
                </p>
                <a
                  href="tel:+6420457496"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Line</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary-100 p-6 rounded-2xl"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    Response Guarantee
                  </h3>
                </div>
                <p className="text-secondary-600 text-sm">
                  We guarantee to respond to all inquiries within 24 hours during business days, and within 2 hours for emergency situations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Located in the heart of Auckland CBD, we're easily accessible by public transport and offer convenient parking.
            </p>
          </motion.div>

          <div className="bg-secondary-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Five Star Rentals Office
            </h3>
            <div className="text-secondary-600 mb-6">
              <p className="text-lg">123 Queen Street</p>
              <p className="text-lg">Auckland CBD, 1010</p>
              <p className="text-lg">New Zealand</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default Contact;