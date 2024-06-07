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
      bodyExdent: { type: Boolean },
      footerExdent: { type: Boolean },
      headerExdent: { type: Boolean },
      headerFirst: { type: Boolean},
      flag: { type: Boolean },
      mediaRight: { type: Boolean },
      mediaInset: { type: Boolean },
      mediaExdent: { type: Boolean },

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
    const classes = {
      "usa-card__header": true,
      "usa-card__header--exdent": this.headerExdent
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="usa-card__heading">
          ${this.headerContent}
        </div>
      </div>
    `;
  }
  // Render media
  mediaTemplate() {
    const classes = {
      "usa-card__media": true,
      "usa-card__media--exdent": this.mediaExdent,
      "usa-card__media--inset": this.mediaInset
    }

    if(!this.media) {
      return;
    }

    return html`
    <div class="${classMap(classes)}">
      <div class="usa-card__img">
        ${this.media}
      </div>
    </div>
    `
  }

  // Render body
  bodyTemplate() {
    const classes = {
      "usa-card__body": true,
      "usa-card__body--exdent": this.bodyExdent
    };

    return html`<div class="${classMap(classes)}">${this.bodyContent}</div>`
  }

  // Render footer
  footerTemplate() {
    const classes = {
      "usa-card__footer": true,
      "usa-card__footer--exdent": this.footerExdent
    }

    return html`<div class="${classMap(classes)}">${this.footerContent}</div>`
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
      "usa-card--flag": this.flag,
      "usa-card--media-right": this.mediaRight
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
