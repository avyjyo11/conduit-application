import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";
import { Router } from "@vaadin/router";
import { postwithoutAuth } from "../services/api.services";
import { HOME } from "../constants/routes.config.js";
import { setToken, getTokenState } from "../services/storage.services";

class SignupComponent extends LitElement {
  constructor() {
    super();

    this.userName = "";
    this.email = "";
    this.password = "";

    this.showError = false;
    this.errors;

    this.handleChange = e => {
      this[e.target.name] = e.target.value;
    };

    this.signUp = () => {
      const data = {
        user: {
          username: this.userName,
          email: this.email,
          password: this.password
        }
      };

      let url = "/users";

      postwithoutAuth(url, data)
        .then(data => {
          this.showError = false;
          this._errors = [];
          setToken(data.user.token);
          Router.go(HOME);
          location.pathname = HOME;
        })
        .catch(error => {
          error.then(data => {
            this.errors = Object.values(data.errors);
            this.showError = true;
          });
        });
    };

    this.isToken = getTokenState();
  }

  static get properties() {
    return {
      showError: Boolean
    };
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
            .setValue=${this.handleChange}
            placeholder="Username"
            name="userName"
          ></input-tag>
          <input-tag
            .setValue=${this.handleChange}
            placeholder="Email"
            name="email"
          ></input-tag>
          <input-tag
            .setValue=${this.handleChange}
            placeholder="Password"
            name="password"
          ></input-tag>
          <div id="btn-wrapper">
            <btn-tag
              .handleClick=${this.signUp}
              buttonName="Sign up"
              className="btn"
            ></btn-tag>
          </div>
        </form>
      </div>
    `;
  }
}

window.customElements.define("signup-component-tag", SignupComponent);
