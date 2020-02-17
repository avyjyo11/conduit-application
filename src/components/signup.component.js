import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";
import { Router } from "@vaadin/router";
import { postwithoutAuth } from "../services/api.services";
class SignupComponent extends LitElement {
  constructor() {
    super();

    this.userName = "";
    this.email = "";
    this.password = "";

    this.showError = false;
    this.errors;

    this.handleChange = this.handleChange.bind(this);

    this.singUp = this.singUp.bind(this);
    this.isToken = window.localStorage.getItem("token") ? true : false;
  }
  static get properties() {
    return {
      showError: { type: Boolean },
      errors: { type: Array }
    };
  }
  connectedCallback()
  {
    if(this.isToken)
    {
      Router.go('/');
    }
  }

  getFormValidationError(errorObject) {
    const errorList = [];

    Object.keys(errorObject).forEach(key => {
      errorObject[key].forEach(errorMessage => {
        errorList.push(`${key + " " + errorMessage}`);
      });
    });
    return errorList;
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
        <p id="signin">Sign up</p>
        <p class="green">Already have an account</p>
        ${this.showError
          ? this.getFormValidationError(this.errors).map(
              msg =>
                html`
                  <li>${msg}</li>
                `
            )
          : null}
        <form>
          <input-tag
            .setValue="${this.handleChange}"
            placeholder="Username"
            name="userName"
          ></input-tag>
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
              .handleClick="${this.singUp}"
              buttonName="Sign up"
              className="btn"
            ></btn-tag>
          </div>
        </form>
      </div>
    `;
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  singUp(e) {
    console.log("singup", this.userName);
    const data = {
      "user": {
        "username": this.userName ,
        "email": this.email ,
        "password": this.password
      }
    };

    console.log(data);
    let url='/users';

    postwithoutAuth(url,data)
    .then((data) => {
      this.showError=false;
      this._errors=[];
      localStorage.setItem('token', data.user.token);
      console.log('Success:', data.user.token);
       Router.go('/');
       location.pathname = "/";
    })
    .catch((error) => {
        error.then((data)=>
        {   console.log(data);
          this.errors= Object.values(data.errors);
          this.showError=true;
        
        });
    });

  }
}

customElements.define("signupcomponent-tag", SignupComponent);
