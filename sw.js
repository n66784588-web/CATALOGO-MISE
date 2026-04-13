const CACHE_NAME = "catalogo-mise-v1";

const urlsToCache = [
  "/CATALOGO-MISE/",
  "/CATALOGO-MISE/index.html",
  "/CATALOGO-MISE/manifest.json",

  // IMÁGENES
  "/CATALOGO-MISE/img/producto1.jpg",
  "/CATALOGO-MISE/img/producto2.jpg",
  "/CATALOGO-MISE/img/producto3.jpg",
  "/CATALOGO-MISE/img/producto4.jpg",
  "/CATALOGO-MISE/img/producto5.jpg",
  "/CATALOGO-MISE/img/producto6.jpg",
  "/CATALOGO-MISE/img/producto7.jpg",
  "/CATALOGO-MISE/img/producto8.jpg",
  "/CATALOGO-MISE/img/producto9.jpg",
  "/CATALOGO-MISE/img/producto10.jpg",
  "/CATALOGO-MISE/img/producto11.jpg",
  "/CATALOGO-MISE/img/producto12.jpg",
  "/CATALOGO-MISE/img/producto13.jpg",
  "/CATALOGO-MISE/img/producto14.jpg",
  "/CATALOGO-MISE/img/producto15.jpg",
  "/CATALOGO-MISE/img/producto16.jpg",
  "/CATALOGO-MISE/img/producto17.jpg",
  "/CATALOGO-MISE/img/producto18.jpg",
  "/CATALOGO-MISE/img/producto19.jpg",
  "/CATALOGO-MISE/img/producto20.jpg",
  "/CATALOGO-MISE/img/producto21.jpg",
  "/CATALOGO-MISE/img/producto22.jpg",
  "/CATALOGO-MISE/img/producto23.jpg",
  "/CATALOGO-MISE/img/producto24.jpg",
  "/CATALOGO-MISE/img/producto25.jpg",
  "/CATALOGO-MISE/img/producto26.jpg",
  "/CATALOGO-MISE/img/producto27.jpg",
  "/CATALOGO-MISE/img/producto28.jpg",
  "/CATALOGO-MISE/img/producto29.jpg",
  "/CATALOGO-MISE/img/producto30.jpg",
  "/CATALOGO-MISE/img/producto31.jpg",
  "/CATALOGO-MISE/img/producto32.jpg",
  "/CATALOGO-MISE/img/producto33.jpg",
  "/CATALOGO-MISE/img/producto34.jpg",
  "/CATALOGO-MISE/img/producto35.jpg",
  "/CATALOGO-MISE/img/producto36.jpg",
  "/CATALOGO-MISE/img/producto37.jpg",
  "/CATALOGO-MISE/img/producto38.jpg",
  "/CATALOGO-MISE/img/producto39.jpg",
  "/CATALOGO-MISE/img/producto40.jpg",
  "/CATALOGO-MISE/img/producto41.jpg",
  "/CATALOGO-MISE/img/producto42.jpg",
  "/CATALOGO-MISE/img/producto43.jpg",
  "/CATALOGO-MISE/img/producto44.jpg",
  "/CATALOGO-MISE/img/producto45.jpg",
  "/CATALOGO-MISE/img/producto46.jpg",
  "/CATALOGO-MISE/img/producto47.jpg",
  "/CATALOGO-MISE/img/producto48.jpg",
  "/CATALOGO-MISE/img/producto49.jpg",
  "/CATALOGO-MISE/img/producto50.jpg",
  "/CATALOGO-MISE/img/producto51.jpg",
  "/CATALOGO-MISE/img/producto52.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
