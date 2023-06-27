const CACHE_NAME = "version-1";


const urlsToCache = [
    './index.html',
    './static/css/main.css',  
    './static/js/main.js',   
    './manifest.json',
    './iconLogo.png'
];


self.addEventListener('install', async function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


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
