import usaBannerStyle from "@uswds/uswds/scss/usa-banner?inline";
("@uswds/uswds/scss/usa-banner");
import { unsafeCSS, css } from "lit";

import close from "@uswds/uswds/img/usa-icons/close.svg";
import expandMore from "@uswds/uswds/img/usa-icons/expand_more.svg";
import expandLess from "@uswds/uswds/img/usa-icons/expand_less.svg";

// ! CSS won't work if comments added *inside* css``.
export const bannerStyles = [
  unsafeCSS(usaBannerStyle),
  css`
    * {
      box-sizing: border-box;
    }
    .usa-banner__inner {
      flex-wrap: nowrap;
    }

    .usa-accordion__button {
      cursor: pointer;
    }
  `,

  //* In USWDS close icon is set via max-width media query, flipped it here.
  css`
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
