import { LitElement, html, css } from "lit-element";

class FooterSection extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .footer {
        background-color: #323d48;
        color: #ccc;
        padding: 20px;
        text-align: center;
        font-weight: bold;
      }
    `;
  }

  render() {
    return html`
      <div class="footer">
        &copy; 2020. By A.I.R
      </div>
    `;
  }
}

customElements.define("footer-section", FooterSection);
