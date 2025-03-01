/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-54d0af47'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_astro/_inhabitant_.CvGgkRqL.css",
    "revision": null
  }, {
    "url": "_astro/apteronotus-albifrons.yWH96smL_2kjy2v.webp",
    "revision": null
  }, {
    "url": "_astro/apteronotus-albifrons.yWH96smL_Z1ntnOG.webp",
    "revision": null
  }, {
    "url": "_astro/apteronotus-albifrons.yWH96smL.webp",
    "revision": null
  }, {
    "url": "_astro/arapaima-gigas.wztt2oIH_Z18HWS8.webp",
    "revision": null
  }, {
    "url": "_astro/arapaima-gigas.wztt2oIH_ZWuKiW.webp",
    "revision": null
  }, {
    "url": "_astro/arapaima-gigas.wztt2oIH.jpg",
    "revision": null
  }, {
    "url": "_astro/copella-arnoldi.kUkWBs57_6cton.webp",
    "revision": null
  }, {
    "url": "_astro/copella-arnoldi.kUkWBs57_ZuI2gJ.webp",
    "revision": null
  }, {
    "url": "_astro/copella-arnoldi.kUkWBs57.webp",
    "revision": null
  }, {
    "url": "_astro/de.X1CKQ2hZ_Z183WHN.svg",
    "revision": null
  }, {
    "url": "_astro/it.Cuc9d1HD_qxNEL.svg",
    "revision": null
  }, {
    "url": "_astro/Layout.astro_astro_type_script_index_0_lang.DnIm7xSb.js",
    "revision": null
  }, {
    "url": "_astro/mangrove-trees.BCj_Iffw_1wmHXe.webp",
    "revision": null
  }, {
    "url": "_astro/mangrove-trees.BCj_Iffw.jpg",
    "revision": null
  }, {
    "url": "_astro/si.CP_nfZEa_Z1dbIkM.svg",
    "revision": null
  }, {
    "url": "_astro/uk.BxCTwkF-_Z22vaqk.svg",
    "revision": null
  }, {
    "url": "_astro/workbox-window.prod.es5.B9K5rw8f.js",
    "revision": null
  }, {
    "url": "apple-touch-icon-180x180.png",
    "revision": "65d56d5f3219293fe60c960c88919bf2"
  }, {
    "url": "en/mangrove-forest/about/index.html",
    "revision": "3449c73297fa08ce10dcaf0c3c6a893c"
  }, {
    "url": "en/mangrove-forest/apteronotus-albifrons/index.html",
    "revision": "e9bd95bbc71f011e75b9e0a69bf39d71"
  }, {
    "url": "en/mangrove-forest/arapaima-gigas/index.html",
    "revision": "5a6fad0e5b06df376e15a0a240b2e5b7"
  }, {
    "url": "en/mangrove-forest/copella-arnoldi/index.html",
    "revision": "64faba1ea0a90045776786f58f1fb9b1"
  }, {
    "url": "en/mangrove-forest/index.html",
    "revision": "c03cf6c4f03c5d9ce06caab91c548296"
  }, {
    "url": "favicon.ico",
    "revision": "b436410976f5d1e3d19afd9d7cfc3767"
  }, {
    "url": "favicon.svg",
    "revision": "06ba84e72a9cf00c4ebed0f9ffe54bc5"
  }, {
    "url": "maskable-icon-512x512.png",
    "revision": "e1dbd9ca8bf6f2ad71a1793945355fb7"
  }, {
    "url": "pwa-192x192.png",
    "revision": "ea39832b6822cadcf01228a1e1673b3d"
  }, {
    "url": "pwa-512x512.png",
    "revision": "e5577a8810170f56a7be0e4852d981e1"
  }, {
    "url": "pwa-64x64.png",
    "revision": "d6958e884e9fc30ef3e62d68592456f8"
  }, {
    "revision": "3449c73297fa08ce10dcaf0c3c6a893c",
    "url": "en/mangrove-forest/about/"
  }, {
    "revision": "e9bd95bbc71f011e75b9e0a69bf39d71",
    "url": "en/mangrove-forest/apteronotus-albifrons/"
  }, {
    "revision": "5a6fad0e5b06df376e15a0a240b2e5b7",
    "url": "en/mangrove-forest/arapaima-gigas/"
  }, {
    "revision": "64faba1ea0a90045776786f58f1fb9b1",
    "url": "en/mangrove-forest/copella-arnoldi/"
  }, {
    "revision": "c03cf6c4f03c5d9ce06caab91c548296",
    "url": "en/mangrove-forest/"
  }, {
    "url": "manifest.webmanifest",
    "revision": "d80cdcffb57b3f47fb75e6131beafdc2"
  }], {
    "directoryIndex": "index.html"
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/neotropica-showroom/")));

}));
