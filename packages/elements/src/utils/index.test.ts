import { describe, it, expect, vi, beforeEach } from "vitest";
import { defineCustomElement } from "./index";

describe("defineCustomElement", () => {
  let customElementsDefineSpy: ReturnType<typeof vi.spyOn>;
  let customElementsGetSpy: ReturnType<typeof vi.spyOn>;
  let Component: CustomElementConstructor;
  let tagName: string;

  beforeEach(() => {
    Component = class extends HTMLElement {};
    tagName = "usa-test-element";

    customElementsDefineSpy = vi.spyOn(customElements, "define");
    customElementsGetSpy = vi.spyOn(customElements, "get");
  });

  it("should define a custom element if it does not already exist", () => {
    defineCustomElement(tagName, Component);

    expect(customElementsGetSpy).toHaveBeenCalledWith(tagName);
    expect(customElementsDefineSpy).toHaveBeenCalledTimes(1);
    expect(customElementsDefineSpy).toHaveBeenCalledWith(tagName, Component);
  });

  it("should not define a custom element if it already exists", () => {
    defineCustomElement(tagName, Component);
    defineCustomElement(tagName, Component);

    expect(customElementsGetSpy).toHaveBeenCalledWith(tagName);
    // we still expect this to be called once because of the conditional check in our function
    expect(customElementsDefineSpy).toHaveBeenCalledTimes(1);
  });
});
