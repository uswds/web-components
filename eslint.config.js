import js from "@eslint/js";
import eslintConfigPrettierRecommended from "eslint-config-prettier";
import vitest from "vitest";

export default [
  js.configs.recommended,
  eslintConfigPrettierRecommended,
  {
    files: ["**/*.spec.js"],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
];
