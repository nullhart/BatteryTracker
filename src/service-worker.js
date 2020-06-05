//force new SW
workbox.core.skipWaiting();
workbox.precaching.cleanupOutdatedCaches()
workbox.precaching.precacheAndRoute(self.__precacheManifest);




