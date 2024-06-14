import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["../../../node_modules/@uswds/uswds/packages"],
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "index.js"),
      name: "usa-banner",
      // the proper extensions will be added
      fileName: "usa-banner",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["lit"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          lit: "lit",
        },
      },
    },
  },
});
