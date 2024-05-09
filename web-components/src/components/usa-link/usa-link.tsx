import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usa-link',
  styleUrl: 'usa-link.scss',
  shadow: true,
})
export class UsaLink {
  @Prop() href: string;

  render() {
    return (
      <a class="usa-link" href={this.href}>
        <slot></slot>
      </a>
    );
  }
}
