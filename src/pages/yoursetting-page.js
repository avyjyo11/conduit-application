import { html, LitElement ,css} from "lit-element";
import "../components/navigation.component";
import "../components/button.component";
import "../components/input.component";
import "../components/texrarea.component";
import "../components/footer.component";
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

      getuser()
      {
          
      }

      getFormValidationError(errorObject) {
        const errorList=[];
  
        Object.keys(errorObject).forEach(key => {
          errorObject[key].forEach(errorMessage => {
            errorList.push(`${key + " "+errorMessage}`)
          })
        })
        return errorList;
      }

      static get styles() {
        return css`
        *{
            margin:0px;
            padding:0px;
        }
        li{
            margin:15px;
          
            text-align:left;
            color: Red;
        }
            #yoursetting{
                
                padding-top:20px;
                color:#373A3C;
                font-size:40px;
                margin-bottom:8px;
            }
            p{
                text-align:center;
            }
            #wrapper{
                margin:0 auto;
                width: 50%
            }
            #btn-wrapper{
                display: flex;
                justify-content:flex-end;
                padding:10px;
            }
            #btn-logout{
               
                padding:10px;
            }
        
        `;
    }
    render()
    {   
        
        return html `  
        <navigation-tag></navigation-tag> 
        <div  id="wrapper">
            <p id="yoursetting"> Your Setting </p>
           
              ${this.showError?this.getFormValidationError(this._errors)
                .map(msg => html`<li>  ${msg}</li>`)
                  :null}
            <form>
            <input-tag .setValue="${this._handleChange}"  placeholder="URL of profile picture" name="_imagelink"></input-tag>
            <input-tag .setValue="${this._handleChange}"  placeholder="username" name="_userName"></input-tag>
            <textarea-tag .setValue="${this._handleChange}"  placeholder="Short bio about you" name="_userbio"></textarea-tag>
        
            <input-tag .setValue ="${this._handleChange}" placeholder="Email" name="_email"></input-tag>
            <input-tag .setValue="${this._handleChange}" placeholder="Password" name="_password"></input-tag>
            <div id="btn-wrapper">
            <btn-tag .handleClick="${this._update}"  buttonName="Update" className="btn"></btn-tag>
            </div>
            </form> 
            <hr>
            <div id="btn-logout">
            <btn-tag .handleClick="${this._logOut}"  buttonName="or click here to logout" className="btn-logout"></btn-tag>
            </div>
          
        </div>     
        <footer-section></footer-section>
        `;
    }

    _logOut(e)
    {
        console.log("logout");
        localStorage.clear();
        Router.go('/');

    }

    _handleChange(e)
    {
      this[e.target.name]=e.target.value;
    
    }

    _update(e)
    {

    }




}




customElements.define("yoursetting-tag", YourSetting);