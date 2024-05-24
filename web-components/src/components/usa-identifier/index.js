import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import {customElement, property} from 'lit/decorators.js';

import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifier extends LitElement {

  static get properties() {
    return {
      /**
       * The site domain
       */
      site_domain: { type: String },
      /**
       * The agency name
       */
      agency_name: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      agency_href: { type: String },
      /**
       * The destination URL for the agency and logo link
       */
      agency_logo: { type: String },
      /**
       * The required link list items
       */
      link_list: { type: Array },
    };
  }

  constructor() {
    super();
    this.agency_href = "";
  }

  static styles = [unsafeCSS(usaIdentifierStyle)];

  render() {
    return html`

      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <a
                class="usa-identifier__logo"
                href="${this.agency_href}"
                ><img
                  class="usa-identifier__logo-img"
                  src="${this.agency_logo}"
                  alt="${this.agency_name} logo"
                  role="img"
              /></a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description,"
            >
              <p class="usa-identifier__identity-domain">${this.site_domain}</p>
              <p class="usa-identifier__identity-disclaimer">
                <span aria-hidden="true">An </span>official website of the
                <a href="${this.agency_href}">${this.agency_name}</a>
              </p>
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links,,,"
        >
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item">
                <a
                  href="javascript:void(0)"
                  class="usa-identifier__required-link usa-link"
                  >About &lt;Parent shortname&gt;</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >Accessibility statement</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >FOIA requests</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >No FEAR Act data</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >Office of the Inspector General</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >Performance reports</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                  >Privacy policy</a
                >
              </li>
            </ul>
          </div>
        </nav>
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>
            <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
