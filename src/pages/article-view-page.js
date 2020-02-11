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
            .article-info-container{
                background-color:#333333;
            }
            .article-title-container{
                
                color:white;
                padding:10px;
                width:80%;
                margin: 0 auto;
                
            }
            .article-body-container{
                border-bottom:1px solid grey;
                width:80%;
                margin:0 auto;
                padding: 10px 0 50px 0;
            }
            .comment-section{
                width:50%;
                margin:0 auto;
            }
            .right{
                float:right;
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
        
        <div class="article-info-container">
            <div class="article-title-container">
            <h1>${this.data.article.title}</h1>
            <user-tag
                  username=${this.data.article.author.username}
                  postDate=${this.data.article.updatedAt}
                  userImg=${this.data.article.author.image}
                  hearts=${this.data.article.favoritesCount}
                ></user-tag>
            </div>
            
        </div>
        <div class="article-body-container">
            <p>${this.data.article.body}</p>
        </div>

        <div class="comment-section">
            <textarea-tag
                placeholder="Write a comment"
            ></textarea-tag>
            <btn-tag
            buttonName="post comment"
            class="right"
          
          ></btn-tag>
        
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
