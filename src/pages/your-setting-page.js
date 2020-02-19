import { html, LitElement, css } from "lit-element";
import "../components/navigation.component";
import "../components/button.component";
import "../components/input.component";
import "../components/texrarea.component";
import "../components/footer.component";
import { Router } from "@vaadin/router";
import { getwithauth, put } from "../services/api.services";

class YourSetting extends LitElement {
  constructor() {
    super();

    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.imagelink = "";
    this.userName = "";
    this.userbio = "";
    this.email = "";
    this.newPassword = null;

    this.showError = false;
    this.errors;

    this.isToken = window.localStorage.getItem("token") ? true : false;
  }
  static get properties() {
    return {
      showError: { type: Boolean },
      errors: { type: Array },
      isToken: { type: Boolean },
      imagelink: { type: String },
      userName: { type: String },
      userbio: { type: String },
      email: { type: String },
      newPassword: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.getuser();
  }

  getuser() {
    if (this.isToken) {
      let url = `/user`;
      getwithauth(url)
        .then(data => {
          console.log(data);
          this.userbio = data.user.bio || "";
          this.imagelink = data.user.image || "";
          this.userName = data.user.username;
          this.email = data.user.email;
        })
        .catch(err => console.log(err));
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
      #yoursetting {
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
        width: 50%;
      }
      #btn-wrapper {
        display: flex;
        justify-content: flex-end;
        padding: 10px;
      }
      #btn-logout {
        padding: 10px;
      }
    `;
  }
  render() {
    return html`
      <div id="wrapper">
        <p id="yoursetting">Your Setting</p>

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
            value="${this.imagelink}"
            .setValue=${this.handleChange}
            placeholder="URL of profile picture"
            name="imagelink"
          ></input-tag>
          <input-tag
            value="${this.userName}"
            .setValue=${this.handleChange}
            placeholder="username"
            name="userName"
          ></input-tag>
          <textarea-tag
            value="${this.userbio}"
            .setValue=${this.handleChange}
            placeholder="Short bio about you"
            name="userbio"
          ></textarea-tag>

          <input-tag
            value="${this.email}"
            .setValue=${this.handleChange}
            placeholder="Email"
            name="email"
          ></input-tag>
          <input-tag
            value="${this.newPassword || ""}"
            .setValue=${this.handleChange}
            placeholder="New Password"
            name="newPassword"
          ></input-tag>
          <div id="btn-wrapper">
            <btn-tag
              .handleClick=${this.update}
              buttonName="Update"
              className="btn"
            ></btn-tag>
          </div>
        </form>
        <hr />
        <div id="btn-logout">
          <btn-tag
            .handleClick=${this.logOut}
            buttonName="or click here to logout"
            className="btn-logout"
          ></btn-tag>
        </div>
      </div>
    `;
  }

  logOut(e) {
    console.log("logout");
    localStorage.clear();

    Router.go("/");
    location.pathname = "/";
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  update(e) {
    const data = {
      user: {
        username: this.userName,
        email: this.email,
        password: this.newpassword == "" ? null : this.newPassword,
        bio: this.userbio,
        image: this.imagelink
      }
    };

    let url = `/user`;
    put(url, data)
      .then(data => {
        localStorage.setItem("token", data.user.token);

        Router.go("/");
      })
      .catch(error => {
        this.errors = error && error.errors;
        this.showError = true;
      });
  }
}

customElements.define("your-setting-tag", YourSetting);
