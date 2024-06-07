import UswdsTheme from "./UswdsTheme";
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
