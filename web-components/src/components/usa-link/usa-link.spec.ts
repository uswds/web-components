import { newSpecPage } from '@stencil/core/testing';
import { UsaLink } from './usa-link';

describe('usa-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UsaLink],
      html: '<usa-link></usa-link>',
    });
    expect(root).toEqualHtml(`
      <usa-link>
        <mock:shadow-root>
          <a class="usa-link">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </usa-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UsaLink],
      html: `<usa-link href="https://designsystem.digital.gov">It's dangerous to go alone, take this</usa-link>`,
    });
    expect(root).toEqualHtml(`
      <usa-link href="https://designsystem.digital.gov">
        <mock:shadow-root>
          <a class="usa-link" href="https://designsystem.digital.gov">
            <slot></slot>
          </a>
        </mock:shadow-root>
        It's dangerous to go alone, take this
      </usa-link>
    `);
  });
});
