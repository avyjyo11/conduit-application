import { LitElement, html, css } from "lit-element";
import { Router } from "@vaadin/router";
import "../components/navigation.component";
import "../components/tag-button.component";
import "../components/userInfo.component";
import "../components/article-preview.component";
import "../components/page-indicator.component";
import "../components/footer.component";
import "../components/heart-toggler";
import { get, getwithauth } from "../services/api.services";
import { cssStyles } from "../styles/cssStyles";
import { SIGN_IN, VIEW_ARTICLE } from "../constants/routesj.config";

class HomePage extends LitElement {
  constructor() {
    super();
    this.activeTab = "global";
    this.tags = [];
    this.selectedTag = null;
    this.globalFeeds = [];
    this.yourFeeds = [];
    this.articles = [];
    this.globalPages = 0;
    this.yourPages = 0;
    this.pages = 0;
    this.username = "username";
    this.pageChange = e => {
      let offset = (e.target.innerText - 1) * 10;
      let fetchURL;

      if (this.activeTab === "global") {
        if (this.selectedTag) {
          fetchURL = `/articles?limit=10&offset=${offset}&tag=${this.selectedTag}`;
        } else {
          fetchURL = `/articles?limit=10&offset=${offset}`;
        }
      } else {
        if (this.selectedTag) {
          fetchURL = `articles?author=${this.username}&limit=10&offset=${offset}&tag=${this.selectedTag}`;
        } else {
          fetchURL = `/articles?author=${this.username}&limit=10&offset=${offset}`;
        }
      }

      get(fetchURL)
        .then(data => {
          this.articles = [...data.articles];
          window.scrollTo(0, 0);
        })
        .catch(err => console.log(err));
    };

    this.likePost = e => {
      if (!this.isToken) {
        Router.go(`${SIGN_IN}`);
      }
    };

    this.tagClick = e => {
      this.selectedTag = e.target.innerText;
      let url =
        this.activeTab === "global"
          ? `/articles?tag=${this.selectedTag}&limit=10`
          : `articles?author=${this.username}&tag=${this.selectedTag}&limit=10`;

      get(url)
        .then(data => {
          this.articles = [...data.articles];
          this.pages = data.articlesCount / 10;
        })
        .catch(err => console.log(err));
    };

    this.isToken = window.localStorage.getItem("token") ? true : false;
  }

  static get properties() {
    return {
      articles: { type: Array },
      yourFeeds: { type: Array },
      tags: { type: Array },
      pages: Number,
      yourPages: Number,
      activeTab: String,
      isToken: { type: Boolean },
      selectedTag: String
    };
  }

  connectedCallback() {
    super.connectedCallback();
    let url = `/articles?limit=10`;
    get(url)
      .then(data => {
        this.globalFeeds = [...data.articles];
        this.globalPages = data.articlesCount / 10;
        this.articles = this.globalFeeds;
        this.pages = this.globalPages;
      })
      .catch(err => console.log(err));

    url = `/tags?limit=20`;
    get(url)
      .then(data => {
        this.tags = [...data.tags];
      })
      .catch(err => console.log(err));

    if (this.isToken) {
      url = `/user`;
      getwithauth(url)
        .then(data => {
          this.username = data.user.username;
          let url = `/articles?author=${this.username}&limit=10`;
          return get(url);
        })
        .then(data => {
          this.yourPages = data.articlesCount / 10;
          this.yourFeeds = [...data.articles];
        })
        .catch(err => console.log(err));
    }
  }

  static get styles() {
    return [
      cssStyles,
      css`
        .jumbotron {
          padding: 30px;
          background-color: var(--theme-color);
          color: #fff;
        }

        .center {
          text-align: center;
        }

        .jumbotron h2 {
          font-size: 3em;
          font-weight: bold;
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
        }

        .jumbotron p {
          font-size: 1.4em;
          font-weight: 200;
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
        }

        .all-content-div {
          padding-top: 20px;
          display: flex;
        }

        .tag-section {
          width: 20%;
          font-size: 0.9em;
        }

        .tag-section div {
          background-color: #f3f3f3;
          padding: 12px;
        }

        .tag-section h4 {
          font-size: 1em;
          font-weight: normal;
          margin: 0;
          margin-bottom: 6px;
        }

        .content-section {
          width: 80%;
          margin-right: 20px;
        }

        .feed-buttons button {
          margin: 0;
          padding: 16px;
          color: grey;
          border-bottom: 2px solid #fff;
          border: none;
          font-size: 1em;
          background-color: #fff;
        }

        .feed-buttons button:focus {
          outline: none;
        }

        .feed-buttons .active {
          border-bottom: 2px solid var(--theme-color);
          color: var(--theme-color);
        }

        .content-section hr {
          margin: 0;
          padding: 0;
          background-color: #adadad;
        }

        user-tag {
          padding: 0px 24px;
        }

        .pages-div {
          margin-top: 5px;
          display: flex;
          flex-wrap: wrap;
        }

        .article-div {
          position: relative;
        }
      `
    ];
  }

  tabsChange(e) {
    let buttons = e.target.parentNode.children;
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    e.target.classList.add("active");
    this.selectedTag = null;

    if (e.target.innerText === "Global Feed") {
      this.articles = this.globalFeeds;
      this.pages = this.globalPages;
      this.activeTab = "global";
    } else {
      if (this.isToken) {
        this.articles = this.yourFeeds;
        this.pages = this.yourPages;
        this.activeTab = "your";
      }
    }
  }

  articleView(slug) {
    Router.go(`${VIEW_ARTICLE}/${slug}`);
  }

  render() {
    const pagesArr = [];
    for (var i = 1; i <= this.pages; i++) {
      pagesArr.push(i);
    }

    const navbar = html``;

    const banner = html`
      <div class="jumbotron center">
        <h2>conduit</h2>
        <p>A place to share your knowledge</p>
      </div>
    `;

    const tagSection = html`
      <div class="tag-section">
        <div>
          <h4>Popular tags</h4>
          ${this.tags.map(
            val =>
              html`
                <tag-button .click=${this.tagClick} name=${val}></tag-button>
              `
          )}
        </div>
      </div>
    `;

    const contentSection = html`
      <div class="content-section">
        <div class="feed-buttons">
          ${this.isToken
            ? html`
                <button class="" @click=${this.tabsChange}>Your Feed</button>
              `
            : null}
          <button class="active" @click=${this.tabsChange}>Global Feed</button>
        </div>
        <hr />
        <div>
          ${this.selectedTag
            ? html`
                Selected Tag: ${this.selectedTag}
                <hr />
              `
            : null}
        </div>
        <div>
          ${this.articles.map(value => {
            return html`
              <div class="article-div" @click=${this.articleView.bind(
                this,
                value.slug
              )}>
                <user-tag
                  username=${value.author.username}
                  postDate=${value.updatedAt}
                  userImg=${value.author.image}
                ></user-tag>
                <heart-toggler
                  .click=${this.likePost}
                  hearts=${value.favoritesCount}
                ></heart-toggler>
                <article-preview-tag
                  title=${value.title}
                  description=${value.description}
                ></article-preview-tag></a>
              </div>
            `;
          })}
        </div>
        <div class="pages-div">
          ${pagesArr.map(
            val =>
              html`
                <page-indicator
                  .pageChange=${this.pageChange}
                  value=${val}
                ></page-indicator>
              `
          )}
        </div>
      </div>
    `;

    const allContent = html`
      <div class="wrapper">
        <div class="all-content-div">
          ${contentSection} ${tagSection}
        </div>
      </div>
    `;

    const footer = html``;

    return html`
      ${navbar} ${banner} ${allContent} ${footer}
    `;
  }
}

window.customElements.define("home-page", HomePage);
