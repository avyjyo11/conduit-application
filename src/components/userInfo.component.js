import { html, LitElement, css } from "lit-element";
class UserInfo extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      img {
        width: 100%;
        border-radius: 50%;
      }
      .article-holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 200px;
      }
      .user-image-holder {
        width: 50px;
        margin: 0 auto;
      }
      .article-left {
        width: 30%;
      }
      .article-right {
        width: 70%;
      }
      .username {
        display: block;
        font-size: 15px;
        color: green;
      }
      .post-date {
        display: block;
        color: grey;
        font-size: 15px;
      }
    `;
  }

  render() {
    return html`
      <div class="article-holder">
        <div class="article-left">
          <div class="user-image-holder">
            <img src="../images/userImage.jpeg" />
          </div>
        </div>
        <div class="article-right">
          <span class="username">Roshan shrestha</span>
          <span class="post-date">Tue Feb 06 2020 </span>
        </div>
      </div>
    `;
  }
}
window.customElements.define("user-tag", UserInfo);
