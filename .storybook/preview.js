// Custom StorybookJS Docs theme.
import UswdsTheme from "./UswdsTheme";

/**
 *
 * StorybookJS UI Styles
 *
 */

// Global StorybookJS styles.
import "../storybook/index.css";
// Documentation theme overrides.
import "./index.css";

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // Autogenerate table of contents.
      theme: UswdsTheme,
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
