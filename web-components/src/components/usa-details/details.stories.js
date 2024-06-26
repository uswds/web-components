import "./index";

import { html } from "lit";

export default {
  title: "Components/Details",
  component: "usa-details",
  argTypes: {
    summary: {name: "Summary content"},
    info: { name: "Panel content"},
  },
  args: {
    summary: "Great Smoky Mountains National Park",
    info: "The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. ",
  },
  render: ({ summary, info }) =>
    html`
      <usa-details>
        <details>
          <summary>${summary}</summary>
          ${info}
        </details>
      </usa-details>
    `,
};

export const Default = {};
