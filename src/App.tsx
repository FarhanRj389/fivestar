import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import { BeatLoader } from 'react-spinners';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Home from './pages/Home';
import About from './pages/About';
import Landlords from './pages/Landlords';
import Tenants from './pages/Tenants';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClient(true);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000); // 1s loader on every route change
    return () => clearTimeout(timer);
  }, [location]);

  if (!isClient || loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <BeatLoader color="#F6D03F" size={20} />
      </div>
    );
  }

  return (
    
      <div className="min-h-screen bg-white relative overflow-hidden">
        <BackgroundAnimation />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/landlords" element={<Landlords />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppChat />
      </div>
    
  );
}

export default App;