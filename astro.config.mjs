// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";
// import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind(), react()],
//   i18n: {
//     defaultLocale: "es",
//     locales: ["es", "en", "fr"],
//     routing: {
//       prefixDefaultLocale: false,
//     },
//     // fallback: {
//     //   en: "es"
//     // }
//   },
// });

// astro.config.mjs
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // Adaptador de Vercel
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server", // Modo de salida para SSR
  integrations: [tailwind(), react()],
  adapter: vercel(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
