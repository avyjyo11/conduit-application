import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";
import { Router } from "@vaadin/router";
import { postwithoutAuth } from "../services/api.services";

class SigninComponent extends LitElement {
  constructor() {
    super();
    this.handleChange=(e) =>{
      this[e.target.name] = e.target.value;
    }
    this.singIn=(e)=> {
      const data = {
        user: {
          email: this.email,
          password: this.password
        }
      };
  
      let url='/users/login'
      postwithoutAuth(url,data)
      .then((data) => {
        this.showError=false;
        this._errors=[];
       
     localStorage.setItem('token', data.user.token);
     Router.go('/');
     location.pathname = "/";
      })
      .catch((error) => { 
          error.then((data)=>
          {  
            this.errors= Object.values(data.errors);
            this.showError=true;
          }); 
      });
  }

    this.email = "";
    this.password = "";

    this.showError = false;
    this.errors=[];
  }
  static get properties() {
    return {
      showError: { type: Boolean },
      errors: { type: Array }
    };
  }

  static get styles() {
    return css`
      * {
        margin: 0px;
        padding: 0px;
      }
      li {
        margin: 15px;

        text-align: left;
        color: Red;
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
        ${this.showError
          ? this.errors.map((array) => {
              return array.map(
                msg =>
                  html`
                    <li>Email or Password : ${msg}</li>
                  `
              );
            })
          : null}
        <form>
          <input-tag
            .setValue="${this.handleChange}"
            placeholder="Email"
            name="email"
          ></input-tag>
          <input-tag
            .setValue="${this.handleChange}"
            placeholder="Password"
            name="password"
          ></input-tag>
          <div id="btn-wrapper">
            <btn-tag
              .handleClick="${this.singIn}"
              buttonName="Sign In"
              className="btn"
            ></btn-tag>
          </div>
        </form>
      </div>
    `;
  }


  
}

customElements.define("signin-component-tag", SigninComponent);
