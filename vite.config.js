import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: {
        "components/usa-banner": "src/components/usa-banner/index.js",
        "components/usa-link": "src/components/usa-link/index.js",
        "components/index": "src/components/index",
      },
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "lit",
        },
        format: "es",
      },
    },
  },
});
