import { LitElement, html } from "lit-element";
import '../pages/article-page.js';
import '../components/input.component.js';
import '../components/button.component.js'

class ConduitApp extends LitElement {
  render() {
    return html`
    <!-- this page is for article-upload -->
    <article-page></article-page>
    `;
  }
}

customElements.define("conduit-app", ConduitApp);
