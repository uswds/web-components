import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaAccordionStyle from "@uswds/uswds/scss/usa-accordion?inline";

/**
 * @summary The usa-details component.
 *
 * @slot - This element has a slot
 *
 * @attribute {Boolean} detailsOpen - Set the panel to be open on load
 * @attribute {String} detailsName - Add a group name if the element is part of a details group
 *
 * @tagname usa-details
 */
export class UsaDetails extends LitElement {
  static styles = [
    unsafeCSS(usaAccordionStyle),
    unsafeCSS(uswdsCoreStyle),
  ];

  static properties = {
    detailsOpen: {type: Boolean},
    detailsName: {type: String},
  };

  connectedCallback() {
    super.connectedCallback();
    this.details = this.querySelector("details");
    this.open = this.details.getAttribute("open") || this.getAttribute("open");
    this.name = this.details.getAttribute("name") || this.getAttribute("name");
    this.summary = this.querySelector("[slot='details-summary']") || this.querySelector("summary");
    this.content = this.querySelector("[slot='details-content']");
  }

  template() {
    console.log(this.name)
    return html`
      <details open="${this.open || nothing}" name="${this.name || nothing}">
        ${this.summary}
        ${this.content}
      </details>
    `
  }

  render() {
    return this.template();
  }
}

window.customElements.define("usa-details", UsaDetails);
