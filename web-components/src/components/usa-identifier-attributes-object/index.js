import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";
import { DefaultContent, EsContent } from "./content";

export class UsaIdentifierAttributesObject extends LitElement {
  static get properties() {
    return {
      /**
       * The language of the component
       */
      language: {type: String},
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
    const linkItemClasses = "usa-identifier__required-links-item";
    const linkClasses="usa-identifier__required-link usa-link";

    let content = DefaultContent;
    if (this.language ==="es") {
      content = EsContent;
    };

    return html`
      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="${content.aria_label}"
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
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.about}"
                  class="${linkClasses}"
                  >${content.required_links.about} ${this.parentAgency.shortname}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.accessibility}"
                  class="${linkClasses}"
                  >${content.required_links.accessibility}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.FOIA}"
                  class="${linkClasses}"
                  >${content.required_links.FOIA}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.NoFEAR}"
                  class="${linkClasses}"
                  >${content.required_links.noFEAR}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.OIG}"
                  class="${linkClasses}"
                  >${content.required_links.OIG}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.performance}"
                  class="${linkClasses}"
                  >${content.required_links.performance}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.links.privacy}"
                  class="${linkClasses}"
                  >${content.required_links.privacy}</a
                >
              </li>
            </ul>
          </div>
        </nav>
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="${content.usagov.aria_label}"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              ${content.usagov.description}
            </div>
            <a href="${content.usagov.link.url}" class="usa-link">${content.usagov.link.label}</a>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier-attributes-object", UsaIdentifierAttributesObject);