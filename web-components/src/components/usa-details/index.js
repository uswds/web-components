import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import styles from "./usa-details.css.js";

/**
 * @summary The usa-details component.
 *
 * @slot - This element has a slot
 *
 * @attribute {Boolean} open - Set the panel to be open on load
 * @attribute {String} name - Add a group name if the element is part of a details group
 *
 * @tagname usa-details
 */
export class UsaDetails extends LitElement {
  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.details = [...this.querySelectorAll('details')];
  }

  template() {
    return html`
      ${this.details.map((detail) => {
          this.summary = detail.querySelector('summary');
          this.content = detail.querySelector('[slot="details__body"]');
          this.open = detail.getAttribute('open');
          this.name = detail.getAttribute('name');
          this.summary.classList.add('usa-details__summary');
          this.content.classList.add('usa-details__content');
          return html`
            <details class="usa-details" open="${this.open || nothing}" name="${this.name || nothing}">
              ${this.summary}
              ${this.content}
            </details>
          `;
      })}
    `;
  }

  render() {
    return this.template();
  }
}

window.customElements.define("usa-details", UsaDetails);
