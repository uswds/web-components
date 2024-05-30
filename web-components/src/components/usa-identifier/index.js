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
    const logoList = this.querySelectorAll('[slot="logo"]');
    const logoListArr = Array.from(logoList);

    if (logoListArr) {
      logoListArr.forEach(logo => {
        const logoImage = this.querySelector('img');
        logo.classList.add("usa-identifier__logo");
        logoImage.classList.add("usa-identifier__logo-img");
      });
    }

    /**
       * Scaffold the required links list:
       * Build an unordered list and add necessary attributes
    */
    const nav = this.querySelector('nav');
    const linksArr = Array.from(nav.children);
    const linksList = document.createElement("ul");

    if (nav) {
      linksList.classList.add("usa-identifier__required-links-list");
      nav.insertAdjacentElement("afterbegin", linksList);

      linksArr.forEach(link => {
        const listItem = document.createElement("li");
        listItem.classList.add("usa-identifier__required-links-item");
        link.classList.add("usa-identifier__required-link");
        listItem.appendChild(link);
        linksList.appendChild(listItem);
      });
    }


    /**
      * Scaffold usagov text
      * Add necessary attributes
    */
    const usagov = this.querySelector('[slot="usagov"]');
    const usagovLink = this.querySelector('[slot="disclaimer"] a');
    if (usagov) {
      usagov.classList.add('usa-identifier__usagov-description');
      usagovLink.classList.add('usa-link');
    }

    /**
      * Scaffold disclaimer text:
      * Wrap "An" in aria-hidden span
    */
    const disclaimer = this.querySelector('[slot="disclaimer"]');
    if(disclaimer) {
      disclaimer.classList.add('usa-identifier__identity-disclaimer');
    }
    if ( disclaimer.textContent.includes("An") ){
      disclaimer.innerHTML.replace('An', '<span aria-hidden="true" style="background:pink">An</span>');
    };

    /**
      * Scaffold domain text
      * Ade necessary attributes
    */
    const domain = this.querySelector('[slot="domain"]');
    if (domain) {
      domain.classList.add('usa-identifier__identity-domain');
    }

    // return elements
    this.logo = logoList;
    this.list = linksList;
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
            <div class="usa-identifier__logos">
              ${this.logo}
            </div>
            <section class="usa-identifier__identity" aria-label="Agency description,">
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
            ${this.list}
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
