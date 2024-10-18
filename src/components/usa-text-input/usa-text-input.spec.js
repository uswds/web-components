import { beforeEach, describe, expect, it } from "vitest";

import "./index.js";

function getInsideInput() {
  return document.body
    .querySelector("usa-text-input")
    .shadowRoot;
}

function getLabelElement() {
  return getInsideInput().querySelector("label");
}

function getLabelContext() {
  return getLabelElement().getAttribute("for")
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
  });
  
  it("Should have an associated label", () => {
    expect(getInputElement().getAttribute("id")).toMatch(getLabelContext());
  });
})

describe("usa-text-input error state", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-text-input status="error">
        <label for="input-type-text">Text input label</label>
        <input id="input-type-text" name="input-type-text">
      </usa-text-input>
    `
  });

  it("Should add error classes to elements", () => {
    expect(getLabelElement().classList.contains("usa-label--error"));
    expect(getInputElement().classList.contains("usa-input--error"));
  })
}) 

describe("usa-text-input success state", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-text-input status="success">
        <label for="input-type-text">Text input label</label>
        <input id="input-type-text" name="input-type-text">
      </usa-text-input>
    `
  });

  it("Should add success classes to elements", () => {
    expect(getInputElement().classList.contains("usa-input--success"));
  })
}) 

describe("usa-text-input disabled state", async () => {
  beforeEach(async () => {
    document.body.innerHTML = `
      <usa-text-input status="disabled">
        <label for="input-type-text">Text input label</label>
        <input id="input-type-text" name="input-type-text">
      </usa-text-input>
    `
  });

  it("Should add disabled classes to elements", () => {
    expect(getInputElement().hasAttribute("disabled"));
  })
}) 
