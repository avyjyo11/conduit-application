import { LitElement, html } from "lit-element";
import "../components/navigation.component.js";

class ArticlePage extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <style>
        .form-container {
          width: 50%;
          margin: 0 auto;
        }
        .right {
          float: right;
        }
      </style>

      <div class="container">
        <navigation-tag></navigation-tag>
        <form class="form-container">
          <input-tag placeholder="Article Title"></input-tag>
          <input-tag placeholder="What is you article about?"></input-tag>
          <input-tag placeholder="Write you article(in markdown)"></input-tag>
          <btn-tag displayName="Publish Article" class="right"></btn-tag>
        </form>
      </div>
    `;
  }
}
window.customElements.define("article-page", ArticlePage);
