import { LitElement, html, css } from "lit-element";
import "../components/navigation.component";


class HomePage extends LitElement {
  static get styles() {
    return css`
      .jumbotron {
        padding: 30px;
        background-color: #25c748;
        color: #fff;
      }

      .center {
        text-align: center;
      }

      .jumbotron h2 {
        font-size: 3em;
        font-weight: bold;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
      }

      .jumbotron p {
        font-size: 1.4em;
        font-weight: 200;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
      }
    `;
  }

  render() {
    const navbar = html`
      <navigation-tag></navigation-tag>
    `;

    const banner = html`
      <div class="jumbotron center">
        <h2>conduit</h2>
        <p>A place to share your knowledge</p>
        
      </div>
      
    `;

    return html`
      ${navbar} ${banner}
    `;
  }
}

window.customElements.define("home-page", HomePage);
