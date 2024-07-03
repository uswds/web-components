import { css } from "lit";

export default css`
  :host {
    .usa-identifier {
      font-family: Public Sans Web,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
      font-size: 1rem;
      line-height: 1.4;
      color: #fff;
      background-color: #1b1b1b;
      padding-bottom: 1rem;
    }

    .usa-identifier__section {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    .usa-identifier__container {
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 87.5rem;
    }

    .usa-identifier__logos {
      display: flex;
      margin-right: 1rem;
    }

    .usa-identifier__logo {
      text-decoration: none;
      height: 3rem;
      display: block;
    }

    .usa-identifier__logo-img {
      height: 100%;
      width: auto;
    }

    .usa-identifier__identity {
      flex: 1 1 0%;
      margin-top: 1rem;
    }

    .usa-identifier__identity-domain {
      color: #adadad;
    }

    .usa-identifier__identity-disclaimer,
    .usa-identifier__identity-domain {
      margin: 0;
      padding: 0;
    }

    .usa-identifier__required-links-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      margin-top: 0;
    }

    .usa-identifier__required-links-item {
      -moz-column-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: .75rem;
    }

    .usa-identifier__identity-disclaimer {
      font-weight: 700;
    }

    .usa-identifier__identity-disclaimer a,
    .usa-identifier__identity-disclaimer a:visited,
    .usa-identifier__usagov-description a,
    .usa-identifier__usagov-description a:visited {
      color: #e6e6e6;
    }

    .usa-identifier__required-link, .usa-identifier__required-link.usa-link {
      color: #adadad;
      display: inline-block;
    }

    .usa-identifier__section--usagov a {
      color: #e6e6e6;
      font-weight: 700;
      display: inline-block;
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
        padding-bottom: .5rem;
        padding-top: .5rem;
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
        margin-bottom: .5rem;
      }
      .usa-identifier__container {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  }
`;
