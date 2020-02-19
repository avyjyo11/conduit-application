import { html, LitElement, css } from "lit-element";
import "./button.component";
import "./input.component";
import { Router } from "@vaadin/router";
import { postwithoutAuth } from "../services/api.services";
import { HOME } from "../constants/routes.config.js";
import { cssStyles } from "../styles/cssStyles";

class PageNotfound extends LitElement {
  constructor() {
    super();
    this.handleChange = e => {
      this[e.target.name] = e.target.value;
    };
    this.singIn = e => {
      const data = {
        user: {
          email: this.email,
          password: this.password
        }
      };

      let url = "/users/login";
      postwithoutAuth(url, data)
        .then(data => {
          this.showError = false;
          this._errors = [];

          localStorage.setItem("token", data.user.token);
          Router.go(HOME);
          location.pathname = "/";
        })
        .catch(error => {
          error.then(data => {
            this.errors = Object.values(data.errors);
            this.showError = true;
          });
        });
    };

    this.email = "";
    this.password = "";

    this.showError = false;
    this.errors = [];
  }
  static get properties() {
    return {
      showError: { type: Boolean },
      errors: { type: Array }
    };
  }

  static get styles() {
    return [
      cssStyles,
      css`
        * {
          margin: 0px;
          padding: 0px;
        }

        .jumbotron {
          padding: 30px;
          background-color: var(--theme-color);
          color: #fff;
        }

        .center {
          text-align: center;
        }

        .jumbotron h2 {
          font-size: 3em;
          font-weight: bold;
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
        }

        .jumbotron p {
          font-size: 1.4em;
          font-weight: 200;
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
        }

        li {
          margin: 15px;

          text-align: left;
          color: Red;
        }
        #pagenotfound {
          padding-top: 100px;
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
      `
    ];
  }

  render() {
    return html`
      <div class="jumbotron center">
        <h2>conduit</h2>
        <p>A place to share your knowledge</p>
      </div>
      <div id="wrapper">
        <p id="pagenotfound">Page not found</p>
      </div>
    `;
  }
}

customElements.define("pagenotfound-component-tag", PageNotfound);
