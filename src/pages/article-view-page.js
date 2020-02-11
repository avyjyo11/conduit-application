import { LitElement,html,css } from 'lit-element';
import '../components/navigation.component';
import '../components/button.component';
import '../components/texrarea.component';
import { Router } from '@vaadin/router';
class ArticleView extends LitElement{

    firstUpdated(){
        const slug = this.location.params.slug;
        fetch('https://conduit.productionready.io/api/articles/'+slug,{
            method:'GET',
            headers:{'Content-Type':'application/json','Accept':'appication/json'},
        })
        .then(response => response.json())
        .then(data => {
            this.data = data;
            this.dataLoaded = true;
            console.log("data loaded");
            
        });
        
    }
    constructor(){
        super();
        this.dataLoaded=false;
        this.data = '';
        
    }

    static get styles(){
        return css `
        
        `;
    }

    static get properties(){
        return {
            dataLoaded: {type:Boolean}
        }
    }

    render(){
        console.log(this.data);
        
        if(this.dataLoaded){
            return html` <h1>this is working</h1>`;
        }
        
    }
}
window.customElements.define('view-article',ArticleView);
