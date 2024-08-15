# Getting Started

First, install the package from NPM (note for monthly call viewers: the package isn't published yet.)

```sh
npm install @uswds/web-components
```

Once you have the package installed, you can use the components in your project. If you import the entire package, all of the components will be available as exports.

```html
<script type="module">
    import '@uswds/web-components';
</script>

<usa-banner></usa-banner>
<usa-link href="https://designsystem.digital.gov">It's dangerous to go alone. Here, take this.</usa-link>
```

However, if you import components individually, your build tool may be able to help you ship less code over the wire:

```html
<script type="module">
    import { UsaLink } from '@uswds/web-components';
</script>

<usa-link href="https://designsystem.digital.gov">It's dangerous to go alone. Here, take this.</usa-link>
```
