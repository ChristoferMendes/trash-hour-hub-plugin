import { createRoot } from "react-dom/client";
import { App } from "./App";
import tailwindcss from "./index.css?inline";
import react_awesome_button_css from "react-awesome-button/dist/styles.css?inline";
import { extractCss } from "goober";

export class TrashHourElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const reactRoot = document.createElement("div");
    const styleGoober = document.createElement("style");
    styleGoober.textContent = extractCss();
    styleGoober.setAttribute("id", "_goober");

    reactRoot.appendChild(styleGoober);

    shadowRoot.appendChild(reactRoot);

    const css = new CSSStyleSheet({});

    css.replaceSync(tailwindcss);
    css.replaceSync(react_awesome_button_css);

    shadowRoot.adoptedStyleSheets.push(css);

    const root = createRoot(reactRoot);

    root.render(<App />);
  }
}
