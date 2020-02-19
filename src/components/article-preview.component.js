import { html, LitElement, css } from "lit-element";

class ArticlePreview extends LitElement {
  constructor() {
    super();
    this.title = "";
    this.description = "";
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      .article-preview-container {
        padding: 0px;
      }
      .article-preview-container h3 {
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
        margin-top: 5px;
        margin-bottom: 8px;
      }
      .article-preview-container p {
        font-size: 1em;
        color: #9c9c9c;
        margin: 0;
        margin-bottom: 10px;
      }

      .article-preview-container button {
        font-size: 0.7em;
        color: #9c9c9c;
        border: none;
        background-color: #fff;
        padding: 0px;
        margin: 0;
        margin-bottom: 20px;
      }

      .article-preview-container hr {
        margin: 0;
        padding: 0;
        background-color: #adadad;
      }
    `;
  }

  render() {
    return html`
      <div class="article-preview-container">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <button>Read more...</button>
        <hr />
      </div>
    `;
  }
}
window.customElements.define("article-preview-tag", ArticlePreview);
