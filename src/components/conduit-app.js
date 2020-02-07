
import { LitElement, html } from "lit-element";
import '../pages/article-page.js';
import '../components/input.component.js';
import '../components/button.component.js';
import '../components/tab.component.js';
import '../pages/signin-page.js';

class ConduitApp extends LitElement {
  render() {
    return html`
    <tab-tag></tab-tag>
    <!-- this page is for article-upload -->
    <article-page></article-page>

    <signin-tag></signin-tag>
    `;
  }
}

customElements.define("conduit-app", ConduitApp);

