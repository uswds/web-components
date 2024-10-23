> [!CAUTION]
> Work on the next version of the Design System is happening in this repo. The code in this repository is not yet ready for production use.

# USWDS Web Components

The [United States Web Design System](https://designsystem.digital.gov) includes a library of open source UI components and a visual style guide for U.S. federal government websites.

This repository is for the code for the next version of the design system. We maintain another repository for the [current version of the design system](https://github.com/uswds/uswds) as well as [its documentation and website](https://github.com/uswds/uswds-site). To see the design system and its documentation on the web, visit [https://designsystem.digital.gov](https://designsystem.digital.gov).

Over the course of the next several months (and beyond), we will incrementally build the next version of the design system. This version will introduce [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)-based implementations of design system elements. We intend that, as we ship new components and new versions of existing components, you will be able to use them alongside older versions of USWDS.

- [More on our decision to use Web Components](https://github.com/uswds/uswds-proposals/blob/main/decisions/0001-use-web-components.md)

## Upgrading to Web Components

We are releasing these Web Components incrementally with the intent that they can also be added incrementally to existing sites that are currently using USWDS. If you are not currently using USWDS or you are using a version older than USWDS 3, we recommend adopting version 3 in the near term rather than waiting until the full suite of Web Components is production-ready.

## Guiding Principles

Work here will accord with the design system's existing [Product Values](https://designsystem.digital.gov/about/product-values/). However, in the course of building out the next version, we will be discovering and road-testing new values as well.

## Open Questions

While this new version is meant to facilitate incremental adoption, the new components themselves represent a big shift in the underlying technologies from previous versions of USWDS. This presents an exciting opportunity to make choices that will help shape future development of the design system, but this will require answering some fundamental questions. Some of the questions we're going to explore in this work are:

- **What is the right amount of tooling** If it's a goal to minimize dependencies, how little tooling can the project get away with while still being easy to use?
- **How should components enable customization?** How much content should come into components via attributes/props as opposed to slots? How much should components use shadow DOM vs. light DOM? Should components be styled through [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) in the components themselves or through external stylesheets? If the answer is a mixture of both, what is the right balance between the two approaches?
- **How can we be sure the new components are as accessible as possible?** Existing USWDS components [use JavaScript to progressively enhance semantic HTML](https://designsystem.digital.gov/documentation/developers/) to make them useable to as much of the public as possible. Because web components require JavaScript by default, developing the next version of design system components will require special attention to continuing the progressive enhancement approach.

This is not an exhaustive list, and we expect many more big and small questions to arise over the course of developing these components.
