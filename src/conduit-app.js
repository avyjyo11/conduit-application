import { LitElement, html, css, TemplateResult } from "lit-element";
import "./pages/home-page";
import "./pages/signin-page";

class ConduitApp extends LitElement {
  constructor() {
    super();
    this.routes = ["home", "signup", "signin"];
    this.page = html`
      <home-page></home-page>
    `;
    this.routing = this.routing.bind(this);
  }

  static get properties() {
    return {
      page: { type: String }
    };
  }

  routing(name) {
    switch (name) {
      case "home":
        this.page = html`
          <home-page></home-page>
        `;
        console.log("clicked", this.page);
        break;
      case "signin":
        this.page = html`
          <signin-tag></signin-tag>
        `;
        console.log("clicked", this.page);
        break;
    }
  }

  render() {
    const routertabs = this.routes.map(val => {
      return html`
        <button name=${val} @click=${this.routing.bind(this, val)}>
          ${val}
        </button>
      `;
    });

    return html`
      ${routertabs} ${this.page}
    `;
  }
}

window.customElements.define("conduit-app", ConduitApp);
