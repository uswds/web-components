import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideLink() {
  return document.body
    .querySelector("usa-link")
    ?.shadowRoot?.querySelector("a");
}

describe("usa-link component", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `<usa-link href="http://designsystem.digital.gov">It's dangerous to go alone. Here, take this.</usa-link>`;
  });

  it("should show href props", () => {
    getInsideLink();
    expect(getInsideLink().getAttribute("href")).toContain(".gov");
  });

  it("should show slotted children", () => {
    getInsideLink();
    expect(
      document.body
        .querySelector("usa-link")
        ?.shadowRoot?.querySelector("slot")
        .assignedNodes({ flatten: true })[0].textContent,
    ).toContain("dangerous");
  });
});

describe("progressively enhanced usa-link component", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `<usa-link><a href="http://designsystem.digital.gov">It's dangerous to go alone. Here, take this.</a></usa-link>`;
  });

  it("should show href props", () => {
    getInsideLink();
    expect(getInsideLink().getAttribute("href")).toContain(".gov");
  });

  it("should render link with component markup", () => {
    expect(getInsideLink().className).toContain("usa-link");
  });

  it("should render only one <a> tag", () => {
    let aTags = document.body.querySelector("usa-link")?.shadowRoot?.querySelectorAll("a");
    expect(aTags.length).toBe(1);
  });
});
