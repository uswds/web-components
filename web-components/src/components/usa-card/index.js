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
      headerFirst: { type: Boolean}
    }
  }
  
  constructor() {
    super();

    // TODO: Figure out how to implement slots for each section

    // this.heading = this.querySelector(".usa-card__heading");
    // this.media = this.querySelector("img");
    // this.content = this.querySelectorAll("p");
    // this.link = this.querySelector("a");

    this.header = this.querySelector("[slot='card-header']")
  }

  // Render header
  headerTemplate() {
    return html`
      <div class="usa-card__header">
        <div class="usa-card__heading">
          ${this.heading}
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
    return html`<div class="usa-card__body">${this.content}</div>`
  }

  // Render footer
  footerTemplate() {
    return html`<div class="usa-card__footer">${this.link}</div>`
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
    const classes = {"usa-card--header-first": this.headerFirst}
    return html`
        <div class="usa-card ${classMap(classes)}">
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
