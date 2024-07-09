import { css } from "lit";
import "../../uswds-core/color-vars.css";

export default css`
  :host {
    --usa-system-color-white: #fff;
    --usa-system-color-gray-5: #f0f0f0;
    --usa-theme-color-base-lightest: var(--usa-system-color-gray-5);
    --usa-theme-page-background-color: var(--usa-system-color-white);
    --usa-theme-details-panel-background-color: var(--usa-theme-page-background-color);
    --usa-theme-details-summary-background-color: var(--usa-theme-color-base-lightest);
    --usa-theme-details-border-color: var(--usa-theme-details-summary-background-color);
    --usa-theme-details-border-width: .25rem;
    --usa-theme-details-font-family: "Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif";

    .usa-details {
      color: #1b1b1b;
      /* TODO: use var to define this */
      font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      font-size: 1.06rem;
      line-height: 1.5;
      margin-top: .5rem;
    }
    .usa-details__summary {
      /* TODO: use local files */
      /* TODO: determine if background image is still the best way to add icons here */
      background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/add.svg);
      background-repeat: no-repeat;
      background-size: 1.5rem;
      background-color: var(--usa-theme-details-summary-background-color);
      background-repeat: no-repeat;
      background-position: right 1.25rem center;
      cursor: pointer;
      font-size: 1.06rem;
      font-weight: 700;
      line-height: .9;
      padding: 1rem 3.5rem 1rem 1.25rem;
    }
    .usa-details__content {
      background-color: var(--usa-theme-details-panel-background-color);
      padding: 1.5rem 1.25rem 1.5rem 1rem;
    }
    .usa-details__bordered {
      border-color: var(--usa-theme-details-border-color);
      border-width: var(--usa-theme-details-border-width);
      border-style: solid;
    }
    .usa-details[open] .usa-details__summary {
      /* TODO: use local files */
      background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/remove.svg);
    }
    .usa-details > .usa-details__summary  {
      list-style: none;
    }
    .usa-details > .usa-details__summary ::-webkit-details-marker {
      display: none;
    }
  }
`;
