import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideInput() {
  return document.body
    .querySelector("usa-text-input")
    ?.shadowRoot?.querySelector("input");
}

function getLabelContext() {
  return document.getElementsByTagName("label")?.shadowRoot?.getAttribute("for")
}

describe("usa-text-input component", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-text-input>
        <label for="input-type-text">Text input label</label>
        <input id="input-type-text" name="input-type-text">
      </usa-text-input>
    `
  });

  it("Should show props", () => {
    getInsideInput();
    expect(getInsideInput().getAttribute("id")).toContain("input-type-text");
  })
  
  it("Should have an associated label", () => {
    getInsideInput();
    expect(getInsideInput().getAttribute("id")).toMatch(getLabelContext());
  })
})
