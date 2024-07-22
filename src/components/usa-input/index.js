import { unsafeCSS, LitElement, html } from "lit";
import inputStyles from "./usa-input.css?inline";

class UsaInput extends LitElement {
  static styles = [unsafeCSS(inputStyles)];

  static properties = {
    name: { type: String },
    type: { type: String },
    _value: { state: true },
  };

  constructor() {
    super();
    this.type = "text";
  }

  render() {
    return html`<label class="usa-label" for=${this.name}><slot></slot></label
      ><input type=${this.type} name=${this.name} class="usa-input" />`;
  }
}

customElements.define("usa-input", UsaInput);
