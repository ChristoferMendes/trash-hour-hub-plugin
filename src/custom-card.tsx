import { createRoot } from "react-dom/client";
import { App } from "./App";
import tailwindcss from "./index.css?inline";
import react_awesome_button_css from "react-awesome-button/dist/styles.css?inline";

export class TrashHourElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const reactRoot = document.createElement("div");

    shadowRoot.appendChild(reactRoot);

    const tailwindStyleSheet = new CSSStyleSheet({});

    tailwindStyleSheet.replaceSync(tailwindcss);

    const reactAwesomeButtonStyleSheet = new CSSStyleSheet({});

    reactAwesomeButtonStyleSheet.replaceSync(react_awesome_button_css);

    shadowRoot.adoptedStyleSheets.push(reactAwesomeButtonStyleSheet);
    shadowRoot.adoptedStyleSheets.push(tailwindStyleSheet);

    const root = createRoot(reactRoot);

    root.render(<App />);
  }
}
