import {LitElement,html,css} from 'lit-element';

class TextArea extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css `
            textarea{
                width: calc(100% - 40px);
                padding: 10px;
                margin: 10px;

                font-size: 20px;
                border: 1px solid grey;
                border-radius: 5px;
            }
        `;
    }
    render(){
        return html`
            <textarea  rows="5" placeholder="Write your article(in markdown)"></textarea>
        `;
    }
}
window.customElements.define('textarea-tag',TextArea);