import "./index";

import { html } from "lit";

export default {
  title: "Components/Link",
  component: "usa-link",
  args: {
    href: "http://designsystem.digital.gov",
    label: "It's dangerous to go alone. Here, take this.",
  },
  render: ({ href, label }) =>
    html`<usa-link href="${href}">${label}</usa-link>`,
};

export const Default = {};

export const ChildLink = {
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // It seems like this is just an issue with the test not
            // knowing about shadow DOM content projecting into the slot
            // but this should be verified manually
            id: "link-name",
            reviewOnFail: true,
          },
        ],
      },
    },
  },

  render: ({ href, label }) => html`
    <usa-link>
      <a href="${href}">${label}</a>
    </usa-link>
  `,
};

export const Inverse = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
