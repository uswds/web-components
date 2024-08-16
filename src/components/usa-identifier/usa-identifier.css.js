import { css } from "lit";
import "../uswds-core/system-vars.css";
import "../uswds-core/theme-vars.css";

export default css`
  :host {
    --usa-theme-identifier-background-color: var(--usa-system-color-ink);
    --usa-theme-identifier-font-family: var(--usa-theme-font-body);
    --usa-theme-identifier-max-width: var(--usa-theme-grid-container-max-width);
    --usa-theme-identifier-primary-text-color: var(--usa-system-color-gray-10);
    --usa-theme-identifier-secondary-text-color: var(
      --usa-system-color-gray-cool-30
    );

    .usa-identifier {
      background-color: var(--usa-theme-identifier-background-color);
      font-family: var(--usa-theme-identifier-font-family);
      font-size: 1.06rem;
      line-height: 1.3;
      padding-bottom: var(--usa-system-unit-2);
      writing-mode: horizontal-tb;
    }

    .usa-identifier__section {
      padding-block: var(--usa-system-unit-2);
    }

    .usa-identifier__container {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--usa-theme-identifier-max-width);
      padding-left: var(--usa-system-unit-2);
      padding-right: var(--usa-system-unit-2);
    }

    .usa-identifier__logos {
      display: flex;
      margin-right: var(--usa-system-unit-2);
    }

    .usa-identifier__logo {
      display: block;
      height: var(--usa-system-unit-6);
      text-decoration: none;
    }

    .usa-identifier__logo + .usa-identifier__logo {
      margin-left: var(--usa-system-unit-1);
    }

    .usa-identifier__logo-img {
      height: 100%;
      width: auto;
    }

    .usa-identifier__identity {
      flex: 1 1 0%;
      margin-top: var(--usa-system-unit-2);
    }

    .usa-identifier__identity-domain {
      color: var(--usa-theme-identifier-secondary-text-color);
    }

    .usa-identifier__identity-disclaimer,
    .usa-identifier__identity-domain {
      margin: 0;
      padding: 0;
    }

    .usa-identifier__required-links-list {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .usa-identifier__required-links-item {
      -moz-column-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: var(--usa-system-unit-105);
    }

    .usa-identifier__identity-disclaimer {
      font-weight: var(--usa-theme-text-bold);
    }

    .usa-identifier__usagov-description {
      margin: 0;
    }

    .usa-identifier__usagov-description a {
      display: inline-block;
      font-weight: var(--usa-theme-text-bold);
    }

    .usa-identifier__identity-disclaimer,
    .usa-identifier__identity-disclaimer a,
    .usa-identifier__identity-disclaimer a:visited,
    .usa-identifier__usagov-description,
    .usa-identifier__usagov-description a,
    .usa-identifier__usagov-description a:visited {
      color: var(--usa-theme-identifier-primary-text-color);
    }

    .usa-identifier__required-link,
    .usa-identifier__required-link.usa-link {
      color: var(--usa-theme-identifier-secondary-text-color);
      display: inline-block;
    }

    .usa-identifier__required-links-item:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 40em) {
      .usa-identifier__section--masthead .usa-identifier__container {
        align-items: center;
        display: flex;
      }
      .usa-identifier__identity {
        margin-top: 0;
      }
      .usa-identifier__required-links-list {
        -moz-column-count: 2;
        column-count: 2;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
        -moz-column-fill: balance;
        column-fill: balance;
      }
      .usa-identifier__section--required-links {
        padding-block: var(--usa-system-unit-1);
      }
    }

    @media (min-width: 64em) {
      .usa-identifier__required-links-list {
        -moz-column-count: 4;
        column-count: 4;
      }
      .usa-identifier__section--required-links {
        font-size: 1rem;
      }
      .usa-identifier__required-links-item {
        margin-bottom: var(--usa-system-unit-1);
      }
      .usa-identifier__container {
        padding-inline: var(--usa-system-unit-4);
      }
    }
  }
`;
