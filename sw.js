/* Offline support for Citizenship Civics. */
const CACHE = 'civics-14afd7b113';
const ASSETS = ["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png","./fonts/libre-caslon-text-latin-400-normal.woff2","./fonts/libre-caslon-text-latin-400-italic.woff2","./fonts/libre-caslon-text-latin-700-normal.woff2","./fonts/libre-caslon-display-latin-400-normal.woff2"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Network first so updates arrive, with the cached copy when offline or slow.
    e.respondWith(new Promise((resolve) => {
      let done = false;
      const fallback = () => caches.match('./index.html').then((r) => { if (!done && r) { done = true; resolve(r); } });
      const timer = setTimeout(fallback, 3000);
      fetch(req).then((res) => {
        clearTimeout(timer);
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); }
        if (!done) { done = true; resolve(res); }
      }).catch(() => { clearTimeout(timer); fallback().then(() => { if (!done) { done = true; resolve(Response.error()); } }); });
    }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
