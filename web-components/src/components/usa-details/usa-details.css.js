import { css } from "lit";

export default css`
  :host {
    .usa-details {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        color: #1b1b1b;
        font-size: 1.06rem;
        line-height: 1.5;
      }
      .usa-details__summary {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: .9;
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/add.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-size: 1.5rem;
        color: #1b1b1b;
        background-color: #f0f0f0;
        background-repeat: no-repeat;
        background-position: right 1.25rem center;
        background-size: 1.5rem;
        cursor: pointer;
        font-weight: 700;
        padding: 1rem 3.5rem 1rem 1.25rem;
      }
      .usa-details__content {
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-top: 1.5rem;
        color: #1b1b1b;
        background-color: #fff;
        padding: 1rem 1.25rem calc(1rem - .25rem);
      }
      .usa-details[open] .usa-details__summary {
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/remove.svg),linear-gradient(transparent,transparent);
      }
      .usa-details > .usa-details__summary  {
        list-style: none;
      }
      .usa-details > .usa-details__summary ::-webkit-details-marker {
        display: none;
      }
  }
`;
