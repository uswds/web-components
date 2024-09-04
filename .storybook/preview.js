import UswdsTheme from "./UswdsTheme";

// Global component styles.
import "../storybook/index.css";
// Storybook overrides.
import "./index.css";

// USWDS Core props.
import "../src/core/index.css";

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
