import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import styles from "./usa-identifier.css.js";
import usaIdentifierContent from "./identifier.json";

/**
 * @summary The usa-identifier component.
 *
 * @attribute {String} label - Text content for the component's aria label
 * @attribute {String} lang - The language for default text content (Options: "en" (Default), "es")
 * @attribute {Boolean} taxpayer - Turn on the taxpayer disclaimer text
 *
 * @slot agency-primary - Information about the primary parent agency
 * @slot agency-secondary - Information about the secondary parent agency
 * @slot agency-conjunction - The connecting word between parent agencies. Default value: "and"
 * @slot domain - Site domain name
 * @slot link-about - url and optional text content for the parent agency's about page
 * @slot link-accessibility - url and optional text content for the parent agency's accessibility statement
 * @slot link-foia - url and optional text content for the parent agency's Freedom of Information Act page
 * @slot link-fear - url and optional text content for the parent agency's No FEAR act page
 * @slot link-oig - url and optional text content for the parent agency's Office of the inspector general page
 * @slot link-performance -  url and optional text content for the parent agency's performance reports page
 * @slot link-privacy - url and optional text content for the parent agency's privacy statement page
 * @slot logo - Optional slot to define the parent agency logo and url
 * @slot usagov - Optional slot for defining custom USA.gov content
 *
 * @tagname usa-identifier
 */
export class UsaIdentifier extends LitElement {
  static properties = {
    lang: { type: String },
    taxpayer: {type: Boolean },
    label: { type: String }
  };

  static styles = [
    unsafeCSS(uswdsCoreStyle),
    styles
  ];

  connectedCallback() {
    super.connectedCallback();
    this.agencyConjunction = this.querySelector('[slot="agency-conjunction"]');
    this.agencyIntro = this.querySelector('[slot="agency-intro"]');
    this.agencyPrimary = this.querySelector('[name="agency-primary"] a');
    this.agencySecondary = this.querySelector('[name="agency-secondary"] a');
    this.agencyTaxpayer = this.querySelector('[slot="agency-taxpayer"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.domain = this.querySelector('[slot="domain"]');
    this.includeTaxpayer = this.getAttribute("taxpayer");
    this.logos = [...this.querySelectorAll('[name="logo"] a')];
    this.linkAbout = this.querySelector('[name="link-about"] a');
    this.linkAccessibility = this.querySelector('[name="link-accessibility"] a');
    this.linkFOIA = this.querySelector('[name="link-foia"] a');
    this.linkNoFEAR = this.querySelector('[name="link-fear"] a');
    this.linkOIG = this.querySelector('[name="link-oig"] a');
    this.linkPerformance = this.querySelector('[name="link-performance"] a');
    this.linkPrivacy = this.querySelector('[name="link-privacy"] a');
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
        <div class="usa-identifier__logos" part="logo-wrapper">
          ${this.logos.map((logo) => {
            const logoImage = logo.querySelector("img");
            logo.classList.add("usa-identifier__logo");
            logo.setAttribute("part", "logo");
            logoImage.classList.add("usa-identifier__logo-img");
            logoImage.setAttribute("part", "logo-image");
            return html`${logo}`;
          })}
        </div>
      `;
    }
  }

  mastheadTextTemplate() {
    const { masthead, taxpayer } = this._identifierText;
    const agencyIntro = this.agencyIntro ? this.agencyIntro.textContent: masthead.intro;
    const agencyConjunction = this.agencyConjunction ? this.agencyConjunction.textContent : masthead.conjunction;
    let taxpayerText;

    if (this.includeTaxpayer) {
      taxpayerText = this.agencyTaxpayer ? html`. ${this.agencyTaxpayer.textContent}` : html`. ${taxpayer}`;
    }
    /**
     * Scaffold domain text:
     * Add necessary classes for styling
     */
    if (this.domain) {
      this.domain.classList.add("usa-identifier__identity-domain");
      this.domain.setAttribute("part", "domain");
    }

    if (this.agencyPrimary) {
      this.agencyPrimary.setAttribute("part", "disclaimer-link");
    }

    if (this.agencySecondary) {
      this.agencySecondary.setAttribute("part", "disclaimer-link");
    }

    return html`
      <section class="usa-identifier__identity">
        ${this.domain}
        <p class="usa-identifier__identity-disclaimer" part="disclaimer">
          ${this.agencySecondary?
            html`${agencyIntro} ${this.agencyPrimary} ${agencyConjunction} ${this.agencySecondary}${taxpayerText}`:
            html`${agencyIntro} ${this.agencyPrimary}${taxpayerText}`}
        </p>
      </section>
    `;
  }

  // Render the logos and text in the masthead
  mastheadTemplate() {
    if (this.domain || this.disclaimer || this.logos.length > 0) {
      return html`
        <section class="usa-identifier__section usa-identifier__section--masthead">
          <div class="usa-identifier__container">
            ${this.mastheadLogosTemplate()} ${this.mastheadTextTemplate()}
          </div>
        </section>
      `;
    }
  }

  // Render the list of links
  linksTemplate() {
    const { required_links } = this._identifierText;
    const linkAbout = this.linkAbout.textContent || required_links.about;
    const agencyShortname = this.linkAbout.getAttribute("shortname") || this.primaryAgency.textContent;
    const requiredLinks = [
      this.linkAbout,
      this.linkAccessibility,
      this.linkFOIA,
      this.linkNoFEAR,
      this.linkOIG,
      this.linkPerformance,
      this.linkPrivacy
    ];

    this.linkAbout.textContent = `${linkAbout} ${agencyShortname}`;
    this.linkAccessibility.textContent = this.linkAccessibility.textContent || required_links.accessibility;
    this.linkFOIA.textContent = this.linkFOIA.textContent || required_links.foia;
    this.linkNoFEAR.textContent = this.linkNoFEAR.textContent || required_links.no_fear;
    this.linkOIG.textContent = this.linkOIG.textContent || required_links.oig;
    this.linkPerformance.textContent = this.linkPerformance.textContent || required_links.performance;
    this.linkPrivacy.textContent = this.linkPrivacy.textContent || required_links.privacy;

    requiredLinks.forEach(requiredLink => {
      requiredLink.classList.add("usa-identifier__required-link", "usa-link");
      requiredLink.setAttribute("part", "link");
    });

    return html`

      <nav class="usa-identifier__section usa-identifier__section--required-links">
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            ${requiredLinks.map((requiredLink) =>
              html`
                <li class="usa-identifier__required-links-item">
                    ${requiredLink}
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
      usagovLink.setAttribute("part", "usagov-link");
      usagovContent = this.usagov;
    }

    return html`
      <section
        class="usa-identifier__section usa-identifier__section--usagov"
      >
        <div class="usa-identifier__container">
          <p class="usa-identifier__usagov-description" part="usagov">
            ${usagovContent}
          </p>
        </div>
      </section>
    `;
  }

  render() {
    const { aria_label } = this._identifierText;
    const componentAriaLabel = this.label || aria_label;
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
