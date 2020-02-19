import { LitElement, html, css } from "lit-element";
import "../components/navigation.component.js";
import "../components/button.component.js";
import "../components/input.component.js";
import "../components/texrarea.component.js";
import { Router } from "@vaadin/router";
import { post } from "../services/api.services";
import { VIEW_ARTICLE } from "../constants/routes.config.js";

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

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      body: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.body = "";
    this.handleChange = e => {
      this[e.target.name] = e.target.value;
    };
    this.handleSubmit = e => {
      const token = localStorage.getItem("token");
      const data = {
        article: {
          title: this.title,
          description: this.description,
          body: this.body
        }
      };

      post("/articles", data)
        .then(data => {
          Router.go(`${VIEW_ARTICLE}/${data.article.slug}`);
        })
        .catch(error => console.error("Error", error));
    };
  }

  render() {
    return html`
      <div class="container">
        <form class="form-container" action="post">
          <input-tag
            placeholder="Article Title"
            .setValue=${this.handleChange}
            name="title"
          ></input-tag>
          <input-tag
            placeholder="What is you article about?"
            .setValue=${this.handleChange}
            name="description"
          ></input-tag>
          <textarea-tag
            .setValue=${this.handleChange}
            name="body"
            placeholder="Write your article (in markdown)"
          ></textarea-tag>
          <input-tag
            placeholder="Enter tags"
            .setValue=${this.handleChange}
            name="tags"
          ></input-tag>
          <btn-tag
            buttonName="Publish Article"
            class="right"
            .handleClick=${this.handleSubmit}
          ></btn-tag>
        </form>
      </div>
    `;
  }
}
window.customElements.define("article-page", ArticlePage);
