# Component Release Lifecycle

This document describes the criteria we will use to determine each component's production readiness. 

## Alpha 🔴

* **Summary:** Experimental code - likely to undergo frequent revisions. Not intended for use in projects. 
* **Intended audience:** Internal use only
* **Requirements:**
  * **Accessibility**	
      * Component passes automated accessibility tests (currently in Storybook)
  * **Light DOM**
    * Proposed light DOM follows declared uswds convention
  * **Component matches USWDS 3**
    * Visuals match USWDS 3
    * Interaction matches USWDS 3
    * Accessibility matches USWDS 3
    * Theme settings match USWDS 3
  * **Storybook**
    * Component is integrated into Storybook
    * Component has basic controls that allow you customize content and variants
  * **Documentation**
    * Storybook autodocs available for each component 
  * **Default component text**
    * Provide default component text in both English and Spanish
    * Provide ability for users to add custom translation
  * **Theming**
    * Styles may use existing Sass/SCSS styles
    * Component has CSS parts added to each element in the shadow DOM
    * Component has CSS custom properties that match current uswds settings
  * **Unit tests**
    * Basic unit tests available (core functionality, smoke tests).
  * **Code style**
    * Meets all defined linting and code style standards

## Beta I (Early beta) 🟠

* **Summary:** Early release. Component code is moderately stable. Not intended for use in projects.
* **Intended audience:** Testers working directly with the design system team
* **Requirements:**
  * **Accessibility**
    * Passes all items in the component’s accessibility checklist.
  * **Usability**
    * Available for user testing?
  * **Storybook**
    * Full controls available for variants, content, and theming 
    * Controls follow a consistent standard across components
    * Controls are standardized and intuitive
    * Args match defined standard
  * **Documentation**
    * Enhanced documentation available in Storybook. This should document whichever of the following are available in the component: 
      * Component-specific CSS custom properties
      * Parts
      * Props and attributes
      * Slots and/or expected child elements
      * JS methods/functions
    * The main implementation file for the component includes a JSDoc comment conforming to custom-element-manifest syntax 
  * **Default component text**
    * Provide default component text in both English and Spanish
    * Provide ability for users to add custom translation
  * **Theming**
    * Integrates user-added classes
    * Component has the expected CSS custom properties 
    * If there is remaining Sass/SCSS, all theming is done with vanilla CSS (CSS variables and/or parts)
  * **Unit tests**
    * Full suite of unit tests 
  * **Internationalization/Localization**
    * If component contains strings, they are translated to supported languages using Lit’s msg functionality

## Beta II (Mature beta) 🟡

* **Summary:** Can be used in projects, but might experience some breaking changes
* **Intended audience:** Early adopters
* **Requirements**:
  * **Usability**
    * No reported issues during usability testing
  * **Framework Interoperability**. 
    * The component should have undergone some testing to ensure it can be used as expected in applications built with other frameworks. If the component uses custom events, those events should be able to pass upward to the framework. Additionally, framework components should be able to pass data to web components as props/attributes.
  * **Internationalization/Localization**
    * Component supports user-supplied language strings
  * **Performance/Resilience**
    * The component needs to have some way of mitigating or preventing Flash of Undefined Custom Element. This should take into account layout shift as well as any accessibility implications.

## Production 🟢

* **Summary:** Stable - Safe for production use in projects
* **Intended audience:** General public use
* **Requirements**:
  * **Accessibility**:
    * Passes all items in the component’s accessibility checklist
    * Components have been fully tested, including with assistive technology users
* **Usability**:
  * Components have undergone real end-user testing
  * Components have been tested for developer usability
* **Documentation**: Documentation available on [designsystem.digital.gov](https://designsystem.digital.gov)