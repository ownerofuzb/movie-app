'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "50a46c3918ee88196fba375a6d8ef901",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d2e5887d6c5e242c511ab9d26108641e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "410934ca8900b80bf96c9563cd336a69",
".git/logs/refs/heads/main": "a02fbe0dc43c16a6c01b3a5ca240935a",
".git/logs/refs/remotes/origin/main": "f6a8ffbb4147db2be4afdc84967065b2",
".git/objects/02/f48b826ff4d2af2391e251c56dc7a94f8406ff": "2c82dc0c1ffc943c82af8bef0e69a889",
".git/objects/04/a172bddae02c87eb5bcee301eedcdffb43ceff": "8a88162e8585dbd3e59ae3e76336ce81",
".git/objects/0e/b678b49d3b139942f22a840817dfb6173f4b6b": "928ad6377307c1adac756a427239d70f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/e82d3abffa979e92f9560dd0802db166acbbdf": "a30f09803db67cf35fee14c9a358d50e",
".git/objects/1c/448912fba27ce4b6d4a5ecb1afdd4b166b2347": "38c236522d2f43f90582e6e2fa679073",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/30/37211e20567f66f1eaa185e800f1f7e41cc20d": "18a3664e7b27111dd8d88d51a35e64bc",
".git/objects/35/d01d42da1fd05755ce5b44fc02230cd147b79b": "c3d7fe1b260150db31111732bea08321",
".git/objects/3b/c238d575357636e78bd0ea87aa011597bc9e9d": "4f2e513afeb339b00e327228c0a51d49",
".git/objects/44/a526276540c663b136bdb0cf802674c34aac5f": "ca0ac69be5d9d848450dfd1da6ffe55f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/2de9480f7047f5e413bed20bd0c532d07c7f11": "d5603e1508fccd852d26f0529218454e",
".git/objects/4f/1187558e9b8378f53b9c5db24a13c5cbd40839": "74a125d6f2e1792e5269e9db6c54967c",
".git/objects/54/61d8faa08ab72ae0016a1d8cf1b75e26158560": "627e613c4540f364cf5878ea51c4c3f2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/e49484ce6e0d58d3ccd90327d3759780f5abdb": "10d379ab0bb4063936d0b7f3bc891278",
".git/objects/5b/3670016618fe4bfc203ddd5f3732338e6b0455": "3ac453d2a438ae8ec09153ec242ba3fe",
".git/objects/60/f7e70709fdc19c4dbe6d3a02c1425e976f21bc": "86a9af3f63a27348464d4a15e3a39f3b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/fab3ea25ba0fff2fe1980c1a833ed319e33784": "783b2cd2b0facd48984e4b5d442fb2f7",
".git/objects/6b/1e87aafca5e7154a53671a7bd6bbe2d2eb5d7f": "0411bb1309b08d05ded3e57858814cce",
".git/objects/6d/a5cb354440bf1c72271d8e99dde2d2a2213653": "f6b4be7850ebf28857f9a3cfaf05ecea",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/83/4614b17bacaf3160f8ccf5cf67f55891007d6d": "d266db2eeae078f3eb35f664cd60496e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/970a8574a0bd1b65daf7bf0e162e26f82a40fe": "7586c8abc4c5a7aed8c41b9687b1eb06",
".git/objects/88/7e60c039ccfb7459511020cbcb800c8f5c01ec": "2789e02849c8867788ff57eec736a0ff",
".git/objects/8c/ef5b60d62d7a8e6b13ca1b1c08e298f3dd02ad": "1076b1b84f40ad95c76505c05b469dda",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/d3cbac27bd1d075775f4d8f27c5c74291751dd": "d32afadf530204b107f0e1a4fce9f62f",
".git/objects/9f/9a1bae042ca93b645a4dc6f491872f5fc7777a": "d0f8be92e0d134f57361f29c046288a1",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a6/624a85749c2e2d9f0f6ca490f0a5f89df2d39e": "139e80248eeb328dfe91db00f272dcae",
".git/objects/b2/17b93d084f22fbab54317320746630b2f61936": "a8f9b465cbe4d02bb0e2aa96331e3f9b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/31a74543f1f67b4cb7cd26d3e190fa08534b3b": "2175f1e1bd3e77960f9376b8af3aa196",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/ba885669726a24c7ea97be9e72864b8bfec101": "84e93605aceb707beb7d5ceea8d5ccb4",
".git/objects/ce/aadc692e24cd13595d3afbce080da7ac98f6f5": "7a8deac8ddbf9ed3805d108b8a625d56",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/de/36bbb0dc952558618557652395e4973b275003": "e79bf1ad42e362cc6bb8c1de7d7cecae",
".git/objects/ea/388308166e7aed4d7ff9fd40abf8781e5beb71": "51230f9020fd27602e188ebf9d790f37",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/76bab472ea18ee2be1356ef7cf96071b2e2fda": "0f7b4e17438e85ffa2b1521d7b89c957",
".git/objects/f9/44f6082a6f506beb298f9a473df76629707d09": "d9372267db2104fa7879341817939f8a",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "f5e9bdf01be64252feebe8fe8488b3d8",
".git/refs/remotes/origin/main": "f5e9bdf01be64252feebe8fe8488b3d8",
"assets/AssetManifest.bin": "d68b48af6a8631054713573bf107058c",
"assets/AssetManifest.bin.json": "ac385e9d43bb480bfb3a2bd7b310c73c",
"assets/AssetManifest.json": "f10a7b8e030c2022f17c737a5704163c",
"assets/assets/icons/clock.png": "af51bbf8532baf6e35082bba93355e39",
"assets/assets/icons/ticket.svg": "85a4fab0e724a6951c97be308e48f9bc",
"assets/assets/images/bg.jpg": "a548d00eb6aa700ff827f1b3e4fdc60b",
"assets/assets/images/empty.png": "2eac9002aae344146f19f16010bd1cb4",
"assets/assets/images/home.svg": "bb943aa4c9dc6d3f42f30df15c9ad943",
"assets/assets/images/item.png": "f5ae76af330f6adf5acc6c82aa3caaf2",
"assets/assets/images/nothing%2520found.png": "0604a588ea9b6e6ef21f57b7b7a13806",
"assets/assets/images/save.svg": "1df10a0607d747e09489d8dd33152c4d",
"assets/assets/images/search.svg": "b6bdf4d8188450150a96012ae2d243a5",
"assets/assets/images/settings.svg": "32ab79bd51984c95e056b96dd40d3c12",
"assets/assets/images/splash.jpg": "83ac874cb529f1e138f509a93ed275ab",
"assets/assets/images/splash.png": "fc4182ba73d0cbf06ac4b0243fc53cfb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3b0d460306088f02fb02648a5fd25143",
"assets/NOTICES": "072528ecc987ae2991a2aac554d96dca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2949f24b1a9d0bd1f15e6005892fb49e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "26b025538965cfd2c9482b42267a74d1",
"icons/Icon-192.png": "2949f24b1a9d0bd1f15e6005892fb49e",
"icons/Icon-512.png": "2949f24b1a9d0bd1f15e6005892fb49e",
"icons/Icon-maskable-192.png": "2949f24b1a9d0bd1f15e6005892fb49e",
"icons/Icon-maskable-512.png": "2949f24b1a9d0bd1f15e6005892fb49e",
"index.html": "9f46524777889b69a9db2598f15c271f",
"/": "9f46524777889b69a9db2598f15c271f",
"main.dart.js": "b701e40edb7c9d3d13881fc075527091",
"manifest.json": "fc0d517bbfb0d64b4a9a0598dad79c19",
"version.json": "38b6ff1bef76e401ac0db481e0ce8897"};
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
