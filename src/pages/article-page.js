import { LitElement, html, css } from "lit-element";
import "../components/navigation.component.js";
import "../components/button.component.js";
import "../components/input.component.js";
import "../components/texrarea.component";

class ArticlePage extends LitElement {
  static get styles() {
    return css`
      .form-container {
        width: 80%;
        margin: 0 auto;
      }
      .right {
        float: right;
      }
    `;
  }

  constructor() {
    super();
  }
  render() {
    return html`
      <div class="container">
        <navigation-tag></navigation-tag>
        <form class="form-container">
          <input-tag placeholder="Article Title"></input-tag>
          <input-tag placeholder="What is you article about?"></input-tag>
          <textarea-tag></textarea-tag>
          <input-tag placeholder="Enter tags"></input-tag>
          <btn-tag buttonName="Publish Article" class="right"></btn-tag>
        </form>
      </div>
    `;
  }
}
window.customElements.define("article-page", ArticlePage);
