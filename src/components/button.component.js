import { html, LitElement, css } from "lit-element";

class ButtonComponent extends LitElement {
  constructor() {
    super();

    this.buttonName = "";
    this.className = "";
    this.type = "submit";
  }

  static get properties() {
    return {
      buttonName: String,
      className: String,
      type: String
    };
  }

  static get styles() {
    return css`
      .btn {
        background-color: #5cb85c;
        color: white;
        border: 1px solid #5cb85c;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
      }
    `;
  }
  render() {
    return html`
      <button class="btn">${this.buttonName}</button>
    `;
  }
}
window.customElements.define("btn-tag", ButtonComponent);
