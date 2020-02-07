import { html, LitElement, css } from "lit-element";

class ArticlePreview extends LitElement {
  constructor() {
    super();
    this.articleName = "";
    this.articleDesc = "";
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      .article-preview-container {
        padding: 10px;
      }
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 15px;
        color: grey;
      }
    `;
  }

  render() {
    return html`
      <div class="article-preview-container">
        <div class="article-title">
          <span class="title">${this.name}</span>
        </div>
        <div class="article-description">
          <span class="description">${this.description}</span>
        </div>
      </div>
    `;
  }
}
window.customElements.define("article-preview-tag", ArticlePreview);
