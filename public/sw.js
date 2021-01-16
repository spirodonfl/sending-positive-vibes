const preCacheName = "pre-cache-hbp";
const preCacheFiles = [
    "/",
    "css/leaflet.css",
    "css/leaflet.min.css",
    "css/main.css",
    "css/main.min.css",
    "css/light.css",
    "css/light.min.css",
    "css/dark.css",
    "css/dark.min.css",
    "css/all.min.css",
    "css/fontawesome/js/all.js",
    "js/animate.js",
    "js/animate.min.js",
    "js/geohash.js",
    "js/geohash.min.js",
    "js/main.js",
    "js/main.min.js",
    "js/leaflet.js",
    "js/leaflet.min.js",
    "js/leaflet.js.map",
    "js/all.min.js"
];

self.addEventListener("install", event => {
    console.log("installing precache files");
    caches.open(preCacheName).then(function (cache) {
        return cache.addAll(preCacheFiles);
    });
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (!response) {
                //fall back to the network fetch
                return fetch(event.request);
            }
            return response;
        })
    )
});

