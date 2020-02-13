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
          position: relative;
          width: 100%;
        }
        .user-image-holder {
          width: 50px;
          height: 50px;
          margin: 5px auto;
        }
        .article-left {
          width: 5%;
          padding-right: 10px;
        }
        .article-right {
          padding: 4px 0px;
          width: 95%;
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

        .heart-toggler {
          border: 1px solid var(--theme-color);
          color: var(--theme-color);
          position: absolute;
          z-index: 10;
          padding: 5px 10px;
          top: 0;
          right: 0;
        }

        .heart-toggler:hover {
          background-color: var(--theme-color);
          color: #fff;
        }

        .heart-toggler:hover .heart-counter {
          color: #fff;
        }

        .heart-toggler fa-icon {
          margin: 0;
          padding: 0;
        }

        .heart-counter {
          cursor: pointer;
          margin: 0;
          padding: 0;
          display: inline-block;
          font-size: 1.1em;
          z-index: 20;
          color: var(--theme-color);
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
