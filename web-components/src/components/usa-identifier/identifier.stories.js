import "./index";
import { html } from 'lit';
import {
  DefaultContent,
  EsContent,
  SecondaryLogoContent,
  EsSecondaryLogoContent,
  TaxpayerContent,
  EsTaxpayerContent,
} from "./content";

export default {
  title: "Components/Identifier",
  component: "usa-identifier",
  render: ({
    masthead,
    required_links,
    usagov,
    parent_logo,
    parent_secondary
  }) => html`
    <usa-identifier>
      ${masthead.domain ? html`<p slot="domain">${masthead.domain}</p>`: null}
      ${parent_logo ? html`
        <a slot="logo" href="${masthead.parent.url}">
          <img
            src="${parent_logo}"
            alt="${masthead.parent.name} logo"/>
        </a>
      `: null}
      ${parent_secondary ? html`
        <a slot="logo" href="${parent_secondary.url}">
          <img
            src="${parent_secondary.logo}"
            alt="${parent_secondary.name} logo"/>
        </a>
      `: null}
      <p slot="disclaimer">
        ${masthead.content}
        <a href="">${masthead.parent.name}</a>
        ${parent_secondary? html`
          ${parent_secondary.conjunction}
          <a href="">${parent_secondary.name}</a>
        `: null}
      </p>
      <nav slot="links">
        <a href="${required_links.about.url}">${required_links.about.label} ${parent.shortname}</a>
        <a href="${required_links.accessibility.url}">${required_links.accessibility.label}</a>
        <a href="${required_links.foia.url}">${required_links.foia.label}</a>
        <a href="${required_links.no_FEAR.url}">${required_links.no_FEAR.label}</a>
        <a href="${required_links.oig.url}">${required_links.oig.label}</a>
        <a href="${required_links.performance.url}">${required_links.performance.label}</a>
        <a href="${required_links.privacy.url}">${required_links.privacy.label}</a>
      </nav>
      <div slot="usagov">${usagov.description} <a href="${usagov.link.url}">${usagov.link.label}</a></div>
    </usa-identifier>
  `
}

export const Default = {};
Default.args = DefaultContent;

export const DefaultSpanish = {};
DefaultSpanish.args = EsContent;

export const MultipleLogos = {};
MultipleLogos.args = {
  ...Default.args,
  ...SecondaryLogoContent
};

export const MultipleLogosSpanish = {};
MultipleLogosSpanish.args = {
  ...DefaultSpanish.args,
  ...EsSecondaryLogoContent
};

export const NoLogo = {};
NoLogo.args = {
  ...DefaultContent,
  primary_logo: {
    logo: null
  }
}
