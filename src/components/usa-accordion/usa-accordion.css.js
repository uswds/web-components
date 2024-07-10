import { css } from "lit";
import "../../uswds-core/system-vars.css";
import "../../uswds-core/theme-vars.css";

export default css`
  :host {
    /* general component vars */
    --usa-theme-accordion-border-color: var(--usa-theme-accordion-summary-background-color);
    --usa-theme-accordion-border-width: var(--usa-system-unit-05);
    --usa-theme-accordion-font-family: var(--usa-theme-font-body);
    --usa-theme-accordion-icon-size: var(--usa-system-unit-3);
    --usa-theme-accordion-icon-open: url("https://designsystem.digital.gov/assets/img/usa-icons/add.svg");
    --usa-theme-accordion-icon-closed: url("https://designsystem.digital.gov/assets/img/usa-icons/remove.svg");
    --usa-theme-accordion-icon-position: right 1.25rem center;
    --usa-theme-accordion-margin-top: var(--usa-system-unit-1);
    /* panel vars */
    --usa-theme-accordion-panel-background-color: var(--usa-theme-page-background-color);
    --usa-theme-accordion-panel-text-color: var(--usa-theme-text-color);
    --usa-theme-accordion-panel-padding-top: var(--usa-system-unit-3);
    --usa-theme-accordion-panel-padding-right: var(--usa-system-unit-205);
    --usa-theme-accordion-panel-padding-bottom: var(--usa-system-unit-3);
    --usa-theme-accordion-panel-padding-left: var(--usa-system-unit-2);
    /* summary vars */
    --usa-theme-accordion-summary-background-color: var(--usa-theme-color-base-lightest);
    --usa-theme-accordion-summary-text-color: var(--usa-theme-text-color);
    --usa-theme-accordion-summary-text-size: var(--usa-theme-text-color);
    --usa-theme-accordion-summary-text-weight: var(--usa-theme-text-bold);
    --usa-theme-accordion-summary-padding-top: var(--usa-system-unit-2);
    --usa-theme-accordion-summary-padding-right: var(--usa-system-unit-7);
    --usa-theme-accordion-summary-padding-bottom: var(--usa-system-unit-2);
    --usa-theme-accordion-summary-padding-left: var(--usa-system-unit-205);


    .usa-accordion {
      /* TODO: use var to define this */
      font-family: var(--usa-theme-accordion-font-family);
      font-size: 1.06rem;
      line-height: 1.5;
      margin-top: var(----usa-theme-accordion-margin-top);
    }

    .usa-accordion__summary {
      background-image: var(--usa-theme-accordion-icon-open);
      background-repeat: no-repeat;
      background-size: var(--usa-theme-accordion-summary-icon-size);
      background-color: var(--usa-theme-accordion-summary-background-color);
      background-repeat: no-repeat;
      background-position: var(--usa-theme-accordion-icon-position);
      color: var(--usa-theme-accordion-summary-text-color);
      cursor: pointer;
      font-size: 1.06rem;
      line-height: .9;
      font-weight: var(--usa-theme-accordion-summary-text-weight);
      padding-top: var(--usa-theme-accordion-summary-padding-top);
      padding-right: var(--usa-theme-accordion-summary-padding-right);
      padding-bottom: var(--usa-theme-accordion-summary-padding-bottom);
      padding-left: var(--usa-theme-accordion-summary-padding-left);
    }
    .usa-accordion__content {
      background-color: var(--usa-theme-accordion-panel-background-color);
      color: var(--usa-theme-accordion-panel-text-color);
      padding-top: var(--usa-theme-accordion-panel-padding-top);
      padding-right: var(--usa-theme-accordion-panel-padding-right);
      padding-bottom: var(--usa-theme-accordion-panel-padding-bottom);
      padding-left: var(--usa-theme-accordion-panel-padding-left);
    }
    .usa-accordion__bordered {
      border-color: var(--usa-theme-accordion-border-color);
      border-width: var(--usa-theme-accordion-border-width);
      border-style: solid;
    }
    .usa-accordion[open] .usa-accordion__summary {
      /* TODO: use local files */
      background-image: var(--usa-theme-accordion-icon-closed);
    }
    .usa-accordion > .usa-accordion__summary  {
      list-style: none;
    }
    .usa-accordion > .usa-accordion__summary ::-webkit-details-marker {
      display: none;
    }
  }
`;
