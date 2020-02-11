import { LitElement, html } from "lit-element";



class ArticlePage extends LitElement {
 

  static get properties() {
    return {
      title: { type: String }

    };
  }

  constructor() {
    super();
    
  }
  

  
  render() {
    return html`
    <h1>hello</h1>
    `;
  }
}
window.customElements.define("test-page", ArticlePage);
