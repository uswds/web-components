import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaAccordionStyle from "@uswds/uswds/scss/usa-accordion?inline";

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
  static styles = [
    unsafeCSS(usaAccordionStyle),
    unsafeCSS(uswdsCoreStyle),
    css`
      .details {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        list-style-type: none;
        color: #1b1b1b;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 1.06rem;
        line-height: 1.5;
      }
      .summary {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: .9;
        margin: 0;
        margin-top: .5rem;
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/add.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-size: 1.5rem;
        border: 0;
        border-radius: 0;
        box-shadow: none;
        justify-content: normal;
        text-align: left;
        padding: 0;
        color: #1b1b1b;
        background-color: #f0f0f0;
        background-repeat: no-repeat;
        background-position: right 1.25rem center;
        background-size: 1.5rem;
        cursor: pointer;
        font-weight: 700;
        margin: 0;
        padding: 1rem 3.5rem 1rem 1.25rem;
        max-width: 100%;
      }
      .content {
        overflow: visible;
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-top: 1.5rem;
        color: #1b1b1b;
        background-color: #fff;
        margin-top: 0;
        overflow: auto;
        padding: 1rem 1.25rem calc(1rem - .25rem);
      }
      .details[open] .summary {
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/remove.svg),linear-gradient(transparent,transparent);
      }
      details > summary {
        list-style: none;
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
    `
  ];

  static properties = {
    detailsOpen: {type: Boolean},
    detailsName: {type: String},
  };

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
          this.summary.classList.add('summary');
          this.content.classList.add('content');
          return html`
            <details class="details" open="${this.open || nothing}" name="${this.name || nothing}">
              ${this.summary}
              ${this.content}
            </details>
          `
          ;
      })}
    `;
  }

  render() {
    return this.template();
  }
}

window.customElements.define("usa-details", UsaDetails);
