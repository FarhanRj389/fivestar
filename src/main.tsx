
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
);

// Register service worker for offline caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      },
      err => {
        console.log('Service Worker registration failed:', err);
      }
    );
  });
}
