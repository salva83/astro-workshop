// @ts-check
import {defineConfig, envField} from "astro/config";

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// pending to define env under defineConfig , config -> to be fixed second part
// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
        // Define your environment variables here
      }
    }


});
