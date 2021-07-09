'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f42e3332948506d7418cf8f9218976f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ba0a2cac098f0bb20174f386ac5e9af6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "388ad5ef20b0ddcca545d5db6bf69e98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6ec0cb2c0a6a7e74da305c3563fbbcc",
".git/logs/refs/heads/master": "d6ec0cb2c0a6a7e74da305c3563fbbcc",
".git/logs/refs/remotes/origin/main": "323874739b4d233f88bceeca7b85c4fe",
".git/logs/refs/remotes/origin/master": "4619775792dcd56d3e52f8f3907a8b7e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/0cf3afb7e4bbe9c19753be9d038c48683761c4": "f39fe46d07ca9f19e4b436873d1a5c82",
".git/objects/14/955d7ba99fcbb57288d720787d06d562fc0216": "f978312c4e99408eadae34bd77a7e100",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/35/2e92f16fbc8cec2e4a07194d078381c59e9610": "5f1e8d7e4ffee10f63b9968a46c2dfe7",
".git/objects/37/5d1bbbd10c5ce4f3ff7e2349392bd1c5d39093": "4a10146b926bed478ee6c5b2059751fc",
".git/objects/41/5bae78416890b36f7edefd283da67d92695b0e": "79c5b83d0716c9fc85925ac6999d4ae5",
".git/objects/41/5cf1d56f60885ab6ac7217cf843b61b3cf2205": "e8baf262960844d3ecd88ed679663c43",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/62/81e31f9ade19aa72b6a2fa7df14fbfe9d61a1d": "f3cd5d5c3dc563bce9ddaaea79dcd92a",
".git/objects/67/1287f4f909c6536d7de42dbe1d2cf027e2113c": "74d41018fe14129bceebe95edc257e0b",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/68/08c4ea1afeeaa17b4c7b583b3ae446d15bd1a7": "f082ef93699f5e05a54bd7d8bc11058d",
".git/objects/72/052faccd03fb6dd39fbdf15201198a489b7239": "ce5eab879f2eb77ff539e9218b3e9f20",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/92/d42d413dc9fb5b6debbdbd7e95c608ae11652e": "277b2fcfe1fca76d4c9d1fb8b0551cd1",
".git/objects/96/2a0133cfd9fb5730494cc0c698fb4ca6bc178d": "982ab8312fa40cbd18f2de225f2ee5e8",
".git/objects/99/38df8f89f68a48b00662b043947b8c0df433d0": "d8029b9dc80f5068af80dee353398514",
".git/objects/9a/e0530fe7b64f32ee3fa95ee34fae0546193847": "bb19ee206400a39f44ec6d33cc00bda1",
".git/objects/9e/da2bfa42d634475d8d60636ea8085858a2bbd2": "5c00b26204edb1934c967ee3ff05ab54",
".git/objects/9f/999314c24fbc9bfd9155fcf5ddd240443725bb": "b40c519b3447cfd9e657ec8d1ee68295",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/fc3ea3de84027b7cface270dac5bcc58bfc6c1": "6a229c8ee1a739366e66e11c28aed78a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/521ec428107d0ec0c6f9b4a2170f8687f03c2f": "402783315121f4a9ab320a69d6ceee09",
".git/objects/b2/d96b025bca7333f8cb7ff4a57072f6000a8e73": "4e84c8b989ad41bb8ea9a4f3f7dfc421",
".git/objects/b5/ee08221531c7ee69ff313ed86fa256f9474261": "7772d979f9c875252df7585df5a71516",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ce/eb624cfdd61ff9838a638851f53ccdacced737": "dead7d5ad015dd6be92a375d86df36ea",
".git/objects/d6/57ec861edd3663caa7ffc0d835888d50472b2e": "2a1c4513c6908cb76bf7c14d347b0271",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/dc/b96ed82ec25274882fd1bfe7559210423a12ed": "fae91ac9845399e463c7930293124268",
".git/objects/dc/b97da1645ac25d9ef1f05b3b9ec44e997ba1b0": "34130cf0833ef2d3d92721fc9b7cf6fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/3c7bd19c3454a097395bd3430bad49c2fd6da1": "3c740f28cf5913b11a193dbedc02eea3",
".git/ORIG_HEAD": "21b4f52465bba9f9a4eb441c9ca0c143",
".git/refs/heads/master": "842a9a180501278dcf788ab4ebc4a1ec",
".git/refs/remotes/origin/main": "d1d7f0bbb34d38c1b64de78034b34beb",
".git/refs/remotes/origin/master": "842a9a180501278dcf788ab4ebc4a1ec",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "278c550e38939a8cad073c60104b7948",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e6752e91b057b3bc115be5737058f67c",
"/": "e6752e91b057b3bc115be5737058f67c",
"main.dart.js": "15c3decc24d9a1c5739c790a463608fd",
"manifest.json": "1c7ddb0e50049b834522bbe988ad85aa",
"version.json": "d72bc9976739aabcd64be1bd513a658d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
