import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifier extends LitElement {
  constructor() {
    super();
    this.logos = [...this.querySelectorAll('[slot="logo"]')];
    this.links = [...this.querySelector('[slot="links"]').children];
    this.domain = this.querySelector('[slot="domain"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.usagov = this.querySelector('[slot="usagov"]');

    /**
      * Scaffold domain text:
      * Add necessary classes for styling
    */
    if (this.domain) {
      this.domain.classList.add('usa-identifier__identity-domain');
    }

    /**
      * Scaffold disclaimer text:
      * Add necessary classes for styling
      * Wrap "An" in aria-hidden span
    */
    if(this.disclaimer) {
      this.disclaimer.classList.add('usa-identifier__identity-disclaimer');
    }

    /**
      * Scaffold usagov text:
      * Add necessary classes for styling
    */
    if (this.usagov) {
      const usagovLink = this.usagov.querySelector("a");
      this.usagov.classList.add('usa-identifier__usagov-description');
      usagovLink.classList.add('usa-link');
    }
  }

  static styles = [
    unsafeCSS(usaIdentifierStyle),
    unsafeCSS(uswdsCoreStyle)
  ];

  render() {
    return html`
      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              ${this.logos.map((logo) => {
                const logoImage = logo.querySelector("img");
                logo.classList.add("usa-identifier__logo");
                logoImage.classList.add("usa-identifier__logo-img");
                return html`${logo}`
              })}
            </div>
            <section class="usa-identifier__identity" aria-label="Agency description">
              ${this.domain}
              ${this.disclaimer}
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <ul class="usa-identifier__required-links-list">
                ${this.links.map((link) => {
                  link.classList.add('usa-identifier__required-link');
                  return html`<li class="usa-identifier__required-links-item">${link}</li>`
                })}
              </ul>
            </div>
          </div>
        </nav>
        <section class="usa-identifier__section usa-identifier__section--usagov">
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              ${this.usagov}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
