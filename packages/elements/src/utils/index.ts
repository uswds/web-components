export const defineCustomElement = (
  tag: string,
  className: CustomElementConstructor,
) => {
  if (!customElements || customElements.get(tag)) return;

  customElements.define(tag, className);
};
