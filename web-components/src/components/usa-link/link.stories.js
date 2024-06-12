import "./index";

import { html } from 'lit';

export default {
  title: "Components/Link",
  component: "usa-link",
  args: {
    href: "http://designsystem.digital.gov",
    label: "It's dangerous to go alone. Here, take this."
  },
  render: ({ href, label }) => html`<usa-link href="${ href }">${ label }</usa-link>`
}

export const Default = {};

export const ChildLink = {
  render: ({ href, label }) => html`
    <usa-link>
      <a href="${ href }">${ label }</a>
    </usa-link>
`,
}

export const Inverse = {
  parameters: {
    backgrounds: { default: "dark" },
  },
}
