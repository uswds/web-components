import "./index";

import { html, nothing } from "lit";

export default {
  title: "Components/Details",
  component: "usa-details",
  argTypes: {
    detailsSummary: {name: "Summary content"},
    detailsContent: { name: "Panel content"},
    open: { name: "Open panel on load" },
    name: { name: "Details group name" },
  },
  args: {
    detailsSummary: "Great Smoky Mountains National Park",
    detailsContent: "The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. ",
    name: "",
    open: false,
  },
  render: ({
    detailsSummary,
    detailsContent,
    name,
    open
  }) => html`
    <usa-details open=${open || nothing} name=${name || nothing}>
      <details>
        <summary>${detailsSummary}</summary>
        <div slot="details-content">${detailsContent}</div>
      </details>
    </usa-details>
  `,
};

export const Default = {};

export const Open = {
  args: {
    open: true,
  },
}

export const GroupName = {
  args: {
    name: "example-group-name",
  },
}
