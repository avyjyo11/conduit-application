
import {html,LitElement, css} from 'lit-element';
import "./button.component";
import "./input.component";

/**
 *
 *
 * @class SignupComponent
 * @extends {LitElement}
 */
class SignupComponent extends LitElement {
    constructor()
    {
        super();
        this._api='https://conduit.productionready.io/api';

        this._userName = "";
        this._email = "";
        this._password="";

        this.showError=false;
        this._errors;

        this._handleChange=this._handleChange.bind(this);
   

        this._singUp=this._singUp.bind(this);

    }
    static get properties() {
        return {
          showError: { type: Boolean },
          _errors:{type:Array},
          
        };
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
            #signin{
                
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
                width: 30%
            }
            #btn-wrapper{
                float:right;
                padding:10px;
            }
            .green{
                color:#5cb85c;
                cursor:pointer;
                
            }
            .green:hover{
                text-decoration:underline;
            }
        `;
    }

    render()
    {   
        
        return html `   
        <div  id="wrapper">
            <p id="signin"> Sign up </p>
            <p class="green"> Already have an account </p>
              ${this.showError?this._errors.map(
                 ( array,index) => {
                    if(index==0)
                return array.map(msg => html`<li> Email : ${msg}</li>`)
                if(index==1)
                return array.map(msg => html`<li> Password : ${msg}</li>`)
                if(index==2)
                return array.map(msg => html`<li> UserName : ${msg}</li>`)
                 }
                  )
                  :null}
            <form>
            <input-tag .setValue="${this._handleChange}"  placeholder="Username" name="_userName"></input-tag>
            <input-tag .setValue ="${this._handleChange}"placeholder="Email" name="_email"></input-tag>
            <input-tag .setValue="${this._handleChange}"placeholder="Password" name="_password"></input-tag>
            <div id="btn-wrapper">
            <btn-tag .handleClick="${this._singUp}"  buttonName="Sign up" className="btn"></btn-tag>
            </div>
            </form> 
        </div>        `;
    }

    _handleChange(e)
    {
     
      this[e.target.name]=e.target.value;
      
    
 
    }
    


   
    _singUp(e)
    {
        console.log("singup",this._userName);
    const data = {   "user":{
      "username": this._userName,
      "email": this._email,
      "password": this._password,
    } };

    fetch(this._api+"/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(data),
    })
    
    .then((response) => {
        if(!response.ok){
         return response.json().then(error =>{ throw error });
        };
        return response.json()
    })
    .then((data) => {
      console.log('Success:', data.user.token);
     localStorage.setItem('token', data.user.token);
    })
    .catch((error) => {
        this.showError=true;
        this._errors= Object.values(error.errors);
        console.log(error.errors);
      console.log('Error:', this._errors);
    });
  }
    }

customElements.define('signupcomponent-tag', SignupComponent);