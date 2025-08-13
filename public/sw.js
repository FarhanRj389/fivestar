// Service Worker for Cache Management
const CACHE_NAME = 'fivestar-rentals-v1';
const STATIC_CACHE_NAME = 'fivestar-static-v1';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

// Resources to cache
const CACHE_URLS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/logo.png',
  '/video_3.mp4',
  '/about_section.jpeg',
  '/manifest.json'
];

// Helper function to check if cache is expired
function isCacheExpired(timestamp) {
  const now = Date.now();
  return (now - timestamp) > CACHE_DURATION;
}

// Helper function to store cache timestamp
function setCacheTimestamp() {
  return self.caches.open('cache-metadata').then(cache => {
    const timestamp = Date.now();
    return cache.put('timestamp', new Response(timestamp.toString()));
  });
}

// Helper function to get cache timestamp
function getCacheTimestamp() {
  return self.caches.open('cache-metadata').then(cache => {
    return cache.match('timestamp').then(response => {
      if (response) {
        return response.text().then(text => parseInt(text));
      }
      return null;
    });
  });
}

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(CACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
      })
      .catch((error) => {
        console.log('Service Worker: Cache failed', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }

        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a stream
          const responseToCache = response.clone();

          // Add to cache
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch((error) => {
          console.log('Service Worker: Fetch failed', error);
          // Return a fallback response if available
          return caches.match('/offline.html') || new Response('Offline');
        });
      })
  );
});

// Listen for messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('Service Worker: Clearing cache on tab close');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('Service Worker: Deleting cache', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        // Send confirmation back to main thread
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

// Handle unhandled promise rejections
self.addEventListener('unhandledrejection', (event) => {
  console.log('Service Worker: Unhandled promise rejection', event.reason);
});
