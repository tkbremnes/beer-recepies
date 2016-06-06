const cacheVersion = "v7"; // get this from hash from files

const cacheName = 'recipes';
const filesToCache = [
    '/',
    'index.html',
    'Reset.css',
    'about.html',
    'offline.js'
]
function setupCache(cache) {
    console.log('setting up cache');
    return cache.addAll(filesToCache);
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheVersion)
            .then(setupCache)
            // .then(sendMessage.bind(null, { type: 'CACHED'} ))
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

this.addEventListener('activate', function(event) {
    var cacheWhitelist = [cacheVersion];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
