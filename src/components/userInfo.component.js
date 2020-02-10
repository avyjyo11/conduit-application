import { html, LitElement, css } from "lit-element";
import { cssStyles } from "../styles/cssStyles";
class UserInfo extends LitElement {
  constructor() {
    super();
    this.username = "";
    this.postDate = new Date().toString();
    this.userImg = "http://pngimg.com/uploads/smiley/smiley_PNG36233.png";
  }

  static get properties() {
    return {
      username: String,
      postDate: String,
      userImg: String
    };
  }

  static get styles() {
    return [
      cssStyles,
      css`
        img {
          width: 100%;
          border-radius: 50%;
        }
        .article-holder {
          display: flex;
          width: 500px;
        }
        .user-image-holder {
          width: 40px;
          height: 40px;
          margin: 0 auto;
        }
        .article-left {
          width: 8%;
          padding-right: 10px;
        }
        .article-right {
          padding: 4px 0px;
          width: 92%;
        }
        .username {
          display: block;
          font-size: 1em;
          color: var(--theme-color);
        }
        .post-date {
          display: block;
          color: #a5a5a5;
          font-size: 0.8em;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="article-holder">
        <div class="article-left">
          <div class="user-image-holder">
            <img src=${this.userImg} />
          </div>
        </div>
        <div class="article-right">
          <span class="username">${this.username}</span>
          <span class="post-date">${this.postDate}</span>
        </div>
      </div>
    `;
  }
}
window.customElements.define("user-tag", UserInfo);
