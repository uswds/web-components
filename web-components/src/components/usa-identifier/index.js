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
    const logoList = this.querySelectorAll('.usa-identifier__logo');
    const logoImageList = this.querySelectorAll('.usa-identifier__logo img');
    const logoImageListArr = Array.from(logoImageList);
    logoImageListArr.forEach(logo => {
      logo.classList.add("usa-identifier__logo-img");
    });

    /**
       * Scaffold the required links list:
       * Build an unordered list and add necessary attributes
    */
    const nav = this.querySelector('nav');
    const linksArr = Array.from(nav.children);
    const linksList = document.createElement("ul");

    linksList.classList.add("usa-identifier__required-links-list");
    nav.insertAdjacentElement("afterbegin", linksList);

    linksArr.forEach(link => {
      const listItem = document.createElement("li");
      listItem.classList.add("usa-identifier__required-links-item");
      link.classList.add("usa-identifier__required-link");
      listItem.appendChild(link);
      linksList.appendChild(listItem);
    });

    /**
      * Scaffold usagov text
      * Add necessary attributes
    */
    const usagov = this.querySelector('.usa-identifier__usagov-description');
    const usagovLink = this.querySelector('.usa-identifier__usagov-description a');
    usagovLink.classList.add('usa-link');

    /**
      * Scaffold disclaimer text
      * Wrap "An" in aria-hidden span
    */
    const disclaimer = this.querySelector('.usa-identifier__identity-disclaimer');
    if ( disclaimer.textContent.includes("An") ){
      disclaimer.innerHTML.replace('An', '<span aria-hidden="true" style="background:pink">An</span>');
    };

    // return elements
    this.logo = logoList;
    this.list = linksList;
    this.usagov = usagov;
    this.disclaimer = disclaimer;
  }

  connectedCallback() {
    super.connectedCallback();
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
          aria-label="Agency identifier,"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              ${this.logo}
            </div>
            <section class="usa-identifier__identity" aria-label="Agency description,">
              <p class="usa-identifier__identity-domain"><slot name="domain"></slot></p>
              <p class="usa-identifier__identity-usagov">${this.disclaimer}</p>
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
        <section>
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
