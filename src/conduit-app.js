import { LitElement, html, css } from "lit-element";
import "./pages/home-page";

class ConduitApp extends LitElement {
  render() {
    const homepage = html`
      <home-page></home-page>
    `;

    return html`
      ${homepage}
    `;
  }
}

window.customElements.define("conduit-app", ConduitApp);
