import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./usa-details.css.js";
import uswdsCoreStyles from "@uswds/uswds/scss/uswds-core?inline";

/**
 * @summary The usa-details component.
 *
 * @slot details-body - Content for the details panel
 *
 * @attribute {Boolean} open - Set the panel to be open on load
 * @attribute {String} name - Add a group name if the element is part of a details group
 *
 * @cssprop --usa-theme-details-font-family - Sets the font family for the details element
 * @cssprop --usa-theme-details-border-color - Sets the border width for the details element
 * @cssprop --usa-theme-details-border-width - Sets the border color for the details element
 * @cssprop --usa-theme-details-panel-background-color - Sets the background color of the content panels
 * @cssprop --usa-theme-details-summary-background-color - Sets the background color of the summary element
 *
 * @tagname usa-details
 */
export class UsaDetails extends LitElement {
  static styles = [unsafeCSS(uswdsCoreStyles), styles];

  static properties = {
    bordered: { type: Boolean },
    multiselect: { type: Boolean },
    name: { type: String },
  }

  connectedCallback() {
    super.connectedCallback();
    this.details = [...this.querySelectorAll('details')];
    if (!this.multiselect) {
      this.name = `usa-details-${Math.floor(Math.random() * 100000)}`;
    }
  }

  render() {
    const classes = {
      "usa-details__bordered": this.bordered
    }
    return html`
      ${this.details.map((detail) => {
          this.summary = detail.querySelector('summary');
          this.content = detail.querySelector('[slot="details-body"]');
          this.open = detail.getAttribute('open');
          this.summary.classList.add('usa-details__summary');
          this.content.classList.add('usa-details__content');
          return html`
            <details class="usa-details ${classMap(classes)}" open="${this.open || nothing}" name="${this.name || nothing}">
              ${this.summary}
              ${this.content}
            </details>
          `;
      })}
    `;
  }
}

window.customElements.define("usa-details", UsaDetails);
