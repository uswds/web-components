import "./index";
import { html } from 'lit';
import {
  DefaultContent,
  EsContent,
  MultipleLogosContent,
  EsMultipleLogosContent,
  NoLogosContent,
  EsNoLogosContent,
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
    other_parent
  }) => html`
    <usa-identifier>
      <a slot="logo" href="${masthead.parent.url}">
        <img
          src="${masthead.parent.logo}"
          alt="${masthead.parent.name} logo"/>
      </a>
      <p slot="domain">${masthead.domain}</p>
      <p slot="disclaimer">
        ${masthead.content}
        <a href="">${masthead.parent.name}</a>
      </p>
      <nav slot="links">
        <a href="${required_links.about.url}">${required_links.about.label} ${masthead.parent.shortname}</a>
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

export const MultipleLogos = {
  render: ({
    masthead,
    required_links,
    usagov,
    other_parent
  }) => html`
    <usa-identifier>
      <a slot="logo" href="${masthead.parent.url}">
        <img
          src="${masthead.parent.logo}"
          alt="${masthead.parent.name} logo"/>
      </a>
      <a slot="logo" href="${other_parent.url}">
        <img
          src="${other_parent.logo}"
          alt="${other_parent.name} logo"/>
      </a>
      <p slot="domain">${masthead.domain}</p>
      <p slot="disclaimer">
        ${masthead.content}
        <a href="${masthead.parent.url}">${masthead.parent.name}</a>
        and <a href="${other_parent.url}">${other_parent.name}</a>
      </p>
      <nav slot="links">
        <a href="${required_links.about.url}">${required_links.about.label} ${masthead.parent.shortname}</a>
        <a href="${required_links.accessibility.url}">${required_links.accessibility.label}</a>
        <a href="${required_links.foia.url}">${required_links.foia.label}</a>
        <a href="${required_links.no_FEAR.url}">${required_links.no_FEAR.label}</a>
        <a href="${required_links.oig.url}">${required_links.oig.label}</a>
        <a href="${required_links.performance.url}">${required_links.performance.label}</a>
        <a href="${required_links.privacy.url}">${required_links.privacy.label}</a>
      </nav>
      <div slot="usagov">${usagov.description} <a href="${usagov.link.url}">${usagov.link.label}</a></div>
    </usa-identifier>
  `};
MultipleLogos.args = {
  ...Default.args,
  ...MultipleLogosContent
};