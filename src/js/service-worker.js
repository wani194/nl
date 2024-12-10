import { precacheAndRoute } from 'workbox-precaching';


precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/bundle.js', revision: '1' },
    { url: '/styles.css', revision: '1' }
]);

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
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {

                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

