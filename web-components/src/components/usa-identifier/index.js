import { LitElement, html, css, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";
import usaIdentifierContent from "./identifier.json";

export class UsaIdentifier extends LitElement {
  static properties = {
    lang: { type: String },
    taxpayer: {type: Boolean },
    classes: {},
  };

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
    this.lang;
    this.domain = this.querySelector('[slot="domain"]');
    this.logos = [...this.querySelectorAll('[slot="logo"]')];
    this.linkAbout = this.querySelector('[slot="link_about"]');
    this.linkAccessibility = this.querySelector('[slot="link_accessibility"]');
    this.linkFOIA = this.querySelector('[slot="link_foia"]');
    this.linkNoFEAR = this.querySelector('[slot="link_fear"]');
    this.linkOIG = this.querySelector('[slot="link_oig"]');
    this.linkPerformance = this.querySelector('[slot="link_performance"]');
    this.linkPrivacy = this.querySelector('[slot="link_privacy"]');
    this.domain = this.querySelector('[slot="domain"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.usagov = this.querySelector('[slot="usagov"]');
  }

  get _identifierText() {
    const content = usaIdentifierContent[this.lang] || usaIdentifierContent["en"];
    return content;
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
    // if (this.disclaimer.innerHTML.includes("An official")) {
    //   this.disclaimer.innerHTML = this.disclaimer.innerHTML.replace(
    //     "An official",
    //     '<span aria-hidden="true">An</span> official'
    //   );
    // }

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
    const { required_links, aria_labels } = this._identifierText;
    const requiredLinkItemClass = "usa-identifier__required-links-item";
    const requiredLinkClass = "usa-identifier__required-link usa-link";
    const linksLabel = aria_labels.links;
    const aboutText = this.linkAbout.textContent || required_links.about;
    const agencyShortname = this.linkAbout.getAttribute("shortname") || this.primaryAgency ;
    const accessibilityText = this.linkAccessibility.textContent || required_links.accessibility;
    const foiaText = this.linkFOIA.textContent || required_links.foia;
    const noFearText = this.linkNoFEAR.textContent || required_links.no_fear;
    const oigText = this.linkOIG.textContent || required_links.oig;
    const performanceText = this.linkPerformance.textContent || required_links.performance;
    const privacyText = this.linkPrivacy.textContent || required_links.privacy;
    return html`
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="${linksLabel}"
      >
        <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkAbout.getAttribute("href")}">
                  ${ aboutText } ${ agencyShortname }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkAccessibility.getAttribute("href")}">
                  ${ accessibilityText }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkFOIA.getAttribute("href")}">
                  ${ foiaText }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkNoFEAR.getAttribute("href")}">
                  ${ noFearText }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkOIG.getAttribute("href")}">
                  ${ oigText }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkPerformance.getAttribute("href")}">
                  ${ performanceText }
                </a>
              </li>
              <li class="${requiredLinkItemClass}">
                <a class = "${ requiredLinkClass }" href="${this.linkPrivacy.getAttribute("href")}">
                  ${ privacyText }
                </a>
              </li>
            </ul>
        </div>
      </nav>
    `
  }

  // Render the footer USA.gov text
  usagovTemplate() {
    const { usagov } = this._identifierText;
    let usagovContent = html`${ usagov.description } <a class="usa-link" href="${ usagov.link_url }">${ usagov.link_label }</a>`;

    /**
     * If custom text is included in the usagov slot, scaffold that text:
     * Add necessary classes for styling
     */
    if (this.usagov) {
      const usagovLink = this.usagov.querySelector("a");
      usagovLink.classList.add("usa-link");
      usagovContent = this.usagov;
    }

    return html`
      <section
        class="usa-identifier__section usa-identifier__section--usagov"
      >
        <div class="usa-identifier__container">
          <div class="usa-identifier__usagov-description">
            ${usagovContent}
          </div>
        </div>
      </section>
    `;
  }

  render() {
    const { aria_labels } = this._identifierText;
    const componentAriaLabel = this.getAttribute("aria-label") || aria_labels.main;
    return html`
      <section class="usa-identifier" aria-label="${componentAriaLabel}">
        ${this.mastheadTemplate()}
        ${this.linksTemplate()}
        ${this.usagovTemplate()}
      </section>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
