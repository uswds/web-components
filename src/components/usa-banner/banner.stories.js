import "./index";

import { html, nothing } from "lit";

import { userEvent, expect, waitFor } from "@storybook/test";
import { within } from "shadow-dom-testing-library";

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
      data-testid="banner"
    ></usa-banner>
  `,
};

export const Default = {};

export const CustomContent = {
  args: {
    bannerText: "Un site Web officiel du gouvernement américain",
    bannerAction: "Voici comment vous le savez",
    domainHeading: "Les sites Web officiels utilisent",
    domainText:
      "Un site Web .gov appartient à une organisation gouvernementale officielle aux États-Unis.",
    httpsHeading: "Les sites Web .gov sécurisés utilisent HTTPS",
    httpsText: `Un verrou ou (lock) https:// signifie que vous êtes connecté(e) en toute sécurité au site Web .gov. Assurez-vous de ne partager des informations sensibles que sur des sites Web officiels et sécurisés.`,
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

export const ToggleBanner = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByShadowRole("button");
    const dotGovText = canvas.getByShadowText("Official websites use .gov");

    userEvent.click(button);
    await waitFor(() => {
      expect(dotGovText).toBeVisible();
    });

    userEvent.click(button);
    await waitFor(() => {
      expect(dotGovText).not.toBeVisible();
    });
  },
};
