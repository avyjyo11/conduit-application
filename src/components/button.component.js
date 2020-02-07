import { html, LitElement, css } from "lit-element";
class ButtonComponent extends LitElement {
  constructor() {
    super();
    this.displayName = "";
    this.className = "";
  }

  static get properties() {
    return {
      displayName: { type: String },
      className: { type: String }
    };
  }

  static get styles() {
    return css`
      .btn {
        background-color: green;
        color: white;
        border: 1px solid green;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px;
      }
    `;
  }
  render() {
    return html`
      <button class="${this.className}">${this.displayName}</button>
    `;
  }
}
window.customElements.define("btn-tag", ButtonComponent);
