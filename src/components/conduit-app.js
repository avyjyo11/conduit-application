import { LitElement, html } from "lit-element";
import '../pages/article-page.js';

class ConduitApp extends LitElement {
  render() {
    return html`
      <article-page></article-page>
    `;
  }
}

customElements.define("conduit-app", ConduitApp);
