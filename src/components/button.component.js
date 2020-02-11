
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
      .btn-logout {
        background-color: transparent;
        color: #b85c5c;
        border: 1px solid #b85c5c;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px;
        cursor:pointer;
      }
      .btn-logout:hover {
        background-color: #b85c5c;
        color: white;
        border: 1px solid #b85c5c;
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
      <button @click="${this.handleClick}"  class="${this.className}">${this.buttonName}</button>
    `;
  }
}
window.customElements.define("btn-tag", ButtonComponent);

