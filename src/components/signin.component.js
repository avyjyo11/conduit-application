<<<<<<< HEAD
import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";


class SigninComponent extends LitElement {
  constructor() {
    super();
    this._api='https://conduit.productionready.io/api';
    this._signin=this._signin.bind(this);
  }

  static get styles() {
    return css`
      * {
        margin: 0px;
        padding: 0px;
      }
      #signin {
        padding-top: 20px;
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
      #btn-wrapper {
        float: right;
        padding: 10px;
      }
      .green {
        color: #5cb85c;
        cursor: pointer;
      }
      .green:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
        <div  id="wrapper">
            <p id="signin"> Sign In </p>
            <p class="green"> Need an account </p>
            <form>
            <input-tag placeholder="Email"></input-tag>
            <input-tag placeholder="Password"></input-tag>
            <div id="btn-wrapper">
            <btn-tag .signIn="${this._signin}" buttonName="Sign in" className="btn"></btn-tag>
          </div>
        </form> 
        </div>
        `;
  }

  _signin(e)
  {
    
  }
}
customElements.define("signincomponent-tag", SigninComponent);
=======
import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";

class SigninComponent extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      * {
        margin: 0px;
        padding: 0px;
      }
      #signin {
        padding-top: 20px;
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
      #btn-wrapper {
        float: right;
        padding: 10px;
      }
      .green {
        color: #5cb85c;
        cursor: pointer;
      }
      .green:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <div id="wrapper">
        <p id="signin">Sign In</p>
        <p class="green">Need an account</p>
        <form>
          <input-tag placeholder="Email"></input-tag>
          <input-tag placeholder="Password"></input-tag>
          <div id="btn-wrapper">
            <btn-tag
              type="submit"
              buttonName="Sign in"
              className="btn"
            ></btn-tag>
          </div>
        </form>
      </div>
    `;
  }
}
customElements.define("signincomponent-tag", SigninComponent);
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
