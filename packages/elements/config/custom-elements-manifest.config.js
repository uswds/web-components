import { customElementReactWrapperPlugin } from "custom-element-react-wrappers";
import { customElementSolidJsPlugin } from "custom-element-solidjs-integration";
import { customElementJsxPlugin } from "custom-element-jsx-integration";
import { customElementVuejsPlugin } from "custom-element-vuejs-integration";
import { customElementSveltePlugin } from "custom-element-svelte-integration";

const defaultOptions = {
  outdir: "./dist/types",
  modulePath: (_, tagName) => `../dist/components/${tagName}.js`,
};

export default {
  plugins: [
    customElementReactWrapperPlugin({
      outdir: "./dist/components/frameworks/react",
      modulePath: (_, tagName) => `../../${tagName}.js`,
    }),
    customElementSolidJsPlugin({
      ...defaultOptions,
      fileName: "custom-element-solidjs.d.ts",
    }),
    customElementJsxPlugin({
      ...defaultOptions,
    }),
    customElementVuejsPlugin({
      ...defaultOptions,
      fileName: "custom-element-vuejs.d.ts",
    }),
    customElementSveltePlugin({
      ...defaultOptions,
      fileName: "custom-element-svelte.d.ts",
    }),
  ],
  globs: ["./src/components/**/*.{js,ts}"],
  exclude: [
    "./src/components/**/*.spec.{js,ts}",
    "./src/components/**/*.stories.{js,ts}",
  ],
  litelement: true,
};
