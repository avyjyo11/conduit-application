import { LitElement, html, css } from "lit-element";

class TextArea extends LitElement {
  constructor() {
    super();
    this.name = "";
    this.placeholder = "";
    this.value = "";
    this.disabled = false;
  }
  static get properties() {
    return {
      name: { type: String },
      placeholder: { type: String },
      value: { type: String },
      disabled: { type: Boolean }
    };
  }
  static get styles() {
    return css`
      textarea {
        width: 100%;
        padding: 10px;
        font-size: 15px;
        box-sizing: border-box;
      }
    `;
  }
  render() {
    return html`
      <textarea
        rows="5"
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        name="${this.name}"
        @input="${this.setValue}"
      >
    ${this.value}</textarea
      >
    `;
  }
}

window.customElements.define("textarea-tag", TextArea);
