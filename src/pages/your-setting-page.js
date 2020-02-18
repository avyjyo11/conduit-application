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

    this._update = this._update.bind(this);
    this._handleChange = this._handleChange.bind(this);

    this._imagelink = "";
    this._userName = "";
    this._userbio = "";
    this._email = "";
    this._newPassword = null;

    this.showError = false;
    this._errors;

    this.isToken = window.localStorage.getItem("token") ? true : false;
  }
  static get properties() {
    return {
      showError: { type: Boolean },
      _errors: { type: Array },
      isToken: { type: Boolean },
      _imagelink: { type: String },
      _userName: { type: String },
      _userbio: { type: String },
      _email: { type: String },
      _newPassword: { type: String }
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
          this._userbio = data.user.bio || "";
          this._imagelink = data.user.image || "";
          this._userName = data.user.username;
          this._email = data.user.email;
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
          ? this.getFormValidationError(this._errors).map(
              msg =>
                html`
                  <li>${msg}</li>
                `
            )
          : null}
        <form>
          <input-tag
            value=${this._imagelink}
            .setValue="${this._handleChange}"
            placeholder="URL of profile picture"
            name="_imagelink"
          ></input-tag>
          <input-tag
            value=${this._userName}
            .setValue="${this._handleChange}"
            placeholder="username"
            name="_userName"
          ></input-tag>
          <textarea-tag
            value=${this._userbio}
            .setValue="${this._handleChange}"
            placeholder="Short bio about you"
            name="_userbio"
          ></textarea-tag>

          <input-tag
            value=${this._email}
            .setValue="${this._handleChange}"
            placeholder="Email"
            name="_email"
          ></input-tag>
          <input-tag
            value=${this._newPassword || ""}
            .setValue="${this._handleChange}"
            placeholder="New Password"
            name="_newPassword"
          ></input-tag>
          <div id="btn-wrapper">
            <btn-tag
              .handleClick="${this._update}"
              buttonName="Update"
              className="btn"
            ></btn-tag>
          </div>
        </form>
        <hr />
        <div id="btn-logout">
          <btn-tag
            .handleClick="${this._logOut}"
            buttonName="or click here to logout"
            className="btn-logout"
          ></btn-tag>
        </div>
      </div>
    `;
  }

  _logOut(e) {
    console.log("logout");
    localStorage.clear();

    Router.go("/");
    location.pathname = "/";
  }

  _handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  _update(e) {
    const data = {
      user: {
        username: this._userName,
        email: this._email,
        password: this._newpassword == "" ? null : this._newPassword,
        bio: this._userbio,
        image: this._imagelink
      }
    };

    let url = `/user`;
    put(url, data)
      .then(data => {
        localStorage.setItem("token", data.user.token);

        Router.go("/");
      })
      .catch(error => {
        this._errors = error && error.errors;
        this.showError = true;
      });
  }
}

customElements.define("your-setting-tag", YourSetting);
