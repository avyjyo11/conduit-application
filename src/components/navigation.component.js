import { html, LitElement, css } from "lit-element";

class Navigation extends LitElement {
  static get styles() {
    return css`
      .navigation-bar {
        width: calc(100% - 20px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
      }

      nav ul li {
        display: inline-block;
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="navigation-bar">
        <div class="logo-holder">LOGO</div>
        <nav>
          <ul>
            <li><a href="/">Home</a> </li>
            <li><a href="/signin">Sign in</a> </li>
            <li><a href="/signup">Sign up</a> </li>
          </ul>
        </nav>
      </div>
    `;
  }
}
window.customElements.define("navigation-tag", Navigation);
