
import {LitElement,html,css} from 'lit-element';

class TextArea extends LitElement{
    constructor(){
        super();
        this.name="";
        this.placeholder="";
    }
    static get properties(){
        return {
            name:{type:String},
            placeholder: { type: String },
        }
    }
    static get styles(){
        return css `
            textarea{
                width: calc(100% - 40px);
                padding: 10px;
                margin: 10px;

                font-size: 15px;
                border: 1px solid grey;
                border-radius: 5px;
            }
        `;
    }
    render(){
        return html`
            <textarea  rows="5" placeholder=${this.placeholder} name="${this.name}" @input="${this.setValue}"></textarea>
        `;
    }
}

window.customElements.define('textarea-tag',TextArea);