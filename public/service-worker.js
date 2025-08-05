const CACHE_NAME = 'fivestar-cache-v1';
const urlsToCache = [
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
  '/video_1.mp4',
  '/video_2.mp4',
  '/video_3.mp4',
  // ...yahan sabhi images/videos ka path add karein
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});