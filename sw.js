const cacheName = "restaurants-review-cache";

const urlsToCache = [
    '/',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
];

//Sw install
self.addEventListener("install", event => {
    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => cache.addAll(urlsToCache))
    );
});

//Sw fetch event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
        .match(event.request)
        .then(response => {
            if (response){
                return response;
            } 
            return fetch(event.request);
        })
    );
});