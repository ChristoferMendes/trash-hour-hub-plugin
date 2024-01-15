import { TrashHourElement } from "./custom-card";
import { icons } from "lucide-react";

customElements.define("trash-hour", TrashHourElement);


export type IconName = keyof typeof icons;

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
  icon: <IconName>'Trash',
  iconLabel: "Trash Hour",
  path: "/trash-hour",
});
