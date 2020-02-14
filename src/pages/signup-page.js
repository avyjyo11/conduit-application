import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signup.component";

class Signup extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <signupcomponent-tag></signupcomponent-tag>
    `;
  }


}
customElements.define("signup-tag", Signup);
