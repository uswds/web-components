import "./index";
import { html } from 'lit';

export default {
  title: "Components/Identifier",
  component: "usa-identifier",
  argTypes: {
    primary_agency: { name: "Primary agency information" },
    logo1: { control: 'text', name: "Primary agency logo" },
    secondary_agency: {name: "Secondary agency information" },
    logo2: { control: 'text', name: "Secondary agency logo" },
    masthead: { name: "Masthead content" },
    taxpayer: { name: "Taxpayer disclaimer" },
    required_links: { name: "Required links" },
    usagov: { name: "USA.gov information" }
  },
  args: {
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
      conjunction: "and",
      domain: "[domain.gov]",
      disclaimer: "An official website of the",
    },
    taxpayer: "Produced and published at taxpayer expense.",
    required_links: {
      about: "About",
      accessibility: "Accessibility statement",
      foia: "FOIA requests",
      no_FEAR: "No FEAR Act data",
      oig: "Office of the Inspector General",
      performance: "Performance reports",
      privacy: "Privacy policy",
    },
    usagov: {
      text: "Looking for U.S. government information and services?",
      link_label: "Visit USA.gov",
      link_url: "https://www.usa.gov/"
    }
  },
  render: ({
    primary_agency,
    secondary_agency,
    logo1,
    logo2,
    masthead,
    taxpayer,
    required_links,
    usagov
  }) => html`
    <usa-identifier>
      <p slot="domain">${masthead.domain}</p>
      ${logo1 ? html`<a slot="logo" href="${primary_agency.url}">
        <img src="${logo1}" alt="${primary_agency.name} logo"/>
      </a>`: null}
      ${logo2 ? html`<a slot="logo" href="${secondary_agency.url}">
        <img src="${logo2}" alt="${secondary_agency.name} logo"/>
      </a>`: null}
      <p slot="disclaimer">
        ${masthead.disclaimer} <a href="${primary_agency.url}">${primary_agency.name}</a>
        ${secondary_agency ? html`${masthead.conjunction} <a href="${secondary_agency.url}">${secondary_agency.name}</a>`: null}${taxpayer ? html`. ${taxpayer}`: null}
      </p>
      <nav slot="links">
        <a href="">${required_links.about} ${primary_agency.shortname}</a>
        <a href="">${required_links.accessibility}</a>
        <a href="">${required_links.foia}</a>
        <a href="">${required_links.no_FEAR}</a>
        <a href="">${required_links.oig}</a>
        <a href="">${required_links.performance}</a>
        <a href="">${required_links.privacy}</a>
      </nav>
      <div slot="usagov">
        ${usagov.text} <a href="${usagov.link_url}">${usagov.link_label}</a>
      </div>
    </usa-identifier>
  `
}

export const Default = {};

export const oneAgency = {
  args: {
    logo2: false,
    secondary_agency: false,
    taxpayer: false
  },
  argTypes: {
    logo2: { table: { disable: true } },
    secondary_agency: { table: { disable: true } },
    taxpayer: { table: { disable: true } },
  }
};

export const MultipleAgencies = {
  args: {
    taxpayer: false
  },
  argTypes: {
    taxpayer: { table: { disable: true } },
  }
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
  }
};

export const TaxpayerDisclaimer = {};

