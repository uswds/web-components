import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideInput() {
  return document.body
    .querySelector("usa-text-input")
    .shadowRoot;
}

function getLabelContext() {
  return getInsideInput().querySelector("label")?.shadowRoot?.getAttribute("for")
}

function getInputElement() {
  return getInsideInput().querySelector("input");
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
    expect(getInputElement().getAttribute("id")).toContain("input-type-text");
  })
  
  it("Should have an associated label", () => {
    expect(getInputElement().getAttribute("id")).toMatch(getLabelContext());
  })
})
