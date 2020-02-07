import { LitElement, html, css } from "lit-element";
import "./pages/home-page";
import "./pages/article-page";
import "./pages/signin-page";
import "./pages/signup-page";


class ConduitApp extends LitElement {
  render() {
    return html`
      <article-page></article-page>
      <home-page></home-page>
      <signin-tag></signin-tag>
      <signup-tag></signup-tag>

    `;
  }
}

window.customElements.define("conduit-app", ConduitApp);
