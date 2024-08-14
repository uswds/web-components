import { LitElement, html, css, unsafeCSS, nothing } from "lit";
import {repeat} from 'lit/directives/repeat.js';
import styles from "./usa-identifier.css.js";
import usaIdentifierContent from "./identifier.json";

/**
 * @summary The usa-identifier component.
 *
 * @attribute {String} label - Text content for the component's aria label
 * @attribute {String} lang - The language for default text content (Options: "en" (Default), "es")
 * @attribute {Boolean} taxpayer - Turn on the taxpayer disclaimer text
 * @attribute {String} urlAbout - The url for the parent agency's "About" page
 * @attribute {String} urlAccessibility - The url for the parent agency's "Accesibility statement" page
 * @attribute {String} urlFOIA - The url for the parent agency's "FOIA requests" page
 * @attribute {String} urlNoFEAR - The url for the parent agency's No FEAR Act data" page
 * @attribute {String} urlOIG - The url for the parent agency's "Office of the inspector general" page
 * @attribute {String} urlPerformance -  The url for the parent agency's "Performance reports" page
 * @attribute {String} urlPrivacy - The url for the parent agency's "Privacy policy" page
 *
 * @slot agency-primary - Information about the primary parent agency
 * @slot agency-secondary - Information about the secondary parent agency
 * @slot agency-conjunction - The connecting word between parent agencies. Default value: "and"
 * @slot domain - Site domain name
 * @slot logo - Optional slot to define the parent agency logo and url
 * @slot usagov - Optional slot for defining custom USA.gov content
 *
 * @tagname usa-identifier
 */
export class UsaIdentifier extends LitElement {
  static properties = {
    lang: { type: String },
    taxpayer: { type: Boolean },
    label: { type: String },
    urlAbout: { type: String },
    urlAccessibility: { type: String },
    urlFOIA: { type: String },
    urlNoFEAR: { type: String },
    urlOIG: { type: String },
    urlPerformance: { type: String },
    urlPrivacy: { type: String },
  };

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.agencyConjunction = this.querySelector('[slot="agency-conjunction"]');
    this.agencyIntro = this.querySelector('[slot="agency-intro"]');
    this.agencyPrimary = this.querySelector('[slot="agency-primary"] a');
    this.agencySecondary = this.querySelector('[slot="agency-secondary"] a');
    this.agencyTaxpayer = this.querySelector('[slot="agency-taxpayer"]');
    this.disclaimer = this.querySelector('[slot="disclaimer"]');
    this.domain = this.querySelector('[slot="domain"]');
    this.includeTaxpayer = this.getAttribute("taxpayer");
    this.logos = [...this.querySelectorAll('[slot="logo"] a')];
    this.usagov = this.querySelector('[slot="usagov"]');
  }

  get _identifierText() {
    const content =
      usaIdentifierContent[this.lang] || usaIdentifierContent["en"];
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
    const agencyIntro = this.agencyIntro
      ? this.agencyIntro.textContent
      : masthead.intro;
    const agencyConjunction = this.agencyConjunction
      ? this.agencyConjunction.textContent
      : masthead.conjunction;
    let taxpayerText;

    if (this.includeTaxpayer) {
      taxpayerText = this.agencyTaxpayer
        ? html`. ${this.agencyTaxpayer.textContent}`
        : html`. ${taxpayer}`;
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
          ${this.agencySecondary
            ? html`${agencyIntro} ${this.agencyPrimary} ${agencyConjunction}
              ${this.agencySecondary}${taxpayerText}`
            : html`${agencyIntro} ${this.agencyPrimary}${taxpayerText}`}
        </p>
      </section>
    `;
  }

  // Render the logos and text in the masthead
  mastheadTemplate() {
    if (this.domain || this.disclaimer || this.logos.length > 0) {
      return html`
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
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
    const { required_links } = this._identifierText;
    const agencyShortname = this.agencyPrimary.getAttribute("agency-shortname");

    this.requiredLinks = [
      {url: this.urlAbout, text: `${required_links.about} ${agencyShortname}`},
      {url: this.urlAccessibility, text: required_links.accessibility},
      {url: this.urlFOIA, text: required_links.foia},
      {url: this.urlNoFEAR, text: required_links.no_fear},
      {url: this.urlOIG, text: required_links.oig},
      {url: this.urlPerformance, text: required_links.performance},
      {url: this.urlPrivacy, text: required_links.privacy},
    ];

    return html`
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
      >
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            ${repeat(
                this.requiredLinks,
                (link) => html`
                <li class="usa-identifier__required-links-item">
                  <a class="usa-identifier__required-link usa-link" part="required-link" href="${link.url}">${link.text}</a>
                </li>
              `
              )}
          </ul>
        </div>
      </nav>
    `;
  }

  // Render the footer USA.gov text
  usagovTemplate() {
    const { usagov } = this._identifierText;
    let usagovContent = html`${usagov.description}
      <a class="usa-link" href="${usagov.link_url}">${usagov.link_label}</a>`;

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
      <section class="usa-identifier__section usa-identifier__section--usagov">
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
        ${this.mastheadTemplate()} ${this.linksTemplate()}
        ${this.usagovTemplate()}
      </section>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
