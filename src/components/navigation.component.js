import { html, LitElement, css } from "lit-element";
import { cssStyles } from "../styles/cssStyles";
class Navigation extends LitElement {
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

        .logo-holder a {
          text-decoration: none;
          color: var(--theme-color);
          font-size: 1.4em;
          font-weight: bold;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="navigation-bar">
          <div class="logo-holder"><a href="/">conduit</a></div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/sign-in">Sign in</a></li>
              <li><a href="/sign-up">Sign up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}
window.customElements.define("navigation-tag", Navigation);
