import "./index";

import { html } from "lit";

export default {
  title: "Components/card",
  component: "usa-card",
  args: {
    title: "",
    image: false,
    media: "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.",
    buttonText: "Visit Florida Keys",
    variant: "headerExdent"
  },
  render: ({ title, content, buttonText, image, media }) => {
    return html`
      <usa-card>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card"}</h2>
        </div> 
        ${image ? html`<img slot="card-media" src="${media}" alt="Placeholder image">`: null}
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const Default = {};

export const Test = {
  args: {
    title: "Test card",
    image: true
  }
}

export const MediaWithMedia = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card w/ Media"}</h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
            ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const MediaWithHeaderFirst = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card headerFirst>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Media with Header first"}</h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
              ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const InsetMedia = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card mediaInset>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Inset media"}</h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
              ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const ExdentMedia = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card mediaExdent>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Exdent media"}</h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
              ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const Flag = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card flag>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Default flag"}</h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
              ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}

export const FlagMediaRightInset = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card flag mediaRight mediaInset>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Flag media right inset"}
          </h2>
        </div>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-body">
          <p>
              ${content}
          </p>
        </div>
        <div slot="card-footer">
          <a href="#" class="usa-button">${buttonText}</a>
        </div>
      </usa-card>
    `
  }
}
