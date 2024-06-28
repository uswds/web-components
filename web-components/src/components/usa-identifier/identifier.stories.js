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
    domain: { name: "Site domain" },
    primary_agency_name: { name: "Primary agency name" },
    primary_agency_url: { name: "Primary agency url" },
    primary_agency_shortname: { name: "Primary agency shortname" },
    primary_agency_logo_show: { name: "Add primary agency logo" },
    primary_agency_logo: { control: "text", name: "Primary agency logo", control: 'text', if: { arg: 'primary_agency_logo_show' } },
    secondary_agency_show: { name: "Add secondary agency" },
    secondary_agency_name: { name: "Secondary agency name", control: 'text', if: { arg: 'secondary_agency_show' } },
    secondary_agency_logo: { control: "text", name: "Secondary agency logo", control: 'text', if: { arg: 'secondary_agency_show' } },
    secondary_agency_url: { name: "Secondary agency url", control: 'text', if: { arg: 'secondary_agency_show' } },
    secondary_agency_conjunction: { name: "Secondary agency conjunction", control: 'text', if: { arg: 'secondary_agency_show' } },
    taxpayer_show: { name: "Add taxpayer disclaimer"},
    taxpayer: { name: "Taxpayer disclaimer content", control: 'text', if: { arg: 'taxpayer_show' } },
    link_about: { name: "Required link - About" },
    link_accessibility: { name: "Required link - Accessibility statement" },
    link_foia: { name: "Required link - FOIA requests" },
    link_no_FEAR: { name: "Required link - No FEAR Act data" },
    link_oig: { name: "Required link - Office of the Inspector General" },
    link_performance: { name: "Required link - Performance reports" },
    link_privacy: { name: "Required link - Privacy policy" },
    usagov: { name: "USA.gov information" },
    aria_labels: { name: "Aria labels"}
  },
  args: {
    lang: "en",
    domain: "[domain.gov]",
    primary_agency_name: "[Parent agency]",
    primary_agency_shortname: "[Agency shortname]",
    primary_agency_url: "javascipt:void(0)",
    primary_agency_logo_show: true,
    primary_agency_logo: "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    secondary_agency_show: false,
    secondary_agency_name: "[Other agency]",
    secondary_agency_logo: "https://designsystem.digital.gov/assets/img/circle-gray-20.svg",
    secondary_agency_url: "javascipt:void(0)",
    secondary_agency_conjunction: "and",
    masthead_disclaimer: "An official website of the",
    taxpayer_show: false,
    taxpayer: "",
    link_about: {
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
    aria_labels: {
      main: "",
      links: "",
      masthead: ""
    }
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
    masthead_disclaimer,
    taxpayer_show,
    taxpayer,
    link_about,
    link_accessibility,
    link_foia,
    link_oig,
    link_no_FEAR,
    link_performance,
    link_privacy,
    usagov,
    aria_labels
  }) => html`
    <usa-identifier lang=${lang || nothing} taxpayer_show=${taxpayer_show || nothing} aria-label=${aria_labels.main || nothing} >
      ${primary_agency_logo_show ? html`
      <a slot="logo" href="${primary_agency_url}">
        <img src="${primary_agency_logo}" alt="${primary_agency_name} logo" />
      </a>`: null}
      ${secondary_agency_show ? html`
      <a slot="logo" href="${secondary_agency_url}">
        <img src="${secondary_agency_logo}" alt="${secondary_agency_name} logo" />
      </a>`: null}
      <p slot="domain">${domain}</p>
      <p slot="disclaimer" aria-label=${aria_labels.masthead || nothing}>
        ${masthead_disclaimer}
        <a slot="primary-agency" href="${primary_agency_url}">${primary_agency_name}</a>
        ${secondary_agency_show ? html`${secondary_agency_conjunction} <a slot="secondary-agency" href="${secondary_agency_url}">${secondary_agency_name}</a>`: null}${taxpayer_show ? html`.
        ${taxpayer}` : null}
      </p>
      <nav slot="links" aria-label=${aria_labels.links || nothing}>
        <a slot="link-about" href="${link_about.url}" shortname="${primary_agency_shortname}">${link_about.label ? html`${link_about.label}`: null}</a>
        <a slot="link-accessibility" href="${link_accessibility.url}">${link_accessibility.label ? html`${link_accessibility.label}`: null}</a>
        <a slot="link-foia" href="${link_foia.url}">${link_foia.label ? html`${link_foia.label}`: null}</a>
        <a slot="link-fear" href="${link_no_FEAR.url}">${link_no_FEAR.label ? html`${link_no_FEAR.label}`: null}</a>
        <a slot="link-oig" href="${link_oig.url}">${link_oig.label ? html`${link_oig.label}`: null}</a>
        <a slot="link-performance" href="${link_performance.url}">${link_performance.label ? html`${link_performance.label}`: null}</a>
        <a slot="link-privacy" href="${link_privacy.url}">${link_privacy.label ? html`${link_privacy.label}`: null}</a>
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
    lang: "es",
  }
};

export const CustomContent = {
  args: {
    lang: "",
    link_about: {
      shortname: "[Agency shortname]",
      label: "[French] About",
      url: "javascipt:void(0)"
    },
    taxpayer_show: true,
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
    aria_labels: {
      main: "[French] Agency identifier",
      links: "[French] Important links",
      masthead: "[French] Agency description"
    }
  },
}

export const MultipleParentAgencies = {
  args: {
    secondary_agency_show: true
  }
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
