
import { html, LitElement, css } from "lit-element";

class InputComponent extends LitElement {
  constructor() {
    super();
    this.placeholder = "";
    this.name = "";
    this.value="";
  }

  static get properties() {
    return {
      placeholder: { type: String },
      name : {type:String},
      value: {type :String}
      
    };
  }

  static get styles() {
    return css`
      .textbox {
        width: calc(100% - 40px);
        padding: 10px;
        margin: 10px;
        font-size: 15px;
        border: 1px solid grey;
        border-radius: 5px;
      }
    `;
  }

  render() {
    return html`
      <input type="text" value=${this.value} placeholder=${this.placeholder} name="${this.name}" @input="${this.setValue}"  class="textbox" />
    `;
  }
}

window.customElements.define("input-tag", InputComponent);

