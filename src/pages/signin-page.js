import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signin.component";

class Signin extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <signincomponent-tag></signincomponent-tag>
    `;
  }
}
customElements.define("signin-tag", Signin);
