// sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("your-cache-name").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        // Add more files to cache as needed
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
