import {html,LitElement} from 'lit-element';

class Navigation extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
        <style>
            .navigation-bar{
                width:calc(100% - 20px);
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:10px;
            }
            
            nav ul li{
                display:inline-block;
                padding:10px;
                cursor: pointer;
                
            }
        </style>
        <div class="navigation-bar">
            <div class="logo-holder">LOGO</div>
            <nav> 
                <ul>
                    <li>Home</li>
                    <li>Sign in</li>
                    <li>Sign up</li>
                </ul>
            </nav>
        </div>
        `;
    }
}
window.customElements.define('navigation-tag',Navigation);
