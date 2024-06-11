import { LitElement, css, html } from "lit";
import styles from "./usa-link.css.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart
 */
export class UsaLink extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      /**
       * The destination URL for the link
       */
      href: { type: String },
    };
  }

  hasLinkChild() {
    const childLink = this.querySelector("a");
    if (!childLink) return false;

    this.href = childLink.href;
    this.slottedChildren = childLink;
    this.shadowRoot.appendChild(this.slottedChildren);
  }

  constructor() {
    super();
    this.href = "";
  }

  render() {
    return this.hasLinkChild()
      ? html`<a class="usa-link" href="${this.href}"
          >${this.slottedChildren}</a
        >`
      : html`<a class="usa-link" href="${this.href}"><slot></slot></a>`;
  }
}

window.customElements.define("usa-link", UsaLink);
