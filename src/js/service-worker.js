const CACHE_NAME = 'nlp-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/bundle.js',
    '/styles.css',
];

// Install the Service Worker and cache the necessary files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event to serve cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
    );
});

// Activate the Service Worker and remove outdated caches
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(urlsToCache)) 
    );
  });
  
