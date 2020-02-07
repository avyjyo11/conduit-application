import {LitElement,html} from 'lit-element';

class ArticlePage extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
            <div>roshan</div>
        `;
    }
}
window.customElements.define('article-page',ArticlePage);