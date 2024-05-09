import { newE2EPage } from '@stencil/core/testing';

describe('usa-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<usa-link></usa-link>');
    const element = await page.find('usa-link');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<usa-link></usa-link>');
    const component = await page.find('usa-link');
    const element = await page.find('usa-link >>> a');
    expect(element.textContent).toEqual(``);

    component.setProperty('text', 'Hello, World');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World`);

    component.setProperty('href', 'https://designsystem.digital.gov');
    await page.waitForChanges();
    expect(element.getAttribute('href')).toEqual(`https://designsystem.digital.gov`);
  });
});
