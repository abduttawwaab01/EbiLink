const CACHE_NAME = 'ebilink-v1';
const URLs = [
  '/',
  '/auth/login',
  '/family/create',
  '/app/globals.css',
  '/icon-192.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLs)).catch(() => {})
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
