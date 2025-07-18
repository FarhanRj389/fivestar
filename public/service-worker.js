const CACHE_NAME = 'fivestar-static-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/logo.png',
  '/footer_logo.png',
  '/footers_logo.png',
  '/meets.png',
  '/banner_4.mp4',
  '/banner_video_1.mp4',
  '/banner_video_2.mp4',
  '/banner_video_3.mp4',
  '/banner_3.mp4',
  // Add more assets as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  // Dynamically cache all image requests
  if (request.destination === 'image' || /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(request.url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(response => {
          if (response) return response;
          return fetch(request).then(networkResponse => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
      )
    );
    return;
  }
  // Default: try cache, then network
  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
}); 