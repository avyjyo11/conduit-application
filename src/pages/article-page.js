import { LitElement, html, css } from "lit-element";
import "../components/navigation.component.js";
import "../components/button.component.js";
import "../components/input.component.js";
import "../components/texrarea.component.js";
import { Router } from "@vaadin/router";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  insertData() {}

  /**
   *
   *this function is called when the user press the Publish Article Button,
   handleSubmit handle the fetch, and routing
   * @memberof ArticlePage
   */
  handleSubmit() {
    const token = localStorage.getItem("token");
    const data = {
      article: {
        title: this.title,
        description: this.description,
        body: this.body
      }
    };
    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "appication/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        Router.go(`/view-article/${data.article.slug}`); //redirect to the article page
      })
      .catch(error => console.error("Error", error));
  }

  /**
   *
   *this function is called everytime when input value is changed
   * @param {*} e event
   * @memberof ArticlePage
   */
  handleChange(e) {
    this[e.target.name] = e.target.value;
  }
  render() {
    return html`
      <div class="container">
        <navigation-tag></navigation-tag>
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
