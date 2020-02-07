import {html,LitElement,css} from 'lit-element';

class ButtonComponent extends LitElement{

    constructor(){
        super();

        this.buttonName = '';
        this.className = ''
    }

    static get properties() {
        return {
            buttonName: String,
            className: String
        }
    }

    static get styles() {
        return css`
     
        .btn{
            background-color:#5cb85c;
            color:white;
            border: 1px solid #5cb85c;
            border-radius:5px;
            font-size:20px;
            padding:10px;
        }
        `;
    }
    render(){
        return html`

            <button class="${this.className}">${this.buttonName}</button>`;

    }
}
window.customElements.define('btn-tag',ButtonComponent);