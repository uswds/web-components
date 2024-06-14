import "./index";

import { html, nothing } from "lit";

export default {
  title: "Components/Banner",
  component: "usa-banner",
  args: {
    label: "",
    tld: "",
    lang: "",
  },
  render: ({ lang, label, tld }) => html`
    <usa-banner
      lang=${lang || nothing}
      label=${label || nothing}
      tld=${tld || nothing}
    ></usa-banner>
  `,
};

export const Default = {};

export const CustomAriaLabel = {
  args: {
    label: "A custom aria label",
  },
};

export const CustomContent = {
  args: {
    bannerText: "Custom banner text I've created",
    bannerAction: "Learn more",
    domainHeading: "Domain heading",
    domainText:
      "Domain text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero.",
    httpsHeading: "HTTPS heading",
    httpsText:
      "HTTPS text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, exercitationem.",
  },
  render: ({
    bannerText,
    bannerAction,
    domainHeading,
    domainText,
    httpsHeading,
    httpsText,
  }) => html`
    <usa-banner>
      <span slot="banner-text">${bannerText}</span>
      <span slot="banner-action">${bannerAction}</span>
      <span slot="domain-heading">${domainHeading}</span>
      <span slot="domain-text">${domainText}</span>
      <span slot="https-heading">${httpsHeading}</span>
      <span slot="https-text">${httpsText}</span>
    </usa-banner>
  `,
};

export const Mil = {
  args: {
    tld: "mil",
  },
};

export const EspañolGov = {
  args: {
    lang: "es",
  },
};

export const EspañolMil = {
  args: {
    lang: "es",
    tld: "mil",
  },
};
