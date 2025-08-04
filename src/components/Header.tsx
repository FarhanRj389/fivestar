import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Landlords', path: '/landlords' },
    { name: 'Tenants', path: '/tenants' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top contact bar (desktop only) */}
      <div className="bg-secondary-900 text-white py-1 px-4 hidden md:block relative top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+64 20 457 4963</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>admin@fivestarrentals.co.nz</span>
            </div>
          </div>
          <div className="text-[#F6D03F]">
            Auckland's Premier Property Management
          </div>
        </div>
      </div>

      {/* Main header - single responsive header */}
      <motion.header
        className="relative w-full z-40 bg-white/20 backdrop-blur-md shadow-sm top-0 "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Five Star Rentals" 
                className="h-10 w-auto md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-yellow-500'
                      : 'text-white hover:text-yellow-500 '
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button (desktop only) */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#F6D03F] to-accent-500 text-black px-6 py-3 rounded-full font-semibold hover:from-[#F6D03F] hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Free Appraisal
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-black"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/20 backdrop-blur-md border-t border-secondary-200"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-[#F6D03F]'
                        : 'text-black hover:[text-yellow-500]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#F6D03F] to-accent-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
                >
                  Free Appraisal
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;