import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

describe("usa-link component", async () => {
  function getInsideLink() {
    return document.body
      .querySelector("usa-link")
      ?.shadowRoot?.querySelector("a");
  }

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
