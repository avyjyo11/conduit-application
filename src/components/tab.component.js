import {LitElement,html,css} from 'lit-element';
import '../components/tab-button.component.js';


class TabComponent extends LitElement{
    constructor(){
        super();
    }
    static get properties(){
        return {

        }
    }
    static get styles(){
        return css`
            .tab-container{
                width:calc(100% - 20px);
                background-color:grey;
                padding:10px;
            }
        `;
    }
    handleRouting(name){
        console.log("route",name);
        
    }
    render(){
        return html`
        
        <div class="tab-container">
            <tab-btn-tag displayName="upload article" .handleClick=${this.handleRouting} route="write article"></tab-btn-tag>
        </div>
        `;
    }
}
window.customElements.define('tab-tag',TabComponent);