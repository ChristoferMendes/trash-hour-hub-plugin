import { TrashHourElement } from "./custom-card";

customElements.define("trash-hour", TrashHourElement);

declare global {
  interface Window {
    customCards: {
      name: string;
    }[];
    customPages: {
      elementName: string;
      icon: string;
      iconLabel: string;
      path: string;
    }[];
    sideBardWidth: string;
  }
}

window.customPages.push({
  elementName: "trash-hour",
  icon: "Trash",
  path: "/trash-hour",
  iconLabel: "Trash Hour",
});
