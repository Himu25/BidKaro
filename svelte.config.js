import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: "200.html",
    }),

    vite: {
      resolve: {
        alias: {
          $services: resolve("./src/services"),
        },
      },
    },
  },
};

export default config;
