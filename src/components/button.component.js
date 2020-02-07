import {html,LitElement} from 'lit-element';

class ButtonComponent extends LitElement{

    constructor(){
        super();
        this.buttonName = this.getAttribute('displayName');
        this.route = this.getAttribute('route'); 
    }
    render(){
        return html`
            <style>
                .btn{
                    background-color:green;
                    color:white;
                    border: 1px solid green;
                    border-radius:5px;
                    font-size:20px;
                    padding:10px;
                    cursor:pointer;
                }
            </style>
            <button class="btn" @click=${()=>this.handleClick()}>${this.buttonName}</button>`;
    }
}
window.customElements.define('btn-tag',ButtonComponent);