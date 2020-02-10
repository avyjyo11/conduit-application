
import { html, LitElement, css } from "lit-element";

class ButtonComponent extends LitElement {
  constructor() {
    super();

    this.buttonName = "";
    this.className = "btn";
    
  }

  static get properties() {
    return {
      buttonName: String,
      className: String,
      handleClick: {
        type: Function,
      },
     
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
        cursor:pointer;
      }
    `;
  }
  render() {
    console.log("button render");
    
    return html`
<<<<<<< HEAD
      <button @click="${this.handleClick}"  class="${this.className}">${this.buttonName}</button>
=======
      <button class="btn" @click="${this.handleClick}">${this.buttonName}</button>
>>>>>>> 0ecd81bbfa2158b783e2da3961d7a9661b5a5c24
    `;
  }
}
window.customElements.define("btn-tag", ButtonComponent);

