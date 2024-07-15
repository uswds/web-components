import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./usa-accordion.css.js";

/**
 * @summary The usa-accordion component.
 *
 * @slot accordion-body - Content for the accordion panel
 *
 * @attribute {Boolean} open - Set the panel to be open on load
 * @attribute {String} name - Add a group name if the element is part of a details group
 *
 * @cssprop --usa-theme-accordion-font-family - Sets the font family for the accordion element
 * @cssprop --usa-theme-accordion-border-color - Sets the border width for the accordion element
 * @cssprop --usa-theme-accordion-border-width - Sets the border color for the accordion element
 * @cssprop --usa-theme-accordion-panel-background-color - Sets the background color of the content panels
 * @cssprop --usa-theme-accordion-summary-background-color - Sets the background color of the summary element
 *
 * @tagname usa-accordion
 */
export class UsaAccordion extends LitElement {
  static styles = [styles];

  static properties = {
    bordered: { type: Boolean },
    multiselect: { type: Boolean },
    name: { type: String },
  }

  connectedCallback() {
    super.connectedCallback();
    this.details = [...this.querySelectorAll('details')];
    if (!this.multiselect) {
      this.name = `usa-accordion-${Math.floor(Math.random() * 100000)}`;
    }
  }

  render() {
    const classes = {
      "usa-accordion__bordered": this.bordered
    }
    return html`
      ${this.details.map((detail) => {
          this.summary = detail.querySelector('summary');
          this.content = detail.querySelector('[slot="accordion-body"]');
          this.open = detail.getAttribute('open');
          this.summary.setAttribute("part", "summary");
          this.summary.classList.add('usa-accordion__summary');
          this.content.classList.add('usa-accordion__content');
          return html`
            <details class="usa-accordion ${classMap(classes)}" open="${this.open || nothing}" name="${this.name || nothing}">
              ${this.summary}
              ${this.content}
            </details>
          `;
      })}
    `;
  }
}

window.customElements.define("usa-accordion", UsaAccordion);
