import { css } from "lit";
import "../../uswds-core/system-vars.css";
import "../../uswds-core/theme-vars.css";

export default css`
  :host {
    /* general component vars */
    --usa-theme-details-border-color: var(--usa-theme-details-summary-background-color);
    --usa-theme-details-border-width: var(--usa-system-unit-05);
    --usa-theme-details-font-family: var(--usa-theme-font-body);
    --usa-theme-details-font-size: var();
    --usa-theme-details-icon-size: var(--usa-system-unit-3);
    --usa-theme-details-icon-open: url("https://designsystem.digital.gov/assets/img/usa-icons/add.svg");
    --usa-theme-details-icon-closed: url("https://designsystem.digital.gov/assets/img/usa-icons/remove.svg");
    --usa-theme-details-icon-position: right 1.25rem center;
    --usa-theme-details-margin-top: var(--usa-system-unit-1);
    /* panel vars */
    --usa-theme-details-panel-background-color: var(--usa-theme-page-background-color);
    --usa-theme-details-panel-text-color: var(--usa-theme-text-color);
    --usa-theme-details-panel-padding-top: var(--usa-system-unit-3);
    --usa-theme-details-panel-padding-right: var(--usa-system-unit-205);
    --usa-theme-details-panel-padding-bottom: var(--usa-system-unit-3);
    --usa-theme-details-panel-padding-left: var(--usa-system-unit-2);
    /* summary vars */
    --usa-theme-details-summary-background-color: var(--usa-theme-color-base-lightest);
    --usa-theme-details-summary-text-color: var(--usa-theme-text-color);
    --usa-theme-details-summary-text-size: var(--usa-theme-text-color);
    --usa-theme-details-summary-text-weight: var(--usa-theme-text-bold);
    --usa-theme-details-summary-padding-top: var(--usa-system-unit-2);
    --usa-theme-details-summary-padding-right: var(--usa-system-unit-7);
    --usa-theme-details-summary-padding-bottom: var(--usa-system-unit-2);
    --usa-theme-details-summary-padding-left: var(--usa-system-unit-205);


    .usa-details {
      /* TODO: use var to define this */
      font-family: var(--usa-theme-details-font-family);
      font-size: 1.06rem;
      line-height: 1.5;
      margin-top: var(--usa-theme-details-margin-top);
    }

    .usa-details__summary {
      background-image: var(--usa-theme-details-icon-open);
      background-repeat: no-repeat;
      background-size: var(--usa-theme-details-summary-icon-size);
      background-color: var(--usa-theme-details-summary-background-color);
      background-repeat: no-repeat;
      background-position: var(--usa-theme-details-icon-position);
      color: var(--usa-theme-details-summary-text-color);
      cursor: pointer;
      font-size: 1.06rem;
      line-height: .9;
      font-weight: var(--usa-theme-details-summary-text-weight);
      padding-top: var(--usa-theme-details-summary-padding-top);
      padding-right: var(--usa-theme-details-summary-padding-right);
      padding-bottom: var(--usa-theme-details-summary-padding-bottom);
      padding-left: var(--usa-theme-details-summary-padding-left);
    }
    .usa-details__content {
      background-color: var(--usa-theme-details-panel-background-color);
      color: var(--usa-theme-details-panel-text-color);
      padding-top: var(--usa-theme-details-panel-padding-top);
      padding-right: var(--usa-theme-details-panel-padding-right);
      padding-bottom: var(--usa-theme-details-panel-padding-bottom);
      padding-left: var(--usa-theme-details-panel-padding-left);
    }
    .usa-details__bordered {
      border-color: var(--usa-theme-details-border-color);
      border-width: var(--usa-theme-details-border-width);
      border-style: solid;
    }
    .usa-details[open] .usa-details__summary {
      /* TODO: use local files */
      background-image: var(--usa-theme-details-icon-closed);
    }
    .usa-details > .usa-details__summary  {
      list-style: none;
    }
    .usa-details > .usa-details__summary ::-webkit-details-marker {
      display: none;
    }
  }
`;
