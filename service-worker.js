function report() {
    console.log('cache setup');
}

const cacheName = 'recipes';
const filesToCache = [
    '/',
    '/offline.html',
    '/images/beer.jpg'
]
function setupCache(cache) {
    return cache.addAll(filesToCache);
}

self.addEventListener('install', (event) => {
    console.log('installed');

    event.waitUntil(
        caches.open('recipes')
            .then(setupCache)
            .then(report)
    );
});

self.addEventListener('fetch', (event) => {
    function handleResponse(response) {
        console.log('handling response');
        return response || fetch(event.request);
    }

    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request)
            .then(handleResponse)
    );
});
