import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'usa-link',
  styleUrl: 'usa-link.css',
  shadow: true,
})
export class UsaLink {
  @Prop() href: string;
  @Prop() text: string;

  render() {
    return (
      <a class="usa-link" href={this.href}>
        {this.text}
      </a>
    );
  }
}
