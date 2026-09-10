import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "internals/**/*.spec.{js,ts}",
      "internals/**/*.test.{js,ts}",
    ],
  },
});
