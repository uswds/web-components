import { css } from "lit";
import "../uswds-core/system-vars.css";
import "../uswds-core/theme-vars.css";

export default css`
  :host {
    --theme-input-line-height: 1.3;
    --theme-input-max-width: var(--usa-system-unit-mobile-lg);
    --theme-input-state-border-width: var(--usa-system-unit-05);
    --theme-input-state-border-negative-margin: calc(
      var(--usa-system-unit-1) - vcar(--theme-input-state-border-width)
    );

    input {
      box-sizing: border-box;
      background: var(--usa-theme-page-background-color);
      border-width: 1px;
      border-color: var(--usa-system-color-gray-cool-60);
      border-style: solid;
      border-radius: 0;
      color: var(--usa-theme-text-color);
      display: block;
      height: 2.5rem;
      margin-top: 0.5rem;
      max-width: var(--theme-input-max-width);
      padding: 0.5rem;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-family:
        Source Sans Pro Web,
        Helvetica Neue,
        Helvetica,
        Roboto,
        Arial,
        sans-serif;
      font-size: 1.06rem;
      line-height: var(--theme-input-line-height);
    }

    input:not([disabled]):focus,
    textarea:not([disabled]):focus {
      outline-width: var(--usa-theme-focus-width);
      outline-color: var(--usa-theme-focus-color);
      outline-style: var(--usa-theme-focus-style);
      outline-offset: var(--usa-theme-focus-offset);
    }

    input:disabled {
      background-color: var(--usa-theme-color-disabled-lighter);
      color: var(--usa-theme-color-disabled-dark);
      cursor: not-allowed;
    }

    label {
      color: var(--usa-theme-text-color);
      font-family:
        Source Sans Pro Web,
        Helvetica Neue,
        Helvetica,
        Roboto,
        Arial,
        sans-serif;
      font-size: 1.06rem;
      line-height: var(--theme-input-line-height);
      display: block;
      font-weight: 400;
      margin-top: var(--usa-system-unit-3);
      max-width: var(--usa-system-unit-mobile-lg);
    }
  }

  :host([state=success]),
  :host([state=error]) {
    input {
      border-width: var(--theme-input-state-border-width);
      padding-top: var(--theme-input-state-border-negative-margin);
      padding-bottom: var(--theme-input-state-border-negative-margin);
    }
  }

  :host([state=success]) {
    input {
      border-color: var(--usa-system-color-green-cool-40v);
    }
  }

  :host([state=error]) {
    input {
      border-color: var(--usa-theme-color-error-dark);
    }

    label {
      font-weight: 700;
      margin-top: 0;
    }
  }

  :host([state=disabled]) {
    input {
      background-color: var(--usa-theme-color-disabled-lighter);
      color: var(--usa-theme-color-disabled-dark);
      cursor: not-allowed;
    }
  }
`;
