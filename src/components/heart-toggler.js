import { LitElement, html, css } from "lit-element";
import "fa-icons";

class HeartToggler extends LitElement {
  constructor() {
    super();
    this.hearts = 0;
  }

  static get properties() {
    return {
      hearts: { type: Number }
    };
  }

  static get styles() {
    return css`
      .heart-toggler {
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        position: absolute;
        z-index: 10;
        padding: 5px 10px;
        top: 20px;
        cursor: pointer;
        right: 10px;
      }

      .heart-toggler:hover {
        background-color: var(--theme-color);
        color: #fff;
      }

      .heart-toggler:hover .heart-counter {
        color: #fff;
      }

      .heart-toggler fa-icon {
        margin: 0;
        padding: 0;
      }

      .heart-counter {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 1.1em;
        z-index: 20;
        color: var(--theme-color);
      }
    `;
  }

  render() {
    return html`
      <div @click=${this.click} class="heart-toggler">
        <fa-icon class="fas fa-heart"></fa-icon>
        <span class="heart-counter">${this.hearts}</span>
      </div>
    `;
  }
}

customElements.define("heart-toggler", HeartToggler);
