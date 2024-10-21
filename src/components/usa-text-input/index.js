import { LitElement, html } from "lit";
import styles from "./usa-text-input.css.js";

/**
 * @summary The usa-text-input component.
 *
 * @slot - This element has a slot
 *
 * @cssprop --theme-input-line-height - Sets the line-height of input element
 * @cssprop --theme-input-max-width - Sets the max width of the input element
 * @cssprop --theme-input-state-border-width - Sets the border width of error and success states.
 *
 * @tagname usa-text-input
 */
export class UsaTextInput extends LitElement {
  static styles = [styles];
  static properties = {
    state: { type: String, reflect: true },
  };

  connectedCallback() {
    super.connectedCallback();
    this.label = this.querySelector("label");
    this.input = this.querySelector("input");
  }

  constructor() {
    super();
  }

  render() {
    if (this.label) {
      this.label.classList.add("usa-label");
    }

    if (this.input) {
      this.input.classList.add("usa-input");
    }

    if (this.state == "success") {
      this.input?.classList.add("usa-input--success");
    } else {
      this.input?.classList.remove("usa-input--success");
    }

    if (this.state == "error") {
      this.label?.classList.add("usa-label--error");
      this.input?.classList.add("usa-input--error");
    } else {
      this.label?.classList.remove("usa-label--error");
      this.input?.classList.remove("usa-input--error");
    }

    if (this.state == "disabled") {
      this.input?.setAttribute("disabled", "");
    } else {
      this.input?.removeAttribute("disabled");
    }

    return html` ${this.label} ${this.input} `;
  }
}

window.customElements.define("usa-text-input", UsaTextInput);
