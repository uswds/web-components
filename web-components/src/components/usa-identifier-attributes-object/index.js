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
       * Info about parent agency (optional)
       */
      parentAgency: {type: Object},
      /**
       * Info about secondary parent agency (optional)
       */
      secondaryParentAgency: {type: Object},
      /**
       * Custom content
       */
      langContent: {type: Object},
      /**
       * List of required link urls
       */
      linkURLs: {type: Object},
      /**
       * Variant that includes taxpayer disclosure
       */
      taxpayerDisclosure: {type: Boolean},
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
    let taxpayerContent = '';
    let logoWrapper;
    let logo1;
    let logo2;
    let name1;
    let name2;
    let logos;
    let names;

    // TODO: Break this up into individual lang content items
    // Set non-standard content
    if (this.langContent) {
      content = this.langContent;
    } else if (this.language ==="es") {
      content = EsContent;
    };

    // Add taxpayer disclosure content
    if (this.taxpayerDisclosure) {
      taxpayerContent = `. ${content.taxpayer}.`;
    }

    // TODO: Streamline these logo/name definitions
    if (this.parentAgency && this.parentAgency.logo) {
      logo1 = html`
        <a class="usa-identifier__logo" href="${this.parentAgency.url}">
          <img
            class="usa-identifier__logo-img"
            src="${this.parentAgency.logo}"
            alt="${this.parentAgency.name} logo"
            role="img"/>
        </a>
      `
    }

    if (this.parentAgency && this.parentAgency.name) {
      name1 = html`
        <a href="${this.parentAgency.url}">${this.parentAgency.name}</a>
      `
    }

    if (this.secondaryParentAgency && this.secondaryParentAgency.logo) {
      logo2 = html`
        <a class="usa-identifier__logo" href="${this.secondaryParentAgency.url}">
          <img
            class="usa-identifier__logo-img"
            src="${this.secondaryParentAgency.logo}"
            alt="${this.secondaryParentAgency.name} logo"
            role="img"/>
        </a>
      `
    }

    if (this.secondaryParentAgency && this.secondaryParentAgency.name) {
      name2 = html`
        <a href="${this.secondaryParentAgency.url}">${this.secondaryParentAgency.name}</a>
      `
    }

    // Set agency logos and links
    if (this.parentAgency && this.secondaryParentAgency) {
      logos= html`${logo1} ${logo2}`
      names= html`${name1} ${content.conjunction} ${name2}`
    } else if (this.parentAgency) {
      logos= html`${logo1}`
      names = html`${name1}`
    } else if (this.secondaryParentAgency) {
      logos= html`${logo2}`
      names = html`${name2}`
    }

    if (logo1 || logo2) {
      logoWrapper = html`
        <div class="usa-identifier__logos">
          ${logos}
        </div>
      `
    }

    return html`
      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="${content.aria_label}"
        >
          <div class="usa-identifier__container">
            ${logoWrapper}
            <section
              class="usa-identifier__identity"
              aria-label="Agency description,"
            >
              <p class="usa-identifier__identity-domain">${this.siteDomain}</p>
              <p class="usa-identifier__identity-disclaimer">
                ${content.disclaimer}
                ${names}${taxpayerContent}
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
                  href="${this.linkURLs.about}"
                  class="${linkClasses}"
                  >${content.linkLabels.about} ${this.parentAgency.shortname}
                </a>
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.accessibility}"
                  class="${linkClasses}"
                  >${content.linkLabels.accessibility}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.FOIA}"
                  class="${linkClasses}"
                  >${content.linkLabels.FOIA}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.NoFEAR}"
                  class="${linkClasses}"
                  >${content.linkLabels.noFEAR}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.OIG}"
                  class="${linkClasses}"
                  >${content.linkLabels.OIG}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.performance}"
                  class="${linkClasses}"
                  >${content.linkLabels.performance}</a
                >
              </li>
              <li class="${linkItemClasses}">
                <a
                  href="${this.linkURLs.privacy}"
                  class="${linkClasses}"
                  >${content.linkLabels.privacy}</a
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