import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

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
    // English content
    const linksEn = {
      "about": "About",
      "accessibility": "Accessibility statement",
      "FOIA": "FOIA requests",
      "noFEAR": "No FEAR Act data",
      "OIG": "Office of the Inspector General",
      "performance": "Performance reports",
      "privacy": "Privacy policy"
    };
    const usagovEn = {
      "introText" : "Looking for U.S. government information and services?",
      "linkText": "Visit USA.gov",
      "linkHref": "https://www.usa.gov/"
    };

    // Spanish content
    const linksEs = {
      "about": "Acerca de",
      "accessibility": "Declaración de accesibilidad",
      "FOIA": "Solicitud a través de FOIA",
      "noFEAR": "Datos de la ley No FEAR",
      "OIG": "Oficina del Inspector General",
      "performance": "Informes de desempeño",
      "privacy": "Política de privacidad"
    };
    const usagovEs = {
      "introText": "¿Necesita información y servicios del Gobierno?",
      "linkText": "Visite USA.gov en Español",
      "linkHref": "https://www.usa.gov/espanol/"
    }

    let linkNames = linksEn;
    let usagovText = usagovEn;

    if (this.language ==="es") {
      linkNames = linksEs;
      usagovText = usagovEs;
    };

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
                  >${linkNames.about} ${this.parentAgency.shortname}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.accessibility}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.accessibility}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.FOIA}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.FOIA}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.NoFEAR}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.noFEAR}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.OIG}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.OIG}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.performance}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.performance}</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="${this.links.privacy}"
                  class="usa-identifier__required-link usa-link"
                  >${linkNames.privacy}</a
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
              ${usagovText.introText}
            </div>
            <a href="${usagovText.linkHref}" class="usa-link">${usagovText.linkText}</a>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier-attributes-object", UsaIdentifierAttributesObject);