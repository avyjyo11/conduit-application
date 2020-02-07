import {html,LitElement} from 'lit-element';

class TabButtonComponent extends LitElement{
    
    constructor(){
        super();
        this.buttonName = this.getAttribute('displayName');
        this.route = this.getAttribute('route'); 
    }
    
    render(){
        return html`
            <style>
                .btn{
                    color:black;
                    
                    font-size:10px;
                    padding:5px;
                    cursor:pointer;
                }

            </style>
            <button class="btn" @click=${()=>this.handleClick(this.route)}>${this.buttonName}</button>`;
    }
}
window.customElements.define('tab-btn-tag',TabButtonComponent);