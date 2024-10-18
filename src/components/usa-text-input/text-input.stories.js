import "./index";

import { html, nothing } from "lit";

export default {
  title: "Components/Text input",
  component: "usa-text-input",
  argTypes: {
    state: {
      control: { type: "radio" },
      options: ["Default", "success", "error", "disabled"],
      table: {
        defaultValue: { summary: "Default" }
      }
    },
  },
  args: {
    state: "Default"
  },
  render: ({ state }) => html`
    <usa-text-input state=${state == "Default" ? nothing : state} test>
      <label for="input-type-text">Text input label</label>
      <input id="input-type-text" name="input-type-text" />
    </usa-text-input>
  `,
};

export const Default = {};
