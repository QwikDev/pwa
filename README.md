# Qwik PWA 📱

Turn your Qwik Application into an offline compatible PWA (Progressive Web Application) using Workbox but without the hassle.

## Installation

```sh
npm install --save-dev @qwikdev/pwa
```

`vite.config.ts`:

```ts
import { qwikPwa } from "@qwikdev/pwa";

export default defineConfig(() => {
  return {
    define: {
      // (optional) enables debugging in workbox
      "process.env.NODE_ENV": JSON.stringify("development"),
    },
    plugins: [
      qwikCity(),
      qwikVite(),
      // The options are set by default
      qwikPwa({
        /* options */
      }),
    ],
  };
});
```

`src/routes/service-worker.ts`:

```diff
import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";
import { setupPwa } from "@qwikdev/pwa/sw";

setupServiceWorker();

+setupPwa();

- addEventListener("install", () => self.skipWaiting());

- addEventListener("activate", () => self.clients.claim());

- declare const self: ServiceWorkerGlobalScope;
```

By default, your application will be auto-updated when there's a new version of the service worker available and it is installed: in a future version, you will be able to customize this behavior to use `prompt` for update:
```ts
import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";
import { setupPwa } from "@qwikdev/pwa/sw";

setupServiceWorker();
setupPwa("prompt");
```

`public/manifest.json`:
```diff
"background_color": "#fff",
+ "theme_color": "#fff",
```

For more information, check the following pages:
- [PWA Minimal Icons Requirements](https://vite-pwa-org.netlify.app/assets-generator/#pwa-minimal-icons-requirements)
- [PWA Minimal Requirements](https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html)
- [Add a web app manifest](https://web.dev/articles/add-manifest)

`src/components/router-head/router-head.tsx`:

```tsx
// PWA compatible generated icons for different browsers
import * as pwaHead from "@qwikdev/pwa/head";

export const RouterHead = component$(() => {
    ...
      {pwaHead.meta.map((l) => (
        <meta key={l.key} {...l} />
      ))}
      {pwaHead.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
    ...
```

Make sure you remove the `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` line in your router-head file.

Now your application is PWA-friendly.

## Precache

> One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used. [Chrome for Developers](https://developer.chrome.com/docs/workbox/modules/workbox-precaching/)

### Assets

Assets like js modules generated by qwik (`q-*.js`), images, `public/` assets, or any file that's emitted in the `dist/` directory by the build step would be precached when the service worker instantiates, so the plugin makes sure it provides the best client-side offline experience.

### Routes

By default in this plugin, every route that does not include params (`/` or `/demo/flower`) is precached on the first run of the application when the browser registers the service worker.

For the rest of the defined routes (routes with params like `/dynamic/[id]`, SSG routes, or API routes), they are not precached, but there are [workbox navigation routes](https://developer.chrome.com/docs/workbox/modules/workbox-routing) defined that would cache them on-demand and per request, the reason is precaching too many assets on the first run would cause a laggy experience for the user, especially when these kind of routes have the potential to generate so many more files.

Imagine there's an SSG `/blog/[id]` route that generates 120 blog posts, in this case, fetching 120 pages of blog posts in the application startup would not seem ideal.

#### Solution

Just fetch the desired page or asset so it gets cached for later uses.

```ts
fetch("/blog/how-to-use-qwik");
```

### API Routes

For API routes and any other routes that do not meet the conditions mentioned above, there's a [Network-First](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#network_first_network_falling_back_to_cach) handler.

## Manifest

The plugin would generate all of the [adaptive](https://web.dev/articles/maskable-icon) icons needed for different devices with different ratios in `manifest.json` based on your main icon in the build process using [@vite-pwa/assets-generator](https://vite-pwa-org.netlify.app/assets-generator/api.html#api).

### Screenshots

For full PWA compatibility, you can put your [screenshots](https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots) with the following pattern in the `public/manifest.json` file.

```json
    ...
    "screenshots": [
        {
            "src": "/screenshot.png",
            "type": "image/png",
            "sizes": "862x568"
        },
        {
            "src": "/screenshot.png",
            "type": "image/png",
            "sizes": "862x568",
            "form_factor": "wide"
        }
    ]
```

For beautiful screenshots, you can use [Progressier Screenshots Generator](https://progressier.com/pwa-screenshots-generator).
