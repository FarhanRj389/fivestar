import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Star,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Landlords', path: '/landlords' },
    { name: 'Tenants', path: '/tenants' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Property Management',
    'Tenant Screening',
    'Rent Collection',
    'Property Maintenance',
    'Market Appraisals',
    'Investment Advice'
  ];

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent-400 rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <img 
                src="/footer_logo.png" 
                alt="Five Star Rentals" 
                className="h-[120px] w-[280px] mb-6"
              />
              <p className="text-secondary-300 mb-6 leading-relaxed">
                We don't just manage properties, we craft future landlords. Auckland's premier property management company delivering exceptional service since 2020.
              </p>
              
              {/* Trust indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Shield className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-secondary-300">Licensed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-secondary-300">Certified</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-400">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-secondary-300 flex items-center">
                    <Star className="w-3 h-3 text-accent-400 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-400">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-300">123 Queen Street</p>
                    <p className="text-secondary-300">Auckland CBD, 1010</p>
                    <p className="text-secondary-300">New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="tel:+6420457496" className="text-secondary-300 hover:text-primary-400 transition-colors">
                    +64 20 457 4963
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="mailto:admin@fivestarrentals.co.nz" className="text-secondary-300 hover:text-primary-400 transition-colors">
                    admin@fivestarrentals.co.nz
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <div className="text-secondary-300">
                    <p>Mon - Fri: 8:30 AM - 5:30 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-secondary-400 text-sm">
                © 2025 Five Star Rentals. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;