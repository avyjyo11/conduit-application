import { LitElement, html, css } from "lit-element";
import "../components/navigation.component";
import "../components/button.component";
import "../components/texrarea.component";
import "../components/navigation.component";
import "../components/userInfo.component";
import { get } from "../services/api.services";

class ArticleView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.slug = this.location.params.slug;
    get("/articles/" + this.slug).then(data => {
      this.data = data;
      this.dataLoaded = true;
      this.fetchUser();
      this.fetchComment();
    });
  }
  constructor() {
    super();
    this.dataLoaded = false;
    this.data = "";
    this.comment = "";
    this.username = "";
    this.displayComments = [];
    this.userImage = "";
    this.isToken = window.localStorage.getItem("token") ? true : false;

    this.handleSubmit = () => {
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
          console.log("After Comment added", data);
          this.fetchComment(); //redirect to the article page
        })
        .catch(error => console.error("Error", error));
    };

    this.handleChange = e => {
      this[e.target.name] = e.target.value;
    };
  }

  static get styles() {
    return css`
      * {
        margin: 0px;
        padding: 0px;
      }
      .article-info-container {
        background-color: #333333;
      }
      .article-title-container {
        color: white;
        padding: 10px;
        width: 80%;
        margin: 0 auto;
      }
      .belowComment-section {
        padding: 10px;
        display: flex;
      }
      .article-body-container {
        border-bottom: 1px solid grey;
        width: 80%;
        margin: 0 auto;
        padding: 10px 0 50px 0;
      }
      .comment-section {
        width: 70%;
        margin: 10px auto;
        border-radius: 5px;
        background-color: #f5f5f5;
        border: 1px solid #888888bb;
      }
      .cmt-author {
        vertical-align: middle;
        padding-top: 8px;
        padding-left: 6px;
        font-size: 12px;
      }
      .avatar {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .btn-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
      }
    `;
  }

  static get properties() {
    return {
      dataLoaded: { type: Boolean },
      displayComments: { type: Array },
      userImage: { type: String }
    };
  }

  fetchComment() {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.slug}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "appication/json"
        }
      }
    )
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        this.displayComments = data.comments;
        console.log("comments", this.displayComments); //redirect to the article page
      })
      .catch(error => console.error("Error", error));
  }

  fetchUser() {
    fetch(`https://conduit.productionready.io/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "appication/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        this.userImage = data.user.image;
        this.username = data.user.username;

        console.log("comments", data); //redirect to the article page
      })
      .catch(error => console.error("Error", error));
  }

  deleteSubmit(cmtid) {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.slug}/comments/${cmtid}`,
      {
        method: "DELETE",
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
        console.log(data);
        this.fetchComment(); //redirect to the article page
      })
      .catch(error => console.error("Error", error.json()));
  }

  render() {
    if (this.dataLoaded) {
      console.log(this.data);

      return html`
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

        ${this.isToken
          ? html`
              <div class="comment-section">
                <textarea-tag
                  placeholder="Write a comment..."
                  .setValue=${this.handleChange}
                  name="comment"
                >
                </textarea-tag>
                <div class="belowComment-section">
                  <img
                    src="${this.userImage ||
                      "https://www.w3schools.com/howto/img_avatar.png"}"
                    alt="Avatar"
                    class="avatar"
                  />
                  <div class="btn-wrapper">
                    <btn-tag
                      buttonName="post comment"
                      .handleClick=${this.handleSubmit}
                    >
                    </btn-tag>
                  </div>
                </div>
              </div>
            `
          : null}
        ${this.displayComments.length === 0
          ? null
          : this.displayComments.map(
              cmt => html`
                <div class="comment-section">
                  <textarea-tag
                    value=${cmt.body}
                    ?disabled=${true}
                    .setValue=${this.handleChange}
                    name="comment"
                  >
                  </textarea-tag>
                  <div class="belowComment-section">
                    <img
                      src=${cmt.author.image ||
                        "https://www.w3schools.com/howto/img_avatar.png"}
                      alt="Avatar"
                      class="avatar"
                    />
                    <span class="cmt-author">${cmt.author.username}</span>
                    ${this.username === cmt.author.username
                      ? html`
                          <div class="btn-wrapper">
                            <btn-tag
                              className="btn-logout"
                              buttonName="Delete"
                              .handleClick=${this.deleteSubmit.bind(
                                this,
                                cmt.id
                              )}
                            >
                            </btn-tag>
                          </div>
                        `
                      : null}
                  </div>
                </div>
              `
            )}
      `;
    } else {
      return html`
        <h1>Loading..</h1>
      `;
    }
  }
}
window.customElements.define("view-article", ArticleView);
