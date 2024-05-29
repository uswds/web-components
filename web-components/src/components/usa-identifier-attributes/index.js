import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifierAttributes extends LitElement {

  static get properties() {
    return {
      /**
       * The site domain
       */
      site_domain: { type: String },
      /**
       * The parent agency name
       */
      parent_name: { type: String },
      /**
       * The parent agency acronym or short name
       */
      parent_shortname: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      parent_href: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      parent_logo: { type: String },
      /**
       * Parent agency about page url
       */
      link_about: { type: String },
      /**
       * Parent agency accessibility statement url
       */
      link_accessibility: { type: String },
      /**
       * Parent agency FOIA url
       */
      link_foia: { type: String },
      /**
       * Parent agency No FEAR act url
       */
      link_fear: { type: String },
      /**
       * Parent agency Office of Inspector General url
       */
      link_oig: { type: String },
      /**
       * Parent agency performance reports url
       */
      link_performance: { type: String },
      /**
       * Parent agency privacy policy url
       */
      link_privacy: { type: String },
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
                href="${this.parent_href}"
                ><img
                  class="usa-identifier__logo-img"
                  src="${this.parent_logo}"
                  alt="${this.parent_name} logo"
                  role="img"
              /></a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description,"
            >
              <p class="usa-identifier__identity-domain">${this.site_domain}</p>
              <p class="usa-identifier__identity-disclaimer">
                <span aria-hidden="true">An </span>official website of the
                <a href="${this.parent_href}">${this.parent_name}</a>
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
                  href="${this.link_about}"
                  class="usa-identifier__required-link usa-link"
                  >About ${this.parent_shortname}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_accessibility}"
                  class="usa-identifier__required-link usa-link"
                  >Accessibility statement</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_foia}"
                  class="usa-identifier__required-link usa-link"
                  >FOIA requests</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_fear}"
                  class="usa-identifier__required-link usa-link"
                  >No FEAR Act data</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_oig}"
                  class="usa-identifier__required-link usa-link"
                  >Office of the Inspector General</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_performance}"
                  class="usa-identifier__required-link usa-link"
                  >Performance reports</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.link_privacy}"
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