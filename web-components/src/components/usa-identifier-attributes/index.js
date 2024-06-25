import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifierAttributes extends LitElement {

  static get properties() {
    return {
      /**
       * The site domain
       */
      siteDomain: { type: String },
      /**
       * The parent agency name
       */
      parentName: { type: String },
      /**
       * The parent agency acronym or short name
       */
      parentShortname: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      parentHref: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      parentLogo: { type: String },
      /**
       * Parent agency about page url
       */
      linkAbout: { type: String },
      /**
       * Parent agency accessibility statement url
       */
      linkAccessibility: { type: String },
      /**
       * Parent agency FOIA url
       */
      linkFOIA: { type: String },
      /**
       * Parent agency No FEAR act url
       */
      linkNoFEAR: { type: String },
      /**
       * Parent agency Office of Inspector General url
       */
      linkOIG: { type: String },
      /**
       * Parent agency performance reports url
       */
      linkPerformance: { type: String },
      /**
       * Parent agency privacy policy url
       */
      linkPrivacy: { type: String },
    };
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
              <a
                class="usa-identifier__logo"
                href="${this.parentHref}"
                ><img
                  class="usa-identifier__logo-img"
                  src="${this.parentLogo}"
                  alt="${this.parentName} logo"
                  role="img"
              /></a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description,"
            >
              <p class="usa-identifier__identity-domain">${this.siteDomain}</p>
              <p class="usa-identifier__identity-disclaimer">
                <span aria-hidden="true">An </span>official website of the
                <a href="${this.parentHref}">${this.parentName}</a>
              </p>
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkAbout}"
                  class="usa-identifier__required-link usa-link"
                  >About ${this.parentShortname}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkAccessibility}"
                  class="usa-identifier__required-link usa-link"
                  >Accessibility statement</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkFOIA}"
                  class="usa-identifier__required-link usa-link"
                  >FOIA requests</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkNoFEAR}"
                  class="usa-identifier__required-link usa-link"
                  >No FEAR Act data</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkOIG}"
                  class="usa-identifier__required-link usa-link"
                  >Office of the Inspector General</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkPerformance}"
                  class="usa-identifier__required-link usa-link"
                  >Performance reports</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.linkPrivacy}"
                  class="usa-identifier__required-link usa-link"
                  >Privacy policy</a
                >
              </li>
            </ul>
          </div>
        </nav>
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>
            <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier-attributes", UsaIdentifierAttributes);