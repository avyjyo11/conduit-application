import { LitElement, html, css } from "lit-element";

class TagButton extends LitElement {
  constructor() {
    super();
    this.name = "";
  }
  static get properties() {
    return {
      name: String
    };
  }
  static get styles() {
    return css`
      .tag-container {
        padding: 8px 10px;
        border-radius: 14px;
        margin: 4px 1px;
        background-color: #687077;
        font-size: 0.8em;
        border: none;
        color: #fff;
      }
    `;
  }

  render() {
    return html`
      <button class="tag-container" @click=${this.click}>
        ${this.name}
      </button>
    `;
  }
}
window.customElements.define("tag-button", TagButton);
