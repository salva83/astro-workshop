// @ts-check
import { defineConfig } from "astro/config";

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// pending to define env under defineConfig , config
// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },

});
