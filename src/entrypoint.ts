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
      sidebar?: {
        icon: string;
        iconLabel: string;
      };
      path: string;
      elementName: string;
      metaData?: {
        version: string;
        displayName?: string;
      };
    }[];
    sideBardWidth: string;
  }
}

window.customPages.push({
  elementName: "trash-hour",
  path: "/trash-hour",
  sidebar: {
    icon: "Trash",
    iconLabel: "Trash Hour",
  },
  metaData: {
    version: "1.0.0",
    displayName: "Trash Hour",
  }
});
