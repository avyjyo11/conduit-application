import {html,LitElement,css} from 'lit-element';

class populartag extends LitElement{

    constructor()
    {
        super();
        
    }

    static get styles()
    {
        return css `
        
        #popular-tags{
            font-size: 16px;
        }
        #wrapper{
            background-color:#f3f3f3;
        }

        
        `;
    }

    render()
    {
       
        return html `
            
        <div  id="wrapper">
           <p id="#popular-tags">
            Popular Tags
           </p>

        </div>
        `;

    }


}



customElements.define('popular-tag',populartag);