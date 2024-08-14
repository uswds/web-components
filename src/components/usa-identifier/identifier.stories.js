import "./index";
import "../usa-link/index";
import { html, nothing } from "lit";
import readme from "./_readme.mdx";

export default {
  title: "Components/Identifier",
  component: "usa-identifier",
  parameters: {
    docs: {
      page: readme,
    },
  },
  argTypes: {
    lang: {
      options: ["en", "es"],
      control: { type: "radio" },
    },
    domain: { name: "Site domain" },
    primary_agency_name: { name: "Primary agency name" },
    primary_agency_url: { name: "Primary agency url" },
    primary_agency_shortname: { name: "Primary agency shortname" },
    primary_agency_logo_show: { name: "Add primary agency logo" },
    primary_agency_logo: {
      control: "text",
      name: "Primary agency logo",
      control: "text",
      if: { arg: "primary_agency_logo_show" },
    },
    secondary_agency_show: { name: "Add secondary agency" },
    secondary_agency_name: {
      name: "Secondary agency name",
      control: "text",
      if: { arg: "secondary_agency_show" },
    },
    secondary_agency_logo: {
      control: "text",
      name: "Secondary agency logo",
      control: "text",
      if: { arg: "secondary_agency_show" },
    },
    secondary_agency_url: {
      name: "Secondary agency url",
      control: "text",
      if: { arg: "secondary_agency_show" },
    },
    secondary_agency_conjunction: {
      name: "Secondary agency conjunction",
      control: "text",
      if: { arg: "secondary_agency_show" },
    },
    taxpayer_show: { name: "Add taxpayer disclaimer" },
    taxpayer: {
      name: "Taxpayer disclaimer content",
      control: "text",
      if: { arg: "taxpayer_show" },
    },
    link_about: { name: "Required link - About" },
    link_accessibility: { name: "Required link - Accessibility statement" },
    link_foia: { name: "Required link - FOIA requests" },
    link_no_fear: { name: "Required link - No FEAR Act data" },
    link_oig: { name: "Required link - Office of the Inspector General" },
    link_performance: { name: "Required link - Performance reports" },
    link_privacy: { name: "Required link - Privacy policy" },
    usagov: { name: "USA.gov information" },
    aria_label: { name: "Aria label" },
  },
  args: {
    lang: "en",
    domain: "[domain.gov]",
    primary_agency_name: "[Parent agency]",
    primary_agency_shortname: "[Agency shortname]",
    primary_agency_url: "javascipt:void(0)",
    primary_agency_logo_show: true,
    primary_agency_logo:
      "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    secondary_agency_show: false,
    secondary_agency_name: "[Other agency]",
    secondary_agency_logo:
      "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    secondary_agency_url: "javascipt:void(0)",
    secondary_agency_conjunction: "and",
    taxpayer_show: false,
    aria_label: "",
    link_about: {
      url: "javascipt:void(0)",
    },
    link_accessibility: {
      url: "javascipt:void(0)",
    },
    link_foia: {
      url: "javascipt:void(0)",
    },
    link_no_fear: {
      url: "javascipt:void(0)",
    },
    link_oig: {
      url: "javascipt:void(0)",
    },
    link_performance: {
      url: "javascipt:void(0)",
    },
    link_privacy: {
      url: "javascipt:void(0)",
    },
    usagov: {
      include: false,
    },
  },
  render: ({
    lang,
    primary_agency_name,
    primary_agency_url,
    primary_agency_shortname,
    primary_agency_logo,
    primary_agency_logo_show,
    secondary_agency_show,
    secondary_agency_logo,
    secondary_agency_name,
    secondary_agency_url,
    secondary_agency_conjunction,
    domain,
    taxpayer_show,
    taxpayer_custom,
    link_about,
    link_accessibility,
    link_foia,
    link_oig,
    link_no_fear,
    link_performance,
    link_privacy,
    usagov,
    aria_label,
    agency_intro,
  }) => html`
    <usa-identifier
      lang=${lang || nothing}
      taxpayer=${taxpayer_show || nothing}
      label=${aria_label || nothing}
      urlAbout=${link_about.url || nothing}
      urlAccessibility=${link_accessibility.url || nothing}
      urlFOIA=${link_foia.url || nothing}
      urlOIG=${link_oig.url || nothing}
      urlNoFEAR=${link_no_fear.url || nothing}
      urlPerformance=${link_performance.url || nothing}
      urlPrivacy=${link_privacy.url || nothing}
    >
      ${primary_agency_logo_show ? html`
        <div slot="logo">
          <a href="${primary_agency_url}">
            <img src="${primary_agency_logo}" alt="${primary_agency_name} logo"/>
          </a>
        </div>
      `: null}
      ${secondary_agency_show ? html`
        <div slot="logo">
          <a href="${secondary_agency_url}">
            <img src="${secondary_agency_logo}" alt="${secondary_agency_name} logo"/>
          </a>
        </div>
      `: null}
      <p slot="domain">${domain}</p>
      ${agency_intro
        ? html`<span slot="agency-intro">${agency_intro}</span>`
        : null}
      <div slot="agency-primary">
        <a agency-shortname="${primary_agency_shortname}" href="${primary_agency_url}">${primary_agency_name}</a>
      </div>
      ${secondary_agency_show
        ? html`
            <span slot="agency-conjunction">
              ${secondary_agency_conjunction}
            </span>
            <div slot="agency-secondary">
              <a href="${secondary_agency_url}">${secondary_agency_name}</a>
            </div>
        `: null}
      ${taxpayer_show && taxpayer_custom
        ? html`<span slot="agency-taxpayer">${taxpayer_custom}</span>`
        : null}
      ${usagov.include
        ? html` <div slot="usagov">
            ${usagov.text} <a href="${usagov.link_url}">${usagov.link_label}</a>
          </div>`
        : null}
    </usa-identifier>
  `,
};

export const Default = {};

export const DefaultSpanish = {
  args: {
    lang: "es",
  },
};



export const MultipleParentAgencies = {
  args: {
    secondary_agency_show: true,
  },
};

export const NoLogo = {
  args: {
    primary_agency_logo_show: false,
  },
};

export const TaxpayerDisclaimer = {
  args: {
    secondary_agency_show: true,
    taxpayer_show: true,
  },
};
