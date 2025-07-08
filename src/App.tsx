import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  return (
    <Router>
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
    </Router>
  );
}

export default App;