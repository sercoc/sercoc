'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f008e6cab834cad23c8ceea55cfedf5",
"assets/AssetManifest.bin.json": "e75d08e09a3b95014292c7fb36c65809",
"assets/AssetManifest.json": "f2a6b30396002275b517b394123ef2f8",
"assets/assets/fonts/sc-font.ttf": "041095d75b7382e8ca3c04320f515d2a",
"assets/assets/icons/iconcoc.jpg": "4a140e6709b967c1a7152104f3d92b3c",
"assets/assets/icons/ok.png": "cada5135b52a06dce162ddf66c116d6f",
"assets/assets/icons/sc.jpg": "e09621df92586038eb0bae3fe8b1aae1",
"assets/assets/icons/stats.png": "5ffe42ea43c19baab52d61e3523658bf",
"assets/assets/icons/user.png": "d34caa4c4c1988c1ffde70a3975aa6d7",
"assets/assets/images/attack.png": "90826fe076d07b9580d330498a5fd0a3",
"assets/assets/images/bgcapital.jpg": "9a4e2f61845ab3b26657803986e3f94e",
"assets/assets/images/clash.png": "5418c22959f49bb0234847d0f1d865de",
"assets/assets/images/coc.png": "edfd406a9defffaf7beb0aafca716f75",
"assets/assets/images/cwl.jpg": "e32b797928bd6e10bd39b00656f0b21b",
"assets/assets/images/diggy.png": "8266dac7808274a5274178fe7765dfe2",
"assets/assets/images/discord.png": "b03f85c0a00282f5dccc79e0d6bda703",
"assets/assets/images/fondo_menu.png": "de0d707407f9b3ab591ee701408da744",
"assets/assets/images/fox.png": "1af8b67c22653b242850cfbbd57b5dea",
"assets/assets/images/frosty.png": "40a842768455943639599362af15680d",
"assets/assets/images/horror.png": "bcba2cbb03bf6beb1315135fbfb47c74",
"assets/assets/images/jelly.png": "5e8671042ad0a4ac9f66673277c330ae",
"assets/assets/images/king.png": "00e2aa42fe1014f7361982d3ede8a842",
"assets/assets/images/lassi.png": "191a88d49894b4d07cdabef5dec22c09",
"assets/assets/images/lizard.png": "dd27bd55a8c172705cfb2b7b03daea15",
"assets/assets/images/minionP.png": "7118c9c69827b91c469fa857a397014f",
"assets/assets/images/nosabe.png": "03e913520293a7d86458ec6712fed43a",
"assets/assets/images/num1.png": "85e14c0e00120d6070b9748256d466ec",
"assets/assets/images/num2.png": "e28e3bcb1fe30e7c0d8bec0e61697114",
"assets/assets/images/num3.png": "c78d75553a0731b69a21ecb4ec5c02be",
"assets/assets/images/owl.png": "93db05383bb896200dbb372d032f1404",
"assets/assets/images/phoenix.png": "00cfa038a4655891c55e6808b8c13bc1",
"assets/assets/images/queen.png": "bc15060008fff8be3326998a859a838f",
"assets/assets/images/royal.png": "9053f772efe4974d297d38e59f542cb6",
"assets/assets/images/sarquera.png": "02f17786cb4e3a4aaa64ec7a0662c43b",
"assets/assets/images/sbaby.png": "3d8b608259c661eaeb8cb115f73dfa50",
"assets/assets/images/sbarbaro.png": "7236e0ea129f81effa4e9dba6868735c",
"assets/assets/images/sbolero.png": "56b2faf7f530d1842694ec846d945885",
"assets/assets/images/sbruja.png": "367771c2c2ab86ad7fe7fba034092ac8",
"assets/assets/images/sdragon.png": "8fa0487218dec430fac5c082134fe680",
"assets/assets/images/sduende.png": "5dfe3c5e50ee23137d1bd8d37383d44d",
"assets/assets/images/sgigante.png": "3ce741879fa15212832f5342428ef2f8",
"assets/assets/images/shog.png": "ccf10aa8d4b1beb0c52df6e0bf0aec8c",
"assets/assets/images/slava.png": "5b5355c50f5d042cf83cf152c77e4bdc",
"assets/assets/images/sloon.png": "22bbeb60da571e3f967311b9cd91edd9",
"assets/assets/images/smago.png": "bbb9f535576d5d93600b27065c50ff72",
"assets/assets/images/sminero.png": "982bee83556452e3ea87d1bbb95d97fc",
"assets/assets/images/sminion.png": "09ad10308f66ed4f5ae4d02c90a070b5",
"assets/assets/images/sneezy.png": "06fa2d4314e1ade42aecc6290287b7b8",
"assets/assets/images/srompe.png": "799f1f55b6b71138ddfe46bab3bc4a77",
"assets/assets/images/star.png": "707160a046434bab08e8cb46016edf6b",
"assets/assets/images/svalk.png": "eef5cb4c0a3f6d4a2710ff8ec7c840e1",
"assets/assets/images/unicorn.png": "95b4989f6a56ef3f5502290c23418d55",
"assets/assets/images/war.png": "0786abd9b3ef5481d2d7790ee4110c78",
"assets/assets/images/warden.png": "6a3e6aecec02a488d103ad206c64d180",
"assets/assets/images/yak.png": "dba6b45da6541e018f86d92bdbbab906",
"assets/FontManifest.json": "72de55e2776efeed26111fe10ec83138",
"assets/fonts/MaterialIcons-Regular.otf": "fdf33f0567170061c7406196146dfc43",
"assets/NOTICES": "2e45f43ed88edf9011969531e7c71d03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "b1a2c2fe2f3334d66531824527431dd0",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "674e003b0c251162c4ffaa9d8c58bdc4",
"icons/Icon-192.png": "3b6f1e487902527da58f976619d887a2",
"icons/Icon-512.png": "6d8c03a0e280cedd50a95e750040926b",
"icons/Icon-maskable-192.png": "3b6f1e487902527da58f976619d887a2",
"icons/Icon-maskable-512.png": "6d8c03a0e280cedd50a95e750040926b",
"index.html": "5590a69d321dde7b939a77c1c43f5222",
"/": "5590a69d321dde7b939a77c1c43f5222",
"main.dart.js": "2778bc6a8f3c026bacf7a576faeb8688",
"manifest.json": "381cb863f8150f8d255a0bf99ea41b82",
"version.json": "98281633ddac3762f8d9dbbce8bf0b31"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
