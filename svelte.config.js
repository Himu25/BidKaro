import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Enable preprocessors
  preprocess: preprocess(),

  kit: {
    // floc: true, // Optional: Enables FLoC (Federated Learning of Cohorts) if required
    adapter: adapter(), // Vercel adapter for deployment
    vite: {
      resolve: {
        alias: {
          // Custom aliases for easier imports
          $services: resolve("./src/services"),
        },
      },
    },
  },
};

export default config;
