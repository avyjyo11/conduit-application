import { html, LitElement } from "lit-element";
import "../components/navigation.component";
import "../components/button.component";
import "../components/input.component";
import "../components/texrarea.component";
import {Router} from '@vaadin/router';

class YourSetting extends LitElement
{
    constructor()
    {
        super();
        this._api='https://conduit.productionready.io/api';

        this._imagelink="";
        this._userName="";
        this._userbio="";
        this._email = "";
        this._password="";

        this.showError=false;
        this._errors;
    

    }
    static get properties() {
        return {
          showError: { type: Boolean },
          _errors:{type:Array},
          
        };
      }



}




customElements.define("yoursetting-tag", YourSetting);