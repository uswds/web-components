import { LitElement, html, unsafeCSS, css } from "lit";
import { classMap } from "lit/directives/class-map.js"
import uswdsCoreStyle from "@uswds/uswds/scss/uswds-core?inline";
import usaCardStyle from "@uswds/uswds/scss/usa-card?inline";
import usaButtonStyle from "@uswds/uswds/scss/usa-button?inline";

export class UsaCard extends LitElement {
  static styles = [
    unsafeCSS(uswdsCoreStyle),
    unsafeCSS(usaCardStyle),
    unsafeCSS(usaButtonStyle),
    css`
    * {
        box-sizing: border-box;
      }
    `
  ]

  static get properties() {
    return {
      headerFirst: { type: Boolean},
      flag: { type: Boolean }
    }
  }
  
  constructor() {
    super();

    this.cardGroup = this.parentElement;
    this.headerContent = [...this.querySelector("[slot='card-header']").children];
    this.media = this.querySelector("[slot='card-media']")
    this.bodyContent = [...this.querySelector("[slot='card-body']").children];
    this.footerContent = [...this.querySelector("[slot='card-footer']").children];
  }

  // Render header
  headerTemplate() {
    return html`
      <div class="usa-card__header">
        <div class="usa-card__heading">
          ${this.headerContent}
        </div>
      </div>
    `;
  }
  // Render media
  mediaTemplate() {
    if(!this.media) {
      return;
    }

    return html`
    <div class="usa-card__media">
      <div class="usa-card__img">
        ${this.media}
      </div>
    </div>
    `
  }

  // Render body
  bodyTemplate() {
    return html`<div class="usa-card__body">${this.bodyContent}</div>`
  }

  // Render footer
  footerTemplate() {
    return html`<div class="usa-card__footer">${this.footerContent}</div>`
  }

  setClasses() {
    const classes = ["usa-card"];

    if (this.headerFirst) {
      classes.push("usa-card--header-first");
    }

    classes.forEach((className) => {
      console.log(className);
      return `className`
    });
  }

  // Render card
  cardTemplate() {
    const classes = {
      "usa-card": true,
      "usa-card--header-first": this.headerFirst,
      "usa-card--flag": this.flag
    }
    return html`
        <div class="${classMap(classes)}">
          <div class="usa-card__container">
            ${this.headerTemplate()}
            ${this.mediaTemplate()}
            ${this.bodyTemplate()}
            ${this.footerTemplate()}
          </div>
        </div>
    `
  }

  render() {
    return html`
        ${this.cardTemplate()}
      `
  }
}

window.customElements.define("usa-card", UsaCard);
