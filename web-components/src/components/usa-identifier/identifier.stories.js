import "./index";
import { html } from "lit";

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
    main_aria_label: "Agency identifier",
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
    taxpayer: "Produced and published at taxpayer expense.",
    links_aria_label: "Important links",
    link_about: {
      label: "About",
      url: "javascipt:void(0)"
    },
    link_accessibility: {
      label: "Accessibility statement",
      url: "javascipt:void(0)"
    },
    link_foia: {
      label: "FOIA requests",
      url: "javascipt:void(0)"
    },
    link_no_FEAR: {
      label: "No FEAR Act data",
      url: "javascipt:void(0)"
    },
    link_oig: {
      label: "Office of the Inspector General",
      url: "javascipt:void(0)"
    },
    link_performance: {
      label: "Performance reports",
      url: "javascipt:void(0)"
    },
    link_privacy: {
      label: "Privacy policy",
      url: "javascipt:void(0)"
    },
    usagov: {
      include: true
    },
  },
  render: ({
    lang,
    primary_agency,
    secondary_agency,
    logo1,
    logo2,
    masthead,
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
    <usa-identifier lang="${lang}" aria-label="${main_aria_label}">
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
        ${secondary_agency ? html`${masthead.conjunction} <a href="${secondary_agency.url}">${secondary_agency.name}</a>`: null}${taxpayer ? html`.
        ${taxpayer}` : null}
      </p>
      <nav slot="links" aria-label="${links_aria_label}">
        <a href="${link_about.url}">${link_about.label} ${primary_agency.shortname}</a>
        <a href="${link_accessibility.url}">${link_accessibility.label}</a>
        <a href="${link_foia.url}">${link_foia.label}</a>
        <a href="${link_no_FEAR.url}">${link_no_FEAR.label}</a>
        <a href="${link_oig.url}">${link_oig.label}</a>
        <a href="${link_performance.url}">${link_performance.label}</a>
        <a href="${link_privacy.url}">${link_privacy.label}</a>
      </nav>
    </usa-identifier>
  `,
};

export const Default = {};

export const DefaultSpanish = {
  args: {
    lang: "es"
  }
};

export const oneParentAgency = {
  args: {
    logo2: false,
    secondary_agency: false,
    taxpayer: false,
  },
  argTypes: {
    logo2: { table: { disable: true } },
    secondary_agency: { table: { disable: true } },
    taxpayer: { table: { disable: true } },
  },
};

export const MultipleParentAgencies = {
  args: {
    taxpayer: false,
  },
  argTypes: {
    taxpayer: { table: { disable: true } },
  },
};

export const NoLogo = {
  args: {
    logo1: false,
    logo2: false,
    secondary_agency: false,
    taxpayer: false,
  },
  argTypes: {
    logo1: { table: { disable: true } },
    logo2: { table: { disable: true } },
    secondary_agency: { table: { disable: true } },
    taxpayer: { table: { disable: true } },
  },
};

export const TaxpayerDisclaimer = {
  args: {
    logo2: false,
    secondary_agency: false,
  },
  argTypes: {
    logo2: { table: { disable: true } },
    secondary_agency: { table: { disable: true } },
  },
};
