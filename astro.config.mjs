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


import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // Importa el adaptador de Vercel
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server", // Mantén el modo de salida como "server"
  integrations: [tailwind(), react()],
  adapter: vercel(), // Configura el adaptador de Vercel
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

