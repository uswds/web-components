import js from "@eslint/js";
import eslintConfigPrettierRecommended from "eslint-config-prettier";
import vitest from "@vitest/eslint-plugin";

export default [js.configs.recommended, eslintConfigPrettierRecommended, vitest];
