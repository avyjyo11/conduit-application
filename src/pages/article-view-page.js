import { LitElement,html,css } from 'lit-element';
import '../components/navigation.component';
import '../components/button.component';
import '../components/texrarea.component';
import '../components/navigation.component';
import '../components/userInfo.component';
import { Router } from '@vaadin/router';
class ArticleView extends LitElement{


    connectedCallback(){
        super.connectedCallback();
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
            .article-title-container{
                background-color:#333333;
                color:white;
                padding:10px;
            }
        `;
    }

    static get properties(){
        return {
            dataLoaded: {type:Boolean}
        }
    }

    render(){        
        if(this.dataLoaded){
            console.log(this.data);
            
        return html` 
        
        <navigation-tag></navigation-tag>
        <div class="article-title-container">
            <h1>${this.data.article.title}</h1>
            <user-tag
                  username=${this.data.article.author.username}
                  postDate=${this.data.article.updatedAt}
                  userImg=${this.data.article.author.image}
                  hearts=${this.data.article.favoritesCount}
                ></user-tag>
        </div>
        `;
         
        }else{
            return html `
                <h1>Loading..</h1>
            `;
        }
        
    }
}
window.customElements.define('view-article',ArticleView);
