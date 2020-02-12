import { html, LitElement, css } from "lit-element";
import { cssStyles } from "../styles/cssStyles";
class Navigation extends LitElement {
  constructor() {
    super();
    this.username = "username";
    this.userImage=null;
    this.isToken =
      window.localStorage.getItem("token") === null ||
      window.localStorage.getItem("token") === ""
        ? false
        : true;
  }

  static get properties() {
    return {
      isToken: { type: Boolean },
      username: String
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
      fetch(`https://conduit.productionready.io/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${window.localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.username = data.user.username;
          this.userImage = data.user.image
        })
        .catch(err => console.log(err));
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/sign-in">Sign in</a></li>
                    <li><a href="/sign-up">Sign up</a></li>
                  `
                : html`
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-post">New Post</a></li>
                    <li><a href="/setting">Setting</a></li>
                   
                    <li><a href="/profile"> <img src= ${this.userImage||"https://www.w3schools.com/howto/img_avatar.png"} alt="Avatar" class="avatar"> ${this.username}</a></li>
                  `}
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}
window.customElements.define("navigation-tag", Navigation);
