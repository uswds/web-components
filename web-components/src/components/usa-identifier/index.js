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
    this.domain = this.querySelector('[slot="domain"]');
    this.logos = [...this.querySelectorAll('[slot="logo"]')];
    this.linkAbout = this.querySelector('[slot="link-about"]');
    this.linkAccessibility = this.querySelector('[slot="link-accessibility"]');
    this.linkFOIA = this.querySelector('[slot="link-foia"]');
    this.linkNoFEAR = this.querySelector('[slot="link-fear"]');
    this.linkOIG = this.querySelector('[slot="link-oig"]');
    this.linkPerformance = this.querySelector('[slot="link-performance"]');
    this.linkPrivacy = this.querySelector('[slot="link-privacy"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.usagov = this.querySelector('[slot="usagov"]');
    this.primaryAgency = this.querySelector('[slot="primary-agency"]')
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
     */
    if (this.disclaimer) {
      this.disclaimer.classList.add("usa-identifier__identity-disclaimer");
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
    const { required_links, aria_labels } = this._identifierText;
    const linksLabel = aria_labels.links;
    const linkAbout = this.linkAbout.textContent || required_links.about;
    const agencyShortname = this.linkAbout.getAttribute("shortname") || this.primaryAgency.textContent ;
    const requiredLinks = [
      {
        title: `${linkAbout} ${agencyShortname}`,
        href: this.linkAbout.getAttribute("href")
      },
      {
        title: this.linkAccessibility.textContent || required_links.accessibility,
        href: this.linkAccessibility.getAttribute("href")
      },
      {
        title: this.linkFOIA.textContent || required_links.foia,
        href: this.linkFOIA.getAttribute("href")
      },
      {
        title: this.linkNoFEAR.textContent || required_links.no_fear,
        href: this.linkNoFEAR.getAttribute("href")
      },
      {
        title: this.linkOIG.textContent || required_links.oig,
        href: this.linkOIG.getAttribute("href")
      },
      {
        title: this.linkPerformance.textContent || required_links.performance,
        href: this.linkPerformance.getAttribute("href")
      },
      {
        title: this.linkPrivacy.textContent || required_links.privacy,
        href: this.linkPrivacy.getAttribute("href")
      }
    ];

    return html`
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="${linksLabel}"
      >
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            ${requiredLinks.map((requiredLink) =>
              html`
                <li class="usa-identifier__required-links-item">
                  <a class="usa-identifier__required-link usa-link" href="${requiredLink.href}">${requiredLink.title}</a>
                </li>
              `
            )}
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
