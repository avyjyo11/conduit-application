import { html, LitElement, css } from "lit-element";

class InputComponent extends LitElement {
  constructor() {
    super();
    this.placeholder = "";
  }

  static get properties() {
    return {
      placeholder: { type: String }
    };
  }

  static get styles() {
    return css`
      .textbox {
        width: calc(100% - 40px);
        padding: 10px;
        margin: 10px;

        font-size: 20px;
        border: 1px solid grey;
        border-radius: 5px;
      }
    `;
  }

  render() {
    return html`
      <input type="text" placeholder=${this.placeholder} class="textbox" />
    `;
  }
}

window.customElements.define("input-tag", InputComponent);
