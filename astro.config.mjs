import { defineConfig } from "astro/config";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },

    plugins: [tailwindcss()],
  },
});