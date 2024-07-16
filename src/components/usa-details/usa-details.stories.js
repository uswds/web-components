import "./index";
import { html, nothing } from "lit";
import readme from "./_readme.mdx";

export default {
  title: "Components/Details",
  component: "usa-details",
  parameters: {
    docs: {
      page: readme,
    }
  },
  argTypes: {
    groupName: { name: "Details group name" },
    bordered: { name: "Add border to panels" },
    item1Summary: {name: "Item 1 - Summary text"},
    item1Content: { name: "Item 1 - Panel content"},
    item1Open: { name: "Item 1 - Open panel on load"},
    item2Show: { name: "Include item 2 in preview"},
    item2Summary: {name: "Item 2 - Summary text", if: { arg: 'item2Show' } },
    item2Content: { name: "Item 2 - Panel content", if: { arg: 'item2Show' } },
    item2Open: { name: "Item 2 - Open panel on load", if: { arg: 'item2Show' } },
    item3Show: { name: "Include item 3 in preview"},
    item3Summary: {name: "Item 3 - Summary text", if: { arg: 'item3Show' } },
    item3Content: { name: "Item 3 - Panel content", if: { arg: 'item3Show' } },
    item3Open: { name: "Item 3 - Open panel on load", if: { arg: 'item3Show' } },
    CSSVarSummaryBackgroundColor: { name: "--usa-theme-details-summary-background-color" },
    CSSVarPanelBackgroundColor: { name: "--usa-theme-details-panel-background-color" },
    CSSVarBorderColor: { name: "--usa-theme-details-border-color" },
    CSSVarBorderWidth: { name: "--usa-theme-details-border-width" },
  },
  args: {
    groupName: "",
    bordered: false,
    item1Summary: "First Amendment",
    item1Content: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
    item1Open: false,
    item2Show: false,
    item2Summary: "Second Amendment",
    item2Content: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
    item2Open: false,
    item3Show: false,
    item3Summary: "Third Amendment",
    item3Content: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
    item3Open: false,
    CSSVarPanelBackgroundColor: "",
    CSSVarSummaryBackgroundColor: "",
    CSSVarBorderColor: "",
    CSSVarBorderWidth: ""
  },
  render: ({
    groupName,
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
      usa-details::part(summary) {
        ${CSSVarSummaryBackgroundColor ? `background-color: ${CSSVarSummaryBackgroundColor};`: null};
      }
      usa-details::part(content) {
        ${CSSVarPanelBackgroundColor ? `background-color: ${CSSVarPanelBackgroundColor};`: null}
      }
      usa-details::part(wrapper) {
        ${CSSVarBorderColor ? `border-color: ${CSSVarBorderColor};`: null}
        ${CSSVarBorderWidth ? `border-width: ${CSSVarBorderWidth};`: null}
      }
    </style>
    <usa-details bordered="${bordered || nothing}">
      <details open=${item1Open || nothing} name=${groupName || nothing}>
        <summary>${item1Summary}</summary>
        <div slot="details-body">${item1Content}</div>
      </details>
      ${item2Show ? html`
      <details open=${item2Open || nothing} name=${groupName || nothing}>
        <summary>${item2Summary}</summary>
        <div slot="details-body">${item2Content}</div>
      </details>
      `: null}
      ${item3Show ? html`
      <details open=${item3Open || nothing} name=${groupName || nothing}>
        <summary>${item3Summary}</summary>
        <div slot="details-body">${item3Content}</div>
      </details>
      `: null}
    </usa-details>
  `,
};

export const Default = {};

export const bordered = {
  args: {
    bordered: true
  }
};

export const Open = {
  args: {
    item1Open: true,
  },
}

export const GroupSingleSelect = {
  args: {
    groupName: "example-group-name",
    item1Open: true,
    item2Show: true,
    item3Show: true,
  },
}

export const GroupMultiSelect = {
  args: {
    item1Open: true,
    item2Show: true,
    item3Show: true,
  },
}
