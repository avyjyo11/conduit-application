import { html, css, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signin.component";
import { cssStyles } from "../styles/cssStyles";

class PageNotFoundPage extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [
      cssStyles,
      css`
        * {
          margin: 0px;
          padding: 0px;
        }

        .jumbotron {
          padding: 30px;
          background-color: var(--theme-color);
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

        #pagenotfound {
          padding-top: 100px;
          color: #373a3c;
          font-size: 40px;
          margin-bottom: 8px;
        }

        p {
          text-align: center;
        }

        #wrapper {
          margin: 0 auto;
          width: 30%;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="jumbotron center">
        <h2>conduit</h2>
        <p>A place to share your knowledge</p>
      </div>
      <div id="wrapper">
        <p id="pagenotfound">Page not found</p>
      </div>
    `;
  }
}

window.customElements.define("page-not-found-page", PageNotFoundPage);
