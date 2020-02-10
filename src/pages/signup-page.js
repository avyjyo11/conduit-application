<<<<<<< HEAD
import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signup.component";

class Signup extends LitElement {

    constructor()
    {
        super();

    }

    render()
    {
        return html `
        <navigation-tag></navigation-tag>
        <signupcomponent-tag></signupcomponent-tag>

        `;
    }


    

  render() {
    return html`
      <navigation-tag></navigation-tag>
      <signupcomponent-tag></signupcomponent-tag>
    `;
  }
}
customElements.define("signup-tag", Signup);
=======
import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/signup.component";

class Signup extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <navigation-tag></navigation-tag>
      <signupcomponent-tag></signupcomponent-tag>
    `;
  }
}
customElements.define("signup-tag", Signup);
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
