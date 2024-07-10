import "./index";
import { html, nothing } from "lit";
import readme from "./_readme.mdx";

export default {
  title: "Components/Accordion",
  component: "usa-accordion",
  parameters: {
    docs: {
      page: readme,
    }
  },
  argTypes: {
    multiselect: { name: "Allow multi-select" },
    bordered: { name: "Add border to panels" },
    item1Summary: { name: "Item 1 - Summary text" },
    item1Content: { name: "Item 1 - Panel content" },
    item1Open: { name: "Item 1 - Open panel on load" },
    item2Summary: { name: "Item 2 - Summary text" },
    item2Content: { name: "Item 2 - Panel content" },
    item2Open: { name: "Item 2 - Open panel on load" },
    item3Summary: { name: "Item 3 - Summary text" },
    item3Content: { name: "Item 3 - Panel content" },
    item3Open: { name: "Item 3 - Open panel on load" },
    CSSVarSummaryBackgroundColor: { name: "--usa-theme-details-summary-background-color" },
    CSSVarPanelBackgroundColor: { name: "--usa-theme-details-panel-background-color" },
    CSSVarBorderColor: { name: "--usa-theme-details-border-color" },
    CSSVarBorderWidth: { name: "--usa-theme-details-border-width" },
  },
  args: {
    multiselect: false,
    bordered: false,
    item1Summary: "First Amendment",
    item1Content: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
    item1Open: false,
    item2Summary: "Second Amendment",
    item2Content: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
    item2Open: false,
    item3Summary: "Third Amendment",
    item3Content: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
    item3Open: false,
    CSSVarPanelBackgroundColor: "",
    CSSVarSummaryBackgroundColor: "",
    CSSVarBorderColor: "",
    CSSVarBorderWidth: ""
  },
  render: ({
    multiselect,
    bordered,
    item1Summary,
    item1Content,
    item1Open,
    item2Show,
    item2Summary,
    item2Content,
    item2Open,
    item3Show,
    item3Summary,
    item3Content,
    item3Open,
    CSSVarPanelBackgroundColor,
    CSSVarSummaryBackgroundColor,
    CSSVarBorderColor,
    CSSVarBorderWidth,
  }) => html`
    <style>
      usa-accordion {
        ${CSSVarBorderColor ? `--usa-theme-details-border-color: ${CSSVarBorderColor};`: null}
        ${CSSVarBorderWidth ? `--usa-theme-details-border-width: ${CSSVarBorderWidth};`: null}
        ${CSSVarPanelBackgroundColor ? `--usa-theme-details-panel-background-color: ${CSSVarPanelBackgroundColor};`: null}
        ${CSSVarSummaryBackgroundColor ? `--usa-theme-details-summary-background-color: ${CSSVarSummaryBackgroundColor};`: null};
      }
    </style>
    <usa-accordion class="test" bordered="${bordered || nothing}" multiselect="${multiselect || nothing}">
      <details open=${item1Open || nothing}>
        <summary>${item1Summary}</summary>
        <div slot="accordion-body">${item1Content}</div>
      </details>
      <details open=${item2Open || nothing}>
        <summary>${item2Summary}</summary>
        <div slot="accordion-body">${item2Content}</div>
      </details>
      <details open=${item3Open || nothing}>
        <summary>${item3Summary}</summary>
        <div slot="accordion-body">${item3Content}</div>
      </details>
    </usa-accordion>
  `,
};

export const Default = {};

export const OpenPanel = {
  args: {
    item1Open: true,
  },
}

export const bordered = {
  args: {
    bordered: true
  }
};

export const MultiSelect = {
  args: {
    multiselect: true,
    item1Open: true,
  },
}
