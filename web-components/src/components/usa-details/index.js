import { LitElement, html, css, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaAccordionStyle from "@uswds/uswds/scss/usa-accordion?inline";

/**
 * @summary The usa-details component.
 *
 * @slot - This element has a slot
 *
 * @attribute {Boolean} open - Set the panel to be open on load
 *
 * @tagname usa-details
 */
export class UsaDetails extends LitElement {
  static styles = [
    unsafeCSS(usaAccordionStyle),
    unsafeCSS(uswdsCoreStyle),
  ];

  template() {
    return html`<slot></slot>`;
  }

  render() {
    return this.template();
  }
}

window.customElements.define("usa-details", UsaDetails);

