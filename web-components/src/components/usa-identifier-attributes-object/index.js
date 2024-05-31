import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifierAttributesObject extends LitElement {

  static get properties() {
    return {
      /**
       * The site domain
       */
      siteDomain: { type: String },
      /**
       * The parent agency info
       */
      parentAgency: {type: Object},
      /**
       * List of required links
       */
      links: {type: Object},
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
                href="${this.parentAgency.url}"
                ><img
                  class="usa-identifier__logo-img"
                  src="${this.parentAgency.logo}"
                  alt="${this.parentAgency.name} logo"
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
                <a href="${this.parentAgency.url}">${this.parentAgency.name}</a>
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
                  href="${this.links.about}"
                  class="usa-identifier__required-link usa-link"
                  >About ${this.parentAgency.shortname}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.accessibility}"
                  class="usa-identifier__required-link usa-link"
                  >Accessibility statement</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.FOIA}"
                  class="usa-identifier__required-link usa-link"
                  >FOIA requests</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.NoFEAR}"
                  class="usa-identifier__required-link usa-link"
                  >No FEAR Act data</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.OIG}"
                  class="usa-identifier__required-link usa-link"
                  >Office of the Inspector General</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.performance}"
                  class="usa-identifier__required-link usa-link"
                  >Performance reports</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.privacy}"
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

window.customElements.define("usa-identifier-attributes-object", UsaIdentifierAttributesObject);