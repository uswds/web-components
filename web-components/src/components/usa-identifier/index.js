import { LitElement, html, css, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifier extends LitElement {
  static styles = [
    unsafeCSS(usaIdentifierStyle),
    unsafeCSS(uswdsCoreStyle),
    css`
      .usa-identifier__usagov-description {
        display: block;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.domain = this.querySelector('[slot="domain"]');
    this.logos = [...this.querySelectorAll('[slot="logo"]')];
    this.links = [...this.querySelector('[slot="links"]').children];
    this.domain = this.querySelector('[slot="domain"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.usagov = this.querySelector('[slot="usagov"]');
  }

  // Render the logo(s) for the masthead
  mastheadLogosTemplate() {
    if (this.logos.length > 0) {
      return html`
      <div class="usa-identifier__logos">
        ${this.logos.map((logo) => {
          const logoImage = logo.querySelector("img");
          logo.classList.add("usa-identifier__logo");
          logoImage.classList.add("usa-identifier__logo-img");
          return html`${logo}`;
        })}
      </div>
      `;
    }
  }

  // Render the text for the masthead
  mastheadTextTemplate() {
    /**
     * Scaffold domain text:
     * Add necessary classes for styling
     */
    if (this.domain) {
      this.domain.classList.add("usa-identifier__identity-domain");
    }
    /**
     * Scaffold disclaimer text:
     * Add necessary classes for styling
     * Wrap "An" in aria-hidden span
     */
    if (this.disclaimer) {
      this.disclaimer.classList.add("usa-identifier__identity-disclaimer");
    }
    /**
     * For English implementations, wrap "An" in an aria-hidden span
     * This prevents "An official" from sounding like "Unofficial" in audible readouts
     */
    if (this.disclaimer.innerHTML.includes("An official")) {
      this.disclaimer.innerHTML = this.disclaimer.innerHTML.replace(
        "An official",
        '<span aria-hidden="true">An</span> official'
      );
    }

    if (this.disclaimer || this.domain) {
      return html`
        <section
          class="usa-identifier__identity"
          aria-label="Agency description"
        >
          ${this.domain} ${this.disclaimer}
        </section>
      `;
    }
  }

  // Render the logos and text in the masthead
  mastheadTemplate() {
    if (this.domain || this.disclaimer || this.logos.length > 0) {
      return html`
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            ${this.mastheadLogosTemplate()} ${this.mastheadTextTemplate()}
          </div>
        </section>
      `;
    }
  }

  // Render the list of links
  linksTemplate() {
    if (this.links && this.links.length > 0) {
      return html`
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <ul class="usa-identifier__required-links-list">
                ${this.links.map((link) => {
                  link.classList.add("usa-identifier__required-link");
                  return html`<li class="usa-identifier__required-links-item">
                    ${link}
                  </li>`;
                })}
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }

  // Render the footer USA.gov text
  usagovTemplate() {
    /**
     * Scaffold usagov text:
     * Add necessary classes for styling
     */
    if (this.usagov) {
      const usagovLink = this.usagov.querySelector("a");
      this.usagov.classList.add("usa-identifier__usagov-description");
      usagovLink.classList.add("usa-link");

      return html`
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">${this.usagov}</div>
          </div>
        </section>
      `;
    }
  }

  render() {
    return html`
      <div class="usa-identifier">
        ${this.mastheadTemplate()}
        ${this.linksTemplate()}
        ${this.usagovTemplate()}
      </div>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
