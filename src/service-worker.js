

//force new SW
workbox.core.skipWaiting();

//cache everything for offline use
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' ||
        request.destination === 'style' || request.destination === 'document',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);
