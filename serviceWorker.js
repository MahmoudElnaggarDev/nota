const nota = "nota"
const assets = [
  "/",
  "/index.html",
  "/page.html",
  "/script.js",
  "/styles.css",
  "/css/all.min.css",
  "/fonts/Naskh.ttf",
  "/fonts/NotoSansArabic.ttf",
  "/fonts/Quran.ttf",
  "/images/icon-192x192.png",
  "/images/icon-256x256.png",
  "/images/icon-384x384.png",
  "/images/icon-512x512.png",
  "/js/Sortable.min.js",
  "/js/sweetalert2.all.min.js",
  "/pages/main.js",
  "/pages/styles.css",
  "/webfonts/fa-brands-400.ttf",
  "/webfonts/fa-brands-400.woff2",
  "/webfonts/fa-regular-400.ttf",
  "/webfonts/fa-regular-400.woff2",
  "/webfonts/fa-solid-900.ttf",
  "/webfonts/fa-solid-900.woff2",
  "/webfonts/fa-v4compatibility.ttf",
  "/webfonts/fa-v4compatibility.woff2",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(nota).then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  )
})