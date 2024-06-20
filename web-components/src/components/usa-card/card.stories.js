import "./index";

import { html } from "lit";

export default {
  title: "Components/Card",
  component: "usa-card",
  args: {
    title: "",
    media: "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.",
    buttonText: "Visit Florida Keys",
    layout: "",
    headerFirst: false,
  },
  render: ({ title, content, buttonText, image, media }) => {
    return html`
      <usa-card>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card"}</h2>
        </div>
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

export const CardWithMedia = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Card w/ Media"}</h2>
        </div>
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

// TODO: Fix variant attribute display
export const MediaWithHeaderFirst = {
  args: {
    headerFirst: true
  },
  render: ({ title, media, content, buttonText, headerFirst }) => {
    return html`
      <usa-card ${headerFirst ? "headerFirst" : null}>
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Media with Header first"}</h2>
        </div>
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

// TODO: Fix variant attribute display
export const InsetMedia = {
  args: {
    inset: true
  },
  render: ({ title, media, content, buttonText, inset }) => {
    return html`
      <usa-card>
        <img slot="card-media" src="${media}" alt="Placeholder image" ${inset ? "inset" : null}>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Inset media"}</h2>
        </div>
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

// TODO: Fix variant attribute display
export const ExdentMedia = {
  render: ({ title, media, content, buttonText }) => {
    return html`
      <usa-card>
        <img slot="card-media" src="${media}" alt="Placeholder image" exdent>
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Exdent media"}</h2>
        </div>
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
  args: {
    layout: "flag"
  },
  render: ({ title, media, content, buttonText, layout }) => {
    return html`
      <usa-card layout="${layout}">
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Default flag"}</h2>
        </div>
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
  args: {
    layout: "flag-alt"
  },
  render: ({ title, media, content, buttonText, layout }) => {

    return html`
      <usa-card layout="${layout}">
        <img slot="card-media" src="${media}" alt="Placeholder image">
        <div slot="card-header">
          <h2 class="usa-card__heading">${title || "Flag media right inset"}
          </h2>
        </div>
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
