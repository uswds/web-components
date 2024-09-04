import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideIdentifier() {
  return document.body
    .querySelector("usa-identifier")
    ?.shadowRoot?.querySelector(".usa-identifier");
}

describe("usa-identifier component", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-identifier
        lang="en"
        urlabout="javascipt:void(0)"
        urlaccessibility="javascipt:void(0)"
        urlfoia="javascipt:void(0)"
        urloig="javascipt:void(0)"
        urlnofear="javascipt:void(0)"
        urlperformance="javascipt:void(0)"
        urlprivacy="javascipt:void(0)">
        <div slot="logo">
          <a href="javascipt:void(0)">
            <img src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="[Parent agency] logo">
          </a>
        </div>
        <div slot="logo">
          <a href="javascipt:void(0)">
            <img src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="[Secondary parent agency] logo">
          </a>
        </div>
        <p slot="domain">[domain.gov]</p>
        <div slot="agency-primary">
          <a agency-shortname="[Agency shortname]" href="javascipt:void(0)">[Parent agency]</a>
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
      getInsideIdentifier().querySelector(".usa-identifier__logos").children
        .length,
    ).toBeGreaterThan(1);
  });

  it("generates the required links list with seven child links", () => {
    expect(
      getInsideIdentifier().querySelector(
        ".usa-identifier__required-links-list",
      ).children.length,
    ).toBe(7);
  });
});
