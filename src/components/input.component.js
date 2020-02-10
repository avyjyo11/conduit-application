
import { html, LitElement, css } from "lit-element";

class InputComponent extends LitElement {
  constructor() {
    super();
    this.placeholder = "";
<<<<<<< HEAD
    this.name = "";
=======
    this.name= "";
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
  }

  static get properties() {
    return {
      placeholder: { type: String },
<<<<<<< HEAD
      name : {type:String}
      
=======
      name:{type:String}
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
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
<<<<<<< HEAD
      <input type="text" placeholder=${this.placeholder} name="${this.name}" @input="${this.setValue}"  class="textbox" />
=======
      <input type="text" placeholder=${this.placeholder} class="textbox" @input="${this.setValue}" name="${this.name}"/>
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
    `;
  }
}

window.customElements.define("input-tag", InputComponent);

