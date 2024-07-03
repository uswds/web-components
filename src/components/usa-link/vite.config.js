import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "index.js"),
      name: "usa-link",
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "lit",
        },
      },
    },
  },
});
