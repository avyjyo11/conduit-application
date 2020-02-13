import { LitElement, html, css } from "lit-element";
import "../components/navigation.component";
import "../components/button.component";
import "../components/texrarea.component";
import "../components/navigation.component";
import "../components/userInfo.component";
import { Router } from "@vaadin/router";

class ArticleView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.slug = this.location.params.slug;
    fetch(`https://conduit.productionready.io/api/articles/${this.slug}`)
      .then(response => response.json())
      .then(data => {
        console.log("data >> ", data);
        this.data = { ...data };
        this.dataLoaded = true;
        this.fetchComment();
      });
  }
  constructor() {
    super();
    this.slug = "";
    this.dataLoaded = false;
    this.data = {};
    this.comment = {};
    this.displayComment = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static get styles() {
    return css`
      .article-info-container {
        background-color: #333333;
      }
      .article-title-container {
        color: white;
        padding: 10px;
        width: 80%;
        margin: 0 auto;
      }
      .article-body-container {
        border-bottom: 1px solid grey;
        width: 80%;
        margin: 0 auto;
        padding: 10px 0 50px 0;
      }
      .comment-section {
        width: 50%;
        margin: 0 auto;
      }
      .right {
        float: right;
      }
    `;
  }

  static get properties() {
    return {
      dataLoaded: { type: Boolean }
    };
  }
  handleChange(e) {
    this[e.target.name] = e.target.value;
  }
  fetchComment() {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.slug}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "appication/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      }
    )
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        console.log("comment added");
        this.displayComment = data; //redirect to the article page
      })
      .catch(error => console.error("Error", error));
  }
  handleSubmit() {
    const commentData = {
      comment: {
        body: this.comment
      }
    };

    fetch(
      `https://conduit.productionready.io/api/articles/${this.slug}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "appication/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(commentData)
      }
    )
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        console.log("comment loaded");
        console.log(data); //redirect to the article page
      })
      .catch(error => console.error("Error", error));
  }

  render() {
    if (this.dataLoaded) {
      return html`
        <navigation-tag></navigation-tag>

        <div class="article-info-container">
          <div class="article-title-container">
            <h1>${this.data.article.title}</h1>
            <user-tag
              username=${this.data.article.author.username}
              postDate=${this.data.article.updatedAt}
              userImg=${this.data.article.author.image}
              hearts=${this.data.article.favoritesCount}
            ></user-tag>
          </div>
        </div>
        <div class="article-body-container">
          <p>${this.data.article.body}</p>
        </div>

        <div class="comment-section">
          <textarea-tag
            placeholder="Write a comment"
            .setValue=${this.handleChange}
            name="comment"
          ></textarea-tag>
          <btn-tag
            buttonName="post comment"
            class="right"
            .handleClick=${this.handleSubmit}
          ></btn-tag>
        </div>
      `;
    } else {
      return html`
        <h1>Loading..</h1>
      `;
    }
  }
}
window.customElements.define("view-article", ArticleView);
