import { html, LitElement, css } from "lit-element";
import { cssStyles } from "../styles/cssStyles";
import { getwithauth } from "../services/api.services";
import {
  SETTING,
  SIGN_IN,
  SIGN_UP,
  NEW_POST,
  PROFILE,
  HOME
} from "../constants/routes.config.js";

import { DEFAULT_IMG, DEFAULT_NAME } from "../constants/defaults.config";
class Navigation extends LitElement {
  constructor() {
    super();
    this.username = DEFAULT_NAME;
    this.userImage = DEFAULT_IMG;
    this.isToken = window.localStorage.getItem("token") ? true : false;
  }

  static get properties() {
    return {
      isToken: { type: Boolean },
      username: { type: String }
    };
  }

  static get styles() {
    return [
      cssStyles,
      css`
        .navigation-bar {
          width: calc(100% - 20px);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav ul li {
          display: inline-block;
          padding: 10px;
        }

        nav a {
          text-decoration: none;
          color: #777;
          padding-left: 2px;
          padding-right: 2px;
        }
        .active {
          font-weight: bold;
        }
        nav a:hover {
          font-weight: bold;
          padding: 0;
        }

        .avatar {
          vertical-align: middle;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .logo-holder a {
          text-decoration: none;
          color: var(--theme-color);
          font-size: 1.4em;
          font-weight: bold;
        }
      `
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.isToken) {
      let url = "/user";
      getwithauth(url)
        .then(data => {
          this.username = data.user.username;
          this.userImage = data.user.image;
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="navigation-bar">
          <div class="logo-holder"><a href="/">conduit</a></div>
          <nav>
            <ul>
              ${!this.isToken
                ? html`
                    <li><a class="active" href="${HOME}">Home</a></li>
                    <li><a href="${SIGN_IN}">Sign in</a></li>
                    <li><a href="${SIGN_UP}">Sign up</a></li>
                  `
                : html`
                    <li><a href="${HOME}">Home</a></li>
                    <li><a href="${NEW_POST}">New Post</a></li>
                    <li><a href="${SETTING}">Setting</a></li>
                    <li>
                      <a href="${PROFILE}">
                        <img
                          src="${this.userImage || DEFAULT_IMG}"
                          alt="Avatar"
                          class="avatar"
                        />
                        ${this.username}</a
                      >
                    </li>
                  `}
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}

customElements.define("navigation-tag", Navigation);
