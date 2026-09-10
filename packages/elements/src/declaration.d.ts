/// <reference types="vite/client" />

import type { CSSResultGroup } from "lit";

// Asset imports
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.scss?inline" {
  const content: string;
  export default content;
}

declare module "*.svg?inline" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

// USWDS specific module declarations
declare module "@uswds/uswds/img/us_flag_small.png" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/icon-dot-gov.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/icon-https.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/usa-icons/close.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/usa-icons/expand_more.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/usa-icons/expand_less.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/img/usa-icons/lock.svg" {
  const content: string;
  export default content;
}

declare module "@uswds/uswds/scss/stylesheets/packages/_usa-banner.scss?inline" {
  const content: string;
  export default content;
}
