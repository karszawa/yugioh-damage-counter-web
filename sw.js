importScripts('/yugioh-damage-counter-web/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/yugioh-damage-counter-web/_nuxt/0e101d2cd0373aca57a0.js",
    "revision": "42a0b8fa3b6a65a79dd8646cf778ac6f"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/3c7e92ad276a1e97dfc8.js",
    "revision": "f35b98b9e53c778e16bf74193ad68a2f"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/78ff28dc40de0fb5a05e.js",
    "revision": "9ba1476e55654c278f9d88dfd568ab3c"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/a69e5b31ec32cb066768.js",
    "revision": "72914d5003449c138e6f317a4ea47b61"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/af02622602bf2044c045.js",
    "revision": "ac9e3d723aa5ca9f8c98de48a661bbb8"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/c17865727a62cf508835.js",
    "revision": "b64affda6576e175b35f46c61ba07bf0"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/c75987c12f5377e886aa.js",
    "revision": "2045304f9c29e53d32f6540b85996e5c"
  },
  {
    "url": "/yugioh-damage-counter-web/_nuxt/f90764eaa1ea61a52fdf.js",
    "revision": "e22c333bd376d6f08a696a40b4529b15"
  }
], {
  "cacheId": "yugioh-damage-counter-web",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/yugioh-damage-counter-web/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/yugioh-damage-counter-web/.*'), workbox.strategies.networkFirst({}), 'GET')





