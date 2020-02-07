import {html,LitElement} from 'lit-element';

class InputComponent extends LitElement{
    constructor(){
        super();
       this.placeholder = this.getAttribute('placeholder');
    
        
    }
    render(){
        return html`
            <style>
               .textbox{
                width:calc(100% - 40px);
                   padding:10px;
                   margin:10px 0;
                   
                   font-size:15px;
                   border:1px solid grey;
                   border-radius:5px;
               }
            </style>
            <input type="text" placeholder=${this.placeholder} class="textbox" />
            `
    }
}
window.customElements.define('input-tag',InputComponent);