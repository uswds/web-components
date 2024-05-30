import { LitElement, html, unsafeCSS } from "lit";
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaIdentifierStyle from "@uswds/uswds/scss/usa-identifier?inline";

export class UsaIdentifier extends LitElement {
  constructor() {
    super();

       /**
       * Scaffold the logo(s):
       * Add necessary classes
    */
    const logos = this.querySelectorAll('[slot="logo"]');
    const logosArr = Array.from(logos);
    let logoWrapper;

    if (logos.length > 0) {
    logoWrapper = document.createElement('div');
    logoWrapper.classList.add('usa-identifier__logos');

    logosArr.forEach(logo => {
      const logoImage = this.querySelector('img');
      logo.classList.add('usa-identifier__logo');
      logoImage.classList.add('usa-identifier__logo-img');
      logoWrapper.appendChild(logo);
    });
    }

    /**
       * Scaffold the required links list:
       * Build an unordered list, list item wrappers, and
       * add necessary attributes
    */
    const nav = this.querySelector('nav');
    const linksArr = Array.from(nav.children);
    let linksList;

    if (nav) {
      linksList = document.createElement('ul');
      linksList.classList.add('usa-identifier__required-links-list');
      nav.insertAdjacentElement('afterbegin', linksList);

      linksArr.forEach(link => {
        const listItem = document.createElement('li');
        listItem.classList.add('usa-identifier__required-links-item');
        link.classList.add('usa-identifier__required-link');
        listItem.appendChild(link);
        linksList.appendChild(listItem);
      });
    }

    /**
      * Scaffold usagov text:
      * Add necessary classes for styling
    */
    const usagov = this.querySelector('[slot="usagov"]');
    const usagovLink = this.querySelector('[slot="usagov"] a');

    if (usagov) {
      usagov.classList.add('usa-identifier__usagov-description');
      usagovLink.classList.add('usa-link');
    }

    /**
      * Scaffold disclaimer text:
      * Add necessary classes for styling
      * Wrap "An" in aria-hidden span
    */
    const disclaimer = this.querySelector('[slot="disclaimer"]');

    if(disclaimer) {
      disclaimer.classList.add('usa-identifier__identity-disclaimer');
    }

    if ( disclaimer.textContent.includes('An') ){
      disclaimer.innerHTML.replace('An', '<span aria-hidden="true" style="background:pink">An</span>');
    };

    /**
      * Scaffold domain text:
      * Add necessary classes for styling
    */
    const domain = this.querySelector('[slot="domain"]');
    if (domain) {
      domain.classList.add('usa-identifier__identity-domain');
    }

    // return elements
    this.logoWrapper = logoWrapper;
    this.linkList = linksList;
    this.usagov = usagov;
    this.disclaimer = disclaimer;
    this.domain = domain;
  }

  static styles = [
    unsafeCSS(usaIdentifierStyle),
    unsafeCSS(uswdsCoreStyle)
  ];

  render() {
    return html`
      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            ${this.logoWrapper}
            <section class="usa-identifier__identity" aria-label="Agency description">
              ${this.domain}
              ${this.disclaimer}
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div class="usa-identifier__container">
            ${this.linkList}
          </div>
        </nav>
        <section class="usa-identifier__section usa-identifier__section--usagov">
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              ${this.usagov}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

window.customElements.define("usa-identifier", UsaIdentifier);
