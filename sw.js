// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches
//       .open("snap-modal")
//       .then((cache) =>
//         cache.addAll([
//           "/snap-modal",
//           "/snap-modal/index.html",
//           "/snap-modal/index.js",
//           "/snap-modal/index.css",
//         ])
//       )
//   );
// });

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
