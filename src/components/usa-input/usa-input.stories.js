import "./index";

import { html, nothing } from "lit";

import { userEvent, expect, waitFor } from "@storybook/test";
import { within } from "shadow-dom-testing-library";

export default {
  title: "Components/Input",
  component: "usa-input",
  args: {
    label: "",
    tld: "",
    lang: "",
  },
  render: ({ lang, label, tld }) => html`
    <usa-input type="text" name="my-input">First Name</usa-input>
  `,
};

export const Default = {};
