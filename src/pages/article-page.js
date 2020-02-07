import { LitElement, html } from "lit-element";
import "../components/navigation.component.js";

class ArticlePage extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <navigation-tag></navigation-tag>
    `;
  }
}
window.customElements.define("article-page", ArticlePage);
