import { LitElement, html, css } from "lit-element";
import { cssStyles } from "../styles/cssStyles";

class PageIndicator extends LitElement {
  constructor() {
    super();
    this.value = 0;
  }
  static get properties() {
    return {
      value: Number
    };
  }

  static get styles() {
    return [
      cssStyles,
      css`
        .page-indicator {
          border: 1px solid var(--theme-color);
          color: var(--theme-color);
          padding: 5px;
          cursor: pointer;
        }
      `
    ];
  }

  render() {
    return html`
      <div @click=${this.pageChange} class="page-indicator">${this.value}</div>
    `;
  }
}

customElements.define("page-indicator", PageIndicator);
