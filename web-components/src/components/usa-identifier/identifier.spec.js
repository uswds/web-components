import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideIdentifier() {
  return document.body
    .querySelector("usa-identifier")
    ?.shadowRoot?.querySelector(".usa-identifier");
}

describe("usa-identifier component - one logo", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-identifier aria-label="Agency identifier">
        <a slot="logo" href="javascipt:void(0)">
          <img src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="[Parent agency] logo">
        </a>
        <a slot="logo" href="javascipt:void(0)">
          <img src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="[Parent agency] logo">
        </a>
        <p slot="disclaimer" aria-label="Agency description">
          An official website of the
          <a href="javascipt:void(0)">[Parent agency]</a>
        </p>
        <nav slot="links" aria-label="Important links">
          <a href="javascipt:void(0)">About [Agency shortname]</a>
          <a href="javascipt:void(0)">Accessibility statement</a>
          <a href="javascipt:void(0)">FOIA requests</a>
          <a href="javascipt:void(0)">No FEAR Act data</a>
          <a href="javascipt:void(0)">Office of the Inspector General</a>
          <a href="javascipt:void(0)">Performance reports</a>
          <a href="javascipt:void(0)">Privacy policy</a>
        </nav>
        <div slot="usagov">
          Looking for U.S. government information and services? <a href="https://www.usa.gov/">Visit USA.gov</a>
        </div>
      </usa-identifier>
    `;
  });

  it("creates the .usa-identifier wrapper", () => {
    getInsideIdentifier();
    expect(getInsideIdentifier().className).toContain("usa-identifier");
  });

  it("adds both logos to the component", () => {
    expect(
      getInsideIdentifier().querySelectorAll(".usa-identifier__logo").length
    ).toBe(2);
  });
});
