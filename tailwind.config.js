// import daisyui from "daisyui";
// import flowbite from "flowbite/plugin";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
//     "./node_modules/flowbite/**/*.js",
//   ],
//   // add daisyUI plugin
//   plugins: [daisyui, flowbite],

//   // daisyUI config (optional - here are the default values)
//   daisyui: {
//     themes: [
//       "light",
//       "dark",
//       "cupcake",
//       "bumblebee",
//       "emerald",
//       "corporate",
//       "synthwave",
//       "retro",
//       "valentine",
//       "halloween",
//       "garden",
//       "forest",
//       "aqua",
//       "lofi",
//       "pastel",
//       "fantasy",
//       "wireframe",
//       "black",
//       "luxury",
//       "dracula",
//       "cmyk",
//       "autumn",
//       "business",
//       "acid",
//       "lemonade",
//       "night",
//       "coffee",
//       "winter",
//       "dim",
//       "nord",
//       "sunset",
//     ],
//     darkTheme: "ther", // name of one of the included themes for dark mode
//     base: true, // applies background color and foreground color for root element by default
//     styled: true, // include daisyUI colors and design decisions for all components
//     utils: true, // adds responsive and modifier utility classes
//     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
//     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
//     themeRoot: ":root", // The element that receives theme color CSS variables
//   },
// };



// tailwind.config.js
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/daisyui/**/*.js", // Asegura que DaisyUI también esté incluido
  ],
  plugins: [daisyui, flowbite],

  // daisyUI config (corregido el nombre del tema oscuro)
  daisyui: {
    themes: [
      "light",
      "dark", // Tema válido para darkTheme
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    darkTheme: "dark", // Corregido a un tema válido
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
