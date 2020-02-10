import {LitElement,html} from 'lit-element';
class UserProfile extends LitElement{
    constructor(){
        super();
    }
    render(){
        return html`
            <h1> this is the user profile page </h1>
        `;
    }
}
window.customElements.define('userprofile-tag',UserProfile);