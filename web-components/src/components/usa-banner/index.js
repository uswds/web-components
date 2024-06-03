import { LitElement, unsafeCSS, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
import usaBannerStyle from "@uswds/uswds/scss/usa-banner?inline";
import usFlagSmall from "@uswds/uswds/img/us_flag_small.png";
import iconDotGov from "@uswds/uswds/img/icon-dot-gov.svg";
import iconHttps from "@uswds/uswds/img/icon-https.svg";
import close from "@uswds/uswds/img/usa-icons/close.svg";
import expandMore from "@uswds/uswds/img/usa-icons/expand_more.svg";
import expandLess from "@uswds/uswds/img/usa-icons/expand_less.svg";

export class UsaBanner extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
    classes: {},
    tld: {
      type: String,
      reflect: true
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
    this.isOpen = false;
    this.tld = "gov";
  }

  // ! CSS won't work if comments added inside css``.
  static styles = [
    unsafeCSS(usaBannerStyle),
    // TODO: Remove asterisk in favor of global setting or style.
    css`
      * {
        box-sizing: border-box;
      }
    `,
    // ? In USWDS close icon is set via max-width media query, flipped it here.
    css`
      .usa-banner__inner {
        flex-wrap: nowrap;
      }

      .usa-accordion__button {
        cursor: pointer;
      }

      .usa-banner__button::after,
      .usa-banner__header-action::after {
        background-image: url(${unsafeCSS(expandMore)});
        mask-image: url(${unsafeCSS(expandMore)});
      }

      .usa-banner__button[aria-expanded="true"]::after {
        background-image: url(${unsafeCSS(close)});
        mask-image: url(${unsafeCSS(close)});
      }

      @media all and (min-width: 40em) {
        .usa-banner__button[aria-expanded="true"]::after {
          background-image: url(${unsafeCSS(expandLess)});
          mask-image: url(${unsafeCSS(expandLess)});
        }
      }
    `,
  ];

  render() {
    const classes = { ["usa-banner__header--expanded"]: this.isOpen };
    const tld = (this.tld === "mil") ? "mil" : "gov";

    return html`
      <section
        class="usa-banner"
        aria-label="Official website of the United States government"
      >
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
                  An official website of the United States government
                </p>
                <p class="usa-banner__header-action">Here’s how you know</p>
              </div>
              <button
                type="button"
                class="usa-accordion__button usa-banner__button"
                aria-expanded="${this.isOpen}"
                aria-controls="gov-banner-default"
                @click="${this.toggle}"
              >
                <span class="usa-banner__button-text">
                  Here’s how you know
                </span>
              </button>
            </div>
          </header>
          <div class="usa-banner__content usa-accordion__content" hidden>
            <div class="grid-row grid-gap-lg">
              <div class="usa-banner__guidance tablet:grid-col-6">
                <img
                  class="usa-banner__icon usa-media-block__img"
                  src="${iconDotGov}"
                  role="img"
                  alt=""
                  aria-hidden="true"
                />
                <div class="usa-media-block__body">
                  <p>
                    <strong>Official websites use .${tld}</strong><br />A
                    <strong>.${tld}</strong> website belongs to an official
                    government organization in the United States.
                  </p>
                </div>
              </div>
              <div class="usa-banner__guidance tablet:grid-col-6">
                <img
                  class="usa-banner__icon usa-media-block__img"
                  src="${iconHttps}"
                  role="img"
                  alt=""
                  aria-hidden="true"
                />
                <div class="usa-media-block__body">
                  <p>
                    <strong>Secure .${tld} websites use HTTPS</strong><br />A
                    <strong>lock</strong> (
                    <span class="icon-lock"
                      ><svg
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
                        <desc id="banner-lock-description-default">
                          Locked padlock icon
                        </desc>
                        <path
                          fill="#000000"
                          fill-rule="evenodd"
                          d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                        />
                      </svg> </span
                    >) or <strong>https://</strong> means you’ve safely
                    connected to the .${tld} website. Share sensitive information
                    only on official, secure websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("usa-banner", UsaBanner);
