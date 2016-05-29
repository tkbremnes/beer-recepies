function report() {
}

const cacheName = 'recipes';
const filesToCache = [
    // '/',
    // '/offline.html',
    // '/images/logo.png',
    // '/scripts/Utils/DataStore/index.js'
]
function setupCache(cache) {
    return cache.addAll(filesToCache);
}

self.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open('recipes')
            .then(setupCache)
            .then(report)
    );
});

self.addEventListener('fetch', (event) => {
    function handleResponse(response) {
        return response || fetch(event.request);
    }


    event.respondWith(
        caches.match(event.request)
            .then(handleResponse)
    );
});
