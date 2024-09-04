import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { classMap } from "lit/directives/class-map.js";

import { bannerStyles } from "./usa-banner.scss";

import usFlagSmall from "@uswds/uswds/img/us_flag_small.png";
import iconDotGov from "@uswds/uswds/img/icon-dot-gov.svg";
import iconHttps from "@uswds/uswds/img/icon-https.svg";

/**
 * @summary The usa-banner component.
 *
 * @attribute {string} lang - The element's language.
 * @attribute {boolean} isOpen - If the banner is expanded or not.
 * @attribute {string} label - The custom aria label users can override.
 * @attribute {string} string - The top level domain for the site.
 *
 * @cssprop --theme-banner-background-color - Sets banner background color.
 * @cssprop --theme-banner-font-family - Sets banner font family.
 * @cssprop --theme-banner-link-color - Sets the default link color.
 * @cssprop --theme-banner-link-hover-color - Sets the default link color.
 *
 * @slot banner-text - The text for official government website text.
 * @slot banner-action - Action text label "Here's how you know."
 * @slot domain-heading - Heading text for the domain section.
 * @slot domain-text - Body text for domain section.
 * @slot https-heading - Heading for HTTPs section.
 * @slot https-text - Body text for HTTPs section.
 *
 * @tagname usa-banner
 */
export class UsaBanner extends LitElement {
  static properties = {
    lang: { type: String },
    data: { attribute: false },
    isOpen: { type: Boolean },
    classes: {},
    label: { type: String },
    tld: {
      type: String,
      reflect: true,
    },
  };

  toggle() {
    this.isOpen = !this.isOpen;
    this.shadowRoot
      .querySelector(".usa-banner__content")
      .toggleAttribute("hidden");
  }

  constructor() {
    super();
    this.lang = "en";
    this.isOpen = false;
    this.tld = "gov";

    this.data = {
      en: {
        banner: {
          label: "Official website of the United States government",
          text: "An official website of the United States government",
          action: "Here's how you know!",
        },
        domain: {
          heading: "Official websites use",
          text1: "A",
          text2:
            "website belongs to an official government organization in the United States.",
        },
        https: {
          heading1: "Secure",
          heading2: "websites use HTTPS",
          text1: "A <strong>lock</strong>",
          text2:
            "or <strong>https://</strong> means you’ve safely connected to the",
          text3:
            "website. Share sensitive information only on official, secure websites.",
        },
      },
      es: {
        banner: {
          label: "Un sitio oficial del Gobierno de Estados Unidos",
          text: "Un sitio oficial del Gobierno de Estados Unidos",
          action: "Así es como usted puede verificarlo",
        },
        domain: {
          heading: "Los sitios web oficiales usan",
          text1: "Un sitio web",
          text2:
            "pertenece a una organización oficial del Gobierno de Estados Unidos.",
        },
        https: {
          heading1: "Los sitios web seguros",
          heading2: "usan HTTPS",
          text1: "Un <strong>candado</strong>",
          text2:
            "o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web",
          text3:
            "Comparta información sensible sólo en sitios web oficiales y seguros.",
        },
      },
    };
  }

  // Get English or Spanish strings. Default to English if an unknown `lang` is passed.
  // Ex: <usa-banner lang="zy"></usa-banner>
  get _bannerText() {
    const content = this.data[this.lang] || this.data["en"];
    return content;
  }

  // Get the action text and use for both mobile & desktop buttons.
  get _actionText() {
    const bannerActionText = this.querySelector('[slot="banner-action"]');

    return bannerActionText?.textContent;
  }

  // TODO: Use inline image instead or translate strings.
  svgLock() {
    return html`
      <span class="icon-lock">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="64"
          viewBox="0 0 52 64"
          class="usa-banner__lock-image"
          role="img"
          aria-labelledby="banner-lock-description-default"
          focusable="false"
        >
          <title id="banner-lock-title-default">Lock</title>
          <desc id="banner-lock-description-default">Locked padlock icon</desc>
          <path
            fill="#000000"
            fill-rule="evenodd"
            d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
          />
        </svg>
      </span>
    `;
  }

  domainTemplate(tld) {
    const { domain } = this._bannerText;

    return html`
      <img
        class="usa-banner__icon usa-media-block__img"
        src="${iconDotGov}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="usa-media-block__body">
        <p>
          <strong>
            <slot name="domain-heading"> ${domain.heading} .${tld} </slot>
          </strong>
          <br />
          <slot name="domain-text">
            ${domain.text1} <strong>.${tld}</strong> ${domain.text2}
          </slot>
        </p>
      </div>
    `;
  }

  httpsTemplate(tld) {
    const { https } = this._bannerText;

    return html`
      <img
        class="usa-banner__icon usa-media-block__img"
        src="${iconHttps}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="usa-media-block__body">
        <p>
          <strong>
            <slot name="https-heading">
              ${https.heading1} .${tld} ${https.heading2}
            </slot> </strong
          ><br />
          <slot name="https-text">
            ${unsafeHTML(https.text1)} (${this.svgLock()})
            ${unsafeHTML(https.text2)} .${tld} ${https.text3}
          </slot>
        </p>
      </div>
    `;
  }

  static styles = [bannerStyles];

  render() {
    const classes = { ["usa-banner__header--expanded"]: this.isOpen };
    // ? Is there a better way to fallback to a default value is passed value doesn't match?
    // Example: User passes `tld="zzz"` --> uses "gov" domain instead of `zzz`.
    const tld = this.tld === "mil" ? "mil" : "gov";
    const { banner } = this._bannerText;

    return html`
      <section class="usa-banner" aria-label=${this.label || banner.label}>
        <div class="usa-accordion">
          <header class="usa-banner__header ${classMap(classes)}">
            <div class="usa-banner__inner">
              <div class="grid-col-auto">
                <img
                  aria-hidden="true"
                  class="usa-banner__header-flag"
                  src=${usFlagSmall}
                  alt=""
                />
              </div>
              <div
                class="grid-col-fill tablet:grid-col-auto"
                aria-hidden="true"
              >
                <p class="usa-banner__header-text">
                  <slot name="banner-text">${banner.text}</slot>
                </p>
                <p class="usa-banner__header-action">
                  <slot name="banner-action">${banner.action}</slot>
                </p>
              </div>
              <button
                type="button"
                class="usa-accordion__button usa-banner__button"
                aria-expanded="${this.isOpen}"
                aria-controls="gov-banner-default"
                @click="${this.toggle}"
              >
                <span class="usa-banner__button-text">
                  ${this._actionText || banner.action}
                </span>
              </button>
            </div>
          </header>
          <div class="usa-banner__content usa-accordion__content" hidden>
            <div class="grid-row grid-gap-lg">
              <div class="usa-banner__guidance tablet:grid-col-6">
                ${this.domainTemplate(tld)}
              </div>
              <div class="usa-banner__guidance tablet:grid-col-6">
                ${this.httpsTemplate(tld)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("usa-banner", UsaBanner);
