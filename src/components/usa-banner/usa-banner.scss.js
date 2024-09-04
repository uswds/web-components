import usaBannerStyle from "@uswds/uswds/scss/usa-banner?inline";

("@uswds/uswds/scss/usa-banner");
import { unsafeCSS, css } from "lit";

import close from "@uswds/uswds/img/usa-icons/close.svg";
import expandMore from "@uswds/uswds/img/usa-icons/expand_more.svg";
import expandLess from "@uswds/uswds/img/usa-icons/expand_less.svg";
import lock from "@uswds/uswds/img/usa-icons/lock.svg";

export const bannerStyles = [
  unsafeCSS(usaBannerStyle),
  css`
    :host {
      --theme-banner-background-color: var(--usa-base-lightest, #f0f0f0);
      --theme-banner-font-family: var(--usa-font-ui, system-ui, sans-serif);
      --theme-banner-link-color: var(--theme-link-color, #005ea2);
      --theme-banner-link-color-hover: var(--theme-link-hover-color, #1a4480);
      // Missing theme-banner-max-width because we can't pass custom property to media queries.
    }

    * {
      box-sizing: border-box;
    }

    .usa-banner {
      background-color: var(--theme-banner-background-color);
      font-family: var(--theme-banner-font-family);
    }

    .usa-banner__inner {
      flex-wrap: nowrap;
    }

    /* Allows banner action to inherit font variable. */
    .usa-banner .usa-accordion {
      font-family: inherit;
    }

    .usa-banner__button {
      color: var(--theme-banner-link-color);
      cursor: pointer;
      font-family: inherit;
    }

    .usa-banner__button:hover {
      color: var(--theme-banner-link-hover-color);
    }

    /* In USWDS close icon is set via max-width media query, flipped it here. */
    .usa-banner__button::after,
    .usa-banner__header-action::after {
      background-image: url(${unsafeCSS(expandMore)});
      mask-image: url(${unsafeCSS(expandMore)});
    }

    .usa-banner__button[aria-expanded="true"]::after {
      background-image: url(${unsafeCSS(close)});
      mask-image: url(${unsafeCSS(close)});
    }

    /**
     * HTTPS section lock icon.
     *
     * Had to re-write styles to avoid reliance of SASS mixins & functions.
     * Height and width taken from calculated output in USWDS 3 banner.
     */
    .usa-banner__icon-lock {
      background-image: url(${unsafeCSS(lock)});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
      height: 1.5ex;
      mask-image: url(${unsafeCSS(lock)});
      mask-position: center;
      mask-repeat: no-repeat;
      mask-size: cover;
      vertical-align: middle;
      width: 1.21875ex;
    }

    @media all and (min-width: 40em) {
      .usa-banner__button[aria-expanded="true"]::after {
        background-image: url(${unsafeCSS(expandLess)});
        mask-image: url(${unsafeCSS(expandLess)});
      }
    }
  `,
];
