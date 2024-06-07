import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ['./node_modules/@uswds/uswds/fonts/public-sans'],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
