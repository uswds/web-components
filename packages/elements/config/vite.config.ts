import { defineConfig } from "vite";
import { dirname, join } from "path";
import { createRequire } from "module";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import litCss from "vite-plugin-lit-css";
import bundlesize from "vite-plugin-bundlesize";
import dts from "vite-plugin-dts";
import {
  type Entry,
  mapEntriesToKeyValue,
  mapEntryToLimit,
} from "../internals/build-helpers";

/**
 * Resolve `@uswds/uswds` via Node's own module resolution (walking up through
 * `node_modules` from this config file) rather than assuming a fixed path
 * relative to `process.cwd()`. This works whether `@uswds/uswds` is hoisted
 * to the workspace root `node_modules` or installed locally within this
 * package.
 *
 * `@uswds/uswds`'s `exports` map doesn't expose `./package.json` or
 * `./dist`, so we resolve its `"."` entry point (`./dist/js/uswds.min.js`)
 * and walk up two directories to get to `./dist`.
 */
const require = createRequire(import.meta.url);
const uswdsDistPath = dirname(dirname(require.resolve("@uswds/uswds")));
const uswdsPackagesPath = join(dirname(uswdsDistPath), "packages");

const entries: Array<Entry> = [
  {
    name: "components/index",
    path: "src/components/index",
    sizeLimit: "0.2 kB",
  },
  {
    name: "components/usa-banner",
    path: "src/components/usa-banner/index.ts",
    sizeLimit: "10 kB",
  },
  {
    name: "components/usa-alert",
    path: "src/components/usa-alert/index.ts",
    sizeLimit: "3 kB",
  },
  {
    name: "components/usa-link",
    path: "src/components/usa-link/index.js",
    sizeLimit: "0.8 kB",
  },
];

export default defineConfig({
  plugins: [
    litCss({
      exclude: ["./src/core/index.css", "./storybook/index.css"],
    }),
    bundlesize({
      limits: [
        ...entries.map(mapEntryToLimit),
        { name: "**/*.cjs", limit: "Infinity" },
      ],
    }),
    dts({
      tsconfigPath: "./config/tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@uswds/uswds": uswdsDistPath,
    },
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      minify: process.env.NODE_ENV === "production" || process.env.CI,
      drafts: {
        nesting: true,
      },
      targets: browserslistToTargets(
        browserslist(["> 2%", "last 2 versions", "not dead"]),
      ),
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${uswdsPackagesPath}";`,
      },
    },
  },
  build: {
    sourcemap: "hidden",
    lib: {
      entry: mapEntriesToKeyValue(entries),
    },
    rollupOptions: {
      /**
       * The regex resolves the error in vite environments:
       * - https://github.com/uswds/uswds-elements/issues/222
       * - https://github.com/shoelace-style/shoelace/discussions/1847#discussioncomment-14516120
       */
      external: [/^@?lit(-\w+)?($|\/.+)/],
      output: { format: "es" },
    },
  },
});
