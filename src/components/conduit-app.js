import { LitElement, html } from "lit-element";
import '../pages/article-page.js';
import '../components/input.component.js';
import '../components/button.component.js'

class ConduitApp extends LitElement {
  render() {
    return html`
    <div>
      <article-page></article-page>
      <div>
        <input-tag placeholder="Article Title"></input-tag>
        <input-tag placeholder="What is you article about?"></input-tag>
        <input-tag placeholder="Write you article(in markdown)"></input-tag>
        <btn-tag displayName="Publish Article"></btn-tag>
      </div>
    </div>
    `;
  }
}

customElements.define("conduit-app", ConduitApp);
