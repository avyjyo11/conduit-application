import {html,LitElement} from 'lit-element';

class ArticlePreview extends LitElement{
    constructor(){
        super();
        this.articleName = this.getAttribute('name');
        this.articleDesc = this.getAttribute('description');
    }
    render(){
        return html`
        <style>
        .article-preview-container{
            padding:10px;
        }
            .title{
                font-size:20px;
            }
            .description{
                font-size:15px;
                color:grey;
            }
        </style>
        <div class="article-preview-container">   
            <div class="article-title">
                <span class="title">${this.articleName}</span>
            </div>    
            <div class="article-description">
                <span class="description">${this.articleDesc}</span>
            </div>  
        </div>

        `;
    }
}
window.customElements.define('article-preview-tag',ArticlePreview);
