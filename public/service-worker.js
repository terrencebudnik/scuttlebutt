// Give your cache a name. You can name it anything you want.
const CACHE_NAME = "version-1";

// The files we want to cache.
const urlsToCache = [
    './index.html',
    './static/css/main.css',  // Update with actual CSS file path
    './static/js/main.js',    // Update with actual JS file path
    './manifest.json',
    './iconLogo.png'
];

// Set the callback for the install step
self.addEventListener('install', async function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Set up a listener for fetching. Log requests and serve cached responses when possible.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                else if (event.request.headers.get('accept').includes('text/html')) {
                    return caches.match('index.html');
                }
                else {
                    return fetch(event.request);
                }
            })
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
