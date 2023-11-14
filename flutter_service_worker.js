'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "92e97438b97ba5d437580881ccdecbfe",
".git/config": "545e86d45384fdca609a1d24e89f97a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e4b53caf6b2512b6afe4b26bb86e2ad8",
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
".git/index": "089bef96fa9c6a21e93190467aafb112",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d840332fed356d78491634b17156b150",
".git/logs/refs/heads/main": "3990486c772612f624a7175432f8e3f1",
".git/logs/refs/remotes/origin/main": "31a26bfaccf640d68fc59fb47a9a9508",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0a/bd425d68fd6c95769eae22476c15534ef7921b": "e59fcc11a6c96ea2fb01d6c9791f9ca1",
".git/objects/0b/50c7581257597fd7f70de6e8939954ffbc53b8": "9c89e6874773236d5e602d50b06046bd",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/11/d3150a052df21b7a7d023acf2bd8d081deccb7": "21de7920c10c24e7d1eba8aab1601f4d",
".git/objects/12/9c9185152d21b02211748219e6e6872babd965": "ae576095b1edb898f608368a2fe4b982",
".git/objects/14/add31ac80540e1928abb1ec061fde6e5583b4d": "8cb4ed83a27e675e972d9cfab0ea7617",
".git/objects/16/7d852dac1b36b7931c045a4f4f401b2b768f87": "59bb94951ed5af9046520f646937bc63",
".git/objects/21/a29f8f0b07a2f9e2370ea9ccc75e5fbf841788": "bb59b44c174181633669662097d7dbc4",
".git/objects/22/6cb5eb7dc7094adb7601af4014350871b30f4b": "eadb45893ea61ff5b1cf87650e5c088e",
".git/objects/25/55b5c479e026a57213ab5fab1c1f17cc3a1b47": "a675d9c981d8df1166380df770ffb9ca",
".git/objects/2c/093bbb6edd325f5d61d7143c72033693011f84": "23f7c8355ef6ff26e855d23185c9cb5f",
".git/objects/2f/4cea1487ad9ab0cb14c38a4b57c131bc7050c9": "0481b237eb4a7d453a94766f493e986b",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/4d6a32f7b4406048525eb6f03cb958046233ef": "c7fdf0bfb1028a0157f4b453575cfe79",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/4b02ead6804e9c5f6b3394c592ef74b6cb6c1a": "10d126ba506a9b0bf1921aa8fa0a995f",
".git/objects/39/f781bcf90564ec58467efc86ef8f5ad32d0dd9": "7106749a1da797d84ee2e9999a3f22b5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/cc683a6c7fbb59e785c96981f18fc921ab63ca": "6ec4afb1bc9e754f1664b231ae32cf0e",
".git/objects/43/ba5bf1716c7ec5b484e0be85cc16baff793ac3": "ba0d5cc8a7e2b568441390dfdc2be254",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/56/df8224834971e056abf9b592196cd9be2dacc1": "56fbc0c5e6a346aead44f59db91debdc",
".git/objects/58/a2e034c5fcbd9808ba86e787e52c68c0876084": "094d4cfdd75c3739c3fbededa84d0339",
".git/objects/5c/03246ab7adcd2db0dc7476b213b15bc31ba179": "206d9da2087ad69f6e791fa49c1e1e7f",
".git/objects/5c/8f603ed904ed8ee7713de80ad1a0703283f24c": "d1154abc8f4e0ef385bd52f3710d9e4e",
".git/objects/61/07841bddd628823f4b61245b5034e7e09f9e42": "49ef13bc333ea64809fdc92b5c176127",
".git/objects/64/cfd7742b6e968c7694ea73bb08f1985cabaeab": "a778e2fb5791e1dff8e5951a7fc4613f",
".git/objects/67/16f65c20b162667ad53d276140c2e585d17f29": "a149aac2160e1ffe757e98eef663afd9",
".git/objects/69/2e7a5f6009fdf708838c92e46bc3d15bb1ff85": "443d41365053cf93a62288cd1c397f06",
".git/objects/6f/57214764fa56f329820b52fa7f09970495dd8d": "f2ec980f0824d08dc5920db57204b7fb",
".git/objects/70/1a731a62cddfe8ed745e6074a5e97dbc3469fc": "892a722d954eac201a17c820c3cd7fd1",
".git/objects/78/4487a5fc0a024a3a2eae57175fafa76db8fdaf": "5786b342b64dba3030afa0bbaafc6ec6",
".git/objects/7f/838d3c9f220dbca91c3dd553acb2d3b3663c77": "8f6570f2726e42671334de4ca1dbfab8",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/a8b01c8d20734c4b2c330284ef549c701aeaea": "bd972539a0c94dfeab8766d83b84e9e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1632e97f71475048e6017890659e1ea0684f35": "a49658afca419007395a297218b2758b",
".git/objects/8e/2b4fe22125ec9d7529a3afc25f59455f1db007": "4f8dd8f454f4a9c794c5968e526699b2",
".git/objects/94/18bcc779721b02275a4e9dd5f91f06cf9757ba": "03b630361ecf0d12e7aa3201dc0af9bb",
".git/objects/94/97a138a64a6dbcc1d000b8c0c28cdcfa7a57a6": "63f61388a8607100f550957eea3692a0",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/c1518d64ab62eab417c180285755348b18a9dc": "76912748e9526659b3b0c60b3a984dc5",
".git/objects/9a/7136f78b508eb3b4ce9c9b47648800f662b60a": "78dbd8a512ba1345ae34e268863bf7b5",
".git/objects/9b/eb2dba8ad5aa0d16545125a183f2da7b62ddb2": "2033aa6cbaaf591d590e63557c637e0d",
".git/objects/9c/cb841b23fe586581cb76a7aba7973cc84a42cb": "d0ff322749d21c46ae9d9f98155abb93",
".git/objects/9f/335db2a190e15b33c38b5d3353f57167b3b23b": "e358cd0a4457a4cb988fa4406ef540a7",
".git/objects/a1/5729f0df35dd12e1b42eeb021f7c7d0358249b": "e5eb5c44f7a38138de5240cc8cac4b3e",
".git/objects/a4/2bda1378f7f6dba88f874a7273347352bfd1ae": "5e344ce6487effdbbc6782d5da907584",
".git/objects/a5/5ba66336eee8641bc47f5e4f940e4d03a4d491": "1777f9a86e90c146463c6a9741e24e48",
".git/objects/a6/78b6b9b048cc794e8513d3afc350482e74ef4e": "be66f0f6de84648815a81b6040902054",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/1f3539ad1fa1ffc591bb07bb8a542454944b02": "1090565d7820ef707682ea43c3e31f64",
".git/objects/b5/957e577f8216437d8f2ca026fd9da043dd14e3": "17c53b62d26cd6ef7f23b0d53f15c1e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/bb7fe2f0de361978c20c9c010bd406b41b35f0": "e48b11f57967f3de8284dbc7bead701f",
".git/objects/cc/66bc34bea51c3eed495f704d5c999e20ea7942": "b5212e974788f9393a1f41e553039993",
".git/objects/ce/678fd9c077372a44e47378ec8b8f21a9d3b0a7": "db70322c5477b102acf751e56d7733d1",
".git/objects/d1/db2cd644f2993bc9c40f95ef549b5b2a1eab98": "f7a49a9ac5708ff2484cb470da0ef437",
".git/objects/d2/06e314261df3e419b3a92f985cdafbf8be86a7": "3e141b8c466f47d81b0e426d14c401a8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b868c67e6c3f47ce4fcd4f126a5bfd771efdb8": "23dbd4db29255fbb41ffb1a8b6f87019",
".git/objects/e5/705593b7863fc6a2b1bf2f7739354593df6102": "0e7716e3f9353ed176df54f186a8f763",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/e76452c4f1ca49dbf355722b30095b564fb857": "12b03225a82c0ef34aedf331de1aa804",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/e8771e3af20b3b5a178ab295b0d20f26d2179b": "1754a1a98c450923415c754054ecec89",
".git/ORIG_HEAD": "9a4b132cae92983aef21c19931b40a02",
".git/refs/heads/main": "0d3687f9400d8a0d2bf6195bd0d23d28",
".git/refs/remotes/origin/main": "0d3687f9400d8a0d2bf6195bd0d23d28",
"assets/AssetManifest.bin": "54679e41637e681e3b617c17148b4d27",
"assets/AssetManifest.json": "b49a24c5b82ce5ccbaab2ec3d0ed989b",
"assets/assets/alfred.json": "474cfef8553b7959748eae0ad9e04609",
"assets/assets/tvinna.txt": "030f6388d88b7fbeaec847ffcaedf818",
"assets/assets/tvinnacss.txt": "2aaa0e5481b7ff767e984a003b149bda",
"assets/assets/tvinnadatabase.txt": "a31bef0f415bb60e130a27082d2ba73d",
"assets/assets/tvinnahtml.txt": "553a418a4e2b244b84af828149cdae87",
"assets/assets/tvinnajavascript.txt": "95e39a8868235dd941874740a5f18f89",
"assets/assets/tvinnasql.txt": "93f9d58a9b750c76b42d2d54415793ea",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9c9b2e7e44cba1d69c63eabb2f9ee440",
"assets/NOTICES": "cd78842b9629ed4ad36d0729db1a4f5c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10ae8751151ddb62f2393c6f344c4f8d",
"/": "10ae8751151ddb62f2393c6f344c4f8d",
"main.dart.js": "1b29a98a57c963d83731626470db87a1",
"manifest.json": "ea77cfd6afa4546f44bc5b1731cf6648",
"README.md": "0044e3b3ad7c698a5a1519fa94dc98b9",
"version.json": "2b3d53f651a99066965da9a9cf755e09"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
