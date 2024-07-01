import { css } from "lit";

export default css`
  :host {
    .details {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        list-style-type: none;
        color: #1b1b1b;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 1.06rem;
        line-height: 1.5;
      }
      .summary {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: .9;
        margin: 0;
        margin-top: .5rem;
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/add.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-size: 1.5rem;
        border: 0;
        border-radius: 0;
        box-shadow: none;
        justify-content: normal;
        text-align: left;
        padding: 0;
        color: #1b1b1b;
        background-color: #f0f0f0;
        background-repeat: no-repeat;
        background-position: right 1.25rem center;
        background-size: 1.5rem;
        cursor: pointer;
        font-weight: 700;
        margin: 0;
        padding: 1rem 3.5rem 1rem 1.25rem;
        max-width: 100%;
      }
      .content {
        overflow: visible;
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-top: 1.5rem;
        color: #1b1b1b;
        background-color: #fff;
        margin-top: 0;
        overflow: auto;
        padding: 1rem 1.25rem calc(1rem - .25rem);
      }
      .details[open] .summary {
        background-image: url(https://designsystem.digital.gov/assets/img/usa-icons/remove.svg),linear-gradient(transparent,transparent);
      }
      details > summary {
        list-style: none;
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
  }
`;
