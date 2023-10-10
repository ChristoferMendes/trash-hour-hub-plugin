import { createRoot } from "react-dom/client";
import { App } from "./App";
import tailwindcss from "./index.css?inline";
import react_awesome_button_css from "react-awesome-button/dist/styles.css?inline";
import sonner_css from "./utils/adoptedStyles/sonner.css?inline";

export class TrashHourElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const reactRoot = document.createElement("div");

    shadowRoot.appendChild(reactRoot);

    shadowRoot.adoptedStyleSheets.push(
      this._injectStyle(tailwindcss),
      this._injectStyle(react_awesome_button_css),
      this._injectStyle(sonner_css)
    );

    const root = createRoot(reactRoot);

    root.render(<App />);
  }

  _injectStyle(css: string) {
    const cssStyleSheet = new CSSStyleSheet({});

    cssStyleSheet.replaceSync(css);

    return cssStyleSheet;
  }
}
