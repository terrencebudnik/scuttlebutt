// Give your cache a name. You can name it anything you want.
const CACHE_NAME = 'your-cache-name';

// The files we want to cache.
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  './iconLogo.png',
  './scuttlebuttLogo.svg'
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
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
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
