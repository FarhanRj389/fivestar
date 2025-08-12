import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BeatLoader } from 'react-spinners';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Home from './pages/Home';
import About from './pages/About';
import Landlords from './pages/Landlords';
import Tenants from './pages/Tenants';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BackgroundAnimation from './components/BackgroundAnimation';

// Add your image and video URLs here
const imageUrls = [
  '/',
  '/index.html',
  '/about_section.jpeg',
  '/banner_1.jpg',
  '/banner_3.jpg',
  '/banner_4.jpg',
  '/banner_5.jpg',
  '/banner_6.jpg',
  '/footer_logo.png',
  '/footers_logo.png',
  '/logo.png',
  '/meets.png',
  '/newzealand.jpg',
];
const videoUrls = [
'/video_1.mp4',
  '/video_2.mp4',
  '/video_3.mp4',
];

// function preloadMedia(urls: string[]) {
//   return Promise.all(
//     urls.map(
//       url =>
//         new Promise<void>(resolve => {
//           const ext = url.split('.').pop();
//           if (ext === 'mp4' || ext === 'webm') {
//             const video = document.createElement('video');
//             video.src = url;
//             video.onloadeddata = () => resolve();
//             video.onerror = () => resolve();
//           } else {
//             const img = new window.Image();
//             img.src = url;
//             img.onload = () => resolve();
//             img.onerror = () => resolve();
//           }
//         })
//     )
//   );
// }

function App() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   setIsClient(true);
  //   setLoading(true);
  //   preloadMedia([...imageUrls, ...videoUrls]).then(() => {
  //     setLoading(false);
  //   });
  // }, [location]);

  // if (!isClient || loading) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
  //       <BeatLoader color="#F6D03F" size={20} />
  //     </div>
  //   );
  // }

  return (
    <AuthProvider>
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
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppChat />
      </div>
    </AuthProvider>
  );
}

export default App;