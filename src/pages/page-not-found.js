import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signin.component";
import "../components/page-not-found";


class pagenotfound extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
     <pagenotfound-component-tag></pagenotfound-component-tag>
    `;
  }
}
customElements.define("pagenotfound-page", pagenotfound);
