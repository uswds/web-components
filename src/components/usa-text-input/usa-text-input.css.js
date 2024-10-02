import { css } from "lit";

export default css`
  :host {
    .usa-input {
      box-sizing: border-box;
      background: white;
      border-width: 1px;
      border-color: #565c65;
      border-style: solid;
      border-radius: 0;
      color: #1b1b1b;
      display: block;
      height: 2.5rem;
      margin-top: .5rem;
      max-width: 30rem;
      padding: .5rem;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      font-size: 1.06rem;
      line-height: 1.3;
    }

    input:not([disabled]):focus, textarea:not([disabled]):focus {
      outline: .25rem solid #2491ff;
      outline-offset: 0;
    }

    .usa-label {
      color: #1b1b1b;
      font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
      font-size: 1.06rem;
      line-height: 1.3;
      display: block;
      font-weight: 400;
      margin-top: 1.5rem;
      max-width: 30rem;
    }
  }
`;
