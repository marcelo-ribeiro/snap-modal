self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("snap-modal")
      .then((cache) =>
        cache.addAll(["/", "/index.html", "/index.js", "/index.css"])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
