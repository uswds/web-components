import "./index";
import { html, nothing } from "lit";
import usaIdentifierContent from "./identifier.json";

export default {
  title: "Components/Identifier",
  component: "usa-identifier",
  argTypes: {
    lang: {
      options: ['en', 'es'],
      control: { type: 'radio' }
    },
    primary_agency: { name: "Primary agency information" },
    logo1: { control: "text", name: "Primary agency logo" },
    secondary_agency: { name: "Secondary agency information" },
    logo2: { control: "text", name: "Secondary agency logo" },
    masthead: { name: "Masthead content" },
    taxpayer: { name: "Taxpayer disclaimer" },
    links_aria_label: { name: "Aria label for required links section" },
    link_about: { name: "Required link - About" },
    link_accessibility: { name: "Required link - Accessibility statement" },
    link_foia: { name: "Required link - FOIA requests" },
    link_no_FEAR: { name: "Required link - No FEAR Act data" },
    link_oig: { name: "Required link - Office of the Inspector General" },
    link_performance: { name: "Required link - Performance reports" },
    link_privacy: { name: "Required link - Privacy policy" },
    usagov: { name: "USA.gov information" },
    main_aria_label: { name: "Component aria-label" },
  },
  args: {
    lang: "en",
    main_aria_label: "",
    primary_agency: {
      name: "[Parent agency]",
      shortname: "[Agency shortname]",
      url: "javascipt:void(0)",
    },
    logo1: "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    secondary_agency: {
      name: "[Other agency]",
      url: "javascipt:void(0)",
    },
    logo2: "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    masthead: {
      aria_label: "Agency description",
      conjunction: "and",
      domain: "[domain.gov]",
      disclaimer: "An official website of the",
    },
    showTaxpayer: false,
    taxpayer: "Produced and published at taxpayer expense.",
    links_aria_label: "Important links",
    link_about: {
      shortname: "[Agency shortname]",
      url: "javascipt:void(0)"
    },
    link_accessibility: {
      url: "javascipt:void(0)"
    },
    link_foia: {
      url: "javascipt:void(0)"
    },
    link_no_FEAR: {
      url: "javascipt:void(0)"
    },
    link_oig: {
      url: "javascipt:void(0)"
    },
    link_performance: {
      url: "javascipt:void(0)"
    },
    link_privacy: {
      url: "javascipt:void(0)"
    },
    usagov: {
      include: false,
    },
  },
  render: ({
    lang,
    primary_agency,
    secondary_agency,
    logo1,
    logo2,
    masthead,
    showTaxpayer,
    taxpayer,
    links_aria_label,
    link_about,
    link_accessibility,
    link_foia,
    link_oig,
    link_no_FEAR,
    link_performance,
    link_privacy,
    usagov,
    main_aria_label,
  }) => html`
    <usa-identifier lang=${lang || nothing} showTaxpayer=${showTaxpayer || nothing} aria-label=${main_aria_label || nothing} >
      ${logo1 ? html`
      <a slot="logo" href="${primary_agency.url}">
        <img src="${logo1}" alt="${primary_agency.name} logo" />
      </a>`: null}
      ${logo2 ? html`
      <a slot="logo" href="${secondary_agency.url}">
        <img src="${logo2}" alt="${secondary_agency.name} logo" />
      </a>`: null}
      <p slot="disclaimer" aria-label="${masthead.aria_label}">
        ${masthead.disclaimer}
        <a href="${primary_agency.url}">${primary_agency.name}</a>
        ${secondary_agency ? html`${masthead.conjunction} <a href="${secondary_agency.url}">${secondary_agency.name}</a>`: null}${showTaxpayer ? html`.
        ${taxpayer}` : null}
      </p>
      <nav slot="links" aria-label="${links_aria_label}">
        <a slot="link_about" href="${link_about.url}" shortname="${link_about.shortname}">${link_about.label ? html`${link_about.label}`: null}</a>
        <a slot="link_accessibility" href="${link_accessibility.url}">${link_accessibility.label ? html`${link_accessibility.label}`: null}</a>
        <a slot="link_foia" href="${link_foia.url}">${link_foia.label ? html`${link_foia.label}`: null}</a>
        <a slot="link_fear" href="${link_no_FEAR.url}">${link_no_FEAR.label ? html`${link_no_FEAR.label}`: null}</a>
        <a slot="link_oig" href="${link_oig.url}">${link_oig.label ? html`${link_oig.label}`: null}</a>
        <a slot="link_performance" href="${link_performance.url}">${link_performance.label ? html`${link_performance.label}`: null}</a>
        <a slot="link_privacy" href="${link_privacy.url}">${link_privacy.label ? html`${link_privacy.label}`: null}</a>
      </nav>
      ${usagov.include ? html`
        <div slot="usagov">
          ${usagov.text} <a href="${usagov.link_url}">${usagov.link_label}</a>
        </div>`: null}
    </usa-identifier>
  `,
};

export const Default = {};

export const DefaultSpanish = {
  args: {
    lang: "es"
  }
};

export const DefaultCustomContent = {
  args: {
    lang: "",
    links_aria_label: "[French] Important links",
    link_about: {
      shortname: "[Agency shortname]",
      label: "[French] About",
      url: "javascipt:void(0)"
    },
    showTaxpayer: true,
    taxpayer: "[French] Produced and published at taxpayer expense.",
    link_accessibility: {
      label: "[French] Accessibility statement",
      url: "javascipt:void(0)"
    },
    link_foia: {
      label: "[French] FOIA requests",
      url: "javascipt:void(0)"
    },
    link_no_FEAR: {
      label: "[French] No FEAR Act data",
      url: "javascipt:void(0)"
    },
    link_oig: {
      label: "[French] Office of the Inspector General",
      url: "javascipt:void(0)"
    },
    link_performance: {
      label: "[French] Performance reports",
      url: "javascipt:void(0)"
    },
    link_privacy: {
      label: "[French] Privacy policy",
      url: "javascipt:void(0)"
    },
    usagov: {
      include: true,
      text: "[French] Looking for U.S. government information and services?",
      link_label: "[French] Visit USA.gov",
      link_url: "[French]https://www.usa.gov/",
    },
  },
}

export const oneParentAgency = {
  args: {
    logo2: false,
    secondary_agency: false,
  },
};

export const MultipleParentAgencies = {};

export const NoLogo = {
  args: {
    logo1: false,
    logo2: false,
    secondary_agency: false,
  },
};

export const TaxpayerDisclaimer = {
  args: {
    logo2: false,
    secondary_agency: false,
    showTaxpayer: true,
  },
};
