import "./index";
import { html } from "lit";

export default {
  title: "Components/Identifier",
  component: "usa-identifier",
  argTypes: {
    primary_agency: { name: "Primary agency information" },
    logo1: { control: "text", name: "Primary agency logo" },
    secondary_agency: { name: "Secondary agency information" },
    logo2: { control: "text", name: "Secondary agency logo" },
    masthead: { name: "Masthead content" },
    taxpayer: { name: "Taxpayer disclaimer" },
    required_links: { name: "Required links" },
    usagov: { name: "USA.gov information" },
    main_aria_label: { name: "Component aria-label" },
  },
  args: {
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
    required_links: {
      aria_label: "Important links",
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
      link_url: "https://www.usa.gov/",
    },
  },
  render: ({
    primary_agency,
    secondary_agency,
    logo1,
    logo2,
    masthead,
    taxpayer,
    required_links,
    usagov,
    main_aria_label,
  }) => html`
    <usa-identifier aria-label="${main_aria_label}">
      <p slot="domain">${masthead.domain}</p>
      ${logo1
        ? html`<a slot="logo" href="${primary_agency.url}">
            <img src="${logo1}" alt="${primary_agency.name} logo" />
          </a>`
        : null}
      ${logo2
        ? html`<a slot="logo" href="${secondary_agency.url}">
            <img src="${logo2}" alt="${secondary_agency.name} logo" />
          </a>`
        : null}
      <p slot="disclaimer" aria-label="${masthead.aria_label}">
        ${masthead.disclaimer}
        <a href="${primary_agency.url}">${primary_agency.name}</a>
        ${secondary_agency
          ? html`${masthead.conjunction}
              <a href="${secondary_agency.url}">${secondary_agency.name}</a>`
          : null}${taxpayer ? html`. ${taxpayer}` : null}
      </p>
      <nav slot="links" aria-label="${required_links.aria_label}">
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
  `,
};

export const Default = {};

export const DefaultSpanish = {
  args: {
    main_aria_label: "Identificador de la agencia",
    masthead: {
      aria_label: "Descripción de la agencia",
      conjunction: "y",
      domain: "[domain.gov]",
      disclaimer: "Un sitio web oficial de",
    },
    taxpayer:
      "Producido y publicado con dinero de los contribuyentes de impuestos.",
    required_links: {
      aria_label: "Enlaces importantes",
      about: "Acerca de",
      accessibility: "Declaración de accesibilidad",
      foia: "Solicitud a través de FOIA",
      no_FEAR: "Datos de la ley No FEAR",
      oig: "Oficina del Inspector General",
      performance: "Informes de desempeño",
      privacy: "Política de privacidad",
    },
    usagov: {
      text: "¿Necesita información y servicios del Gobierno?",
      link_label: "Visite USA.gov en Español",
      link_url: "https://www.usa.gov/espanol/",
    },
  },
};

export const oneAgency = {
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

export const MultipleAgencies = {
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

export const TaxpayerDisclaimer = {};
