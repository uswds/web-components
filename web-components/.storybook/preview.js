import UswdsTheme from "./UswdsTheme";

// Global component styles.
import "../src/index.css";
// Theme overrides.
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
    }
  },
};

export default preview;
