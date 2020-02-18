import { LitElement, html, css } from "lit-element";
import "../components/navigation.component";
import "../components/tag-button.component";
import "../components/userInfo.component";
import "../components/article-preview.component";
import "../components/page-indicator.component";
import "../components/heart-toggler";
import "../components/footer.component";
import { cssStyles } from "../styles/cssStyles";
import { Router } from "@vaadin/router";
import { get, getwithauth, put } from "../services/api.services";
import {
  DEFAULT_IMG as defaultImg,
  DEFAULT_NAME as defaultName
} from "../constants/defaults.config";

class UserProfile extends LitElement {
  constructor() {
    super();
    this.activeTab = "my";
    this.tags = [];
    this.articles = [];
    this.myArticles = [];
    this.favArticles = [];
    this.pages = 0;
    this.myPages = 0;
    this.favPages = 0;
    this.username = defaultName;
    this.userBio = "";
    this.userImage = defaultImg;

    this.pageChange = this.pageChange.bind(this);

    this.isToken = window.localStorage.getItem("token") ? true : false;
  }

  static get properties() {
    return {
      articles: { type: Array },
      tags: { type: Array },
      pages: Number,
      isToken: { type: Boolean },
      activeTab: String
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    if (this.isToken) {
      try {
        let url = `/user`;
        let { user } = await getwithauth(url);
        this.username = user.username;
        this.userBio = user.bio;
        this.userImage = user.image;

        url = `/tags?limit=20`;
        let { tags } = await get(url);
        this.tags = [...tags];

        url = `/articles?author=${this.username}&limit=10`;
        var { articles, articlesCount } = await get(url);
        this.myArticles = [...articles];
        this.myPages = articlesCount / 10;

        url = `/articles?favorited=${this.username}&limit=10`;
        var { articles, articlesCount } = await get(url);
        this.favArticles = [...articles];
        this.favPages = articlesCount / 10;
        this.articles = this.myArticles;
        this.pages = this.myPages;
      } catch (error) {}
    }
  }

  static get styles() {
    return [
      cssStyles,
      css`
        * {
          margin: 0px;
          padding: 0px;
        }
        .jumbotron {
          padding: 30px;
          background-color: #f3f3f3;
        }

        .center {
          text-align: center;
        }

        .jumbotron #bio {
          font-size: 12px;
          font-weight: light;

          color: #777;
        }

        .jumbotron #name {
          font-size: 1.5em;
          margin: 5px;
          font-weight: 600;
          padding: 0;
          color: Black;
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

        .feed-buttons .active {
          border-bottom: 2px solid var(--theme-color);
          color: var(--theme-color);
        }
        .avatar {
          vertical-align: middle;
          width: 125px;
          height: 125px;
          border-radius: 50%;
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

        .jumbotron-wrap {
          position: relative;
        }

        .edit-settings {
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 6px 10px;
          border: 1px solid #777aa1;
          color: #777aa1;
          cursor: pointer;
        }

        .edit-settings:hover {
          background-color: #777aa1;
          color: #fff;
        }
      `
    ];
  }

  tabsChange(e) {
    let buttons = e.target.parentNode.children;
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    e.target.classList.add("active");

    if (this.isToken) {
      if (e.target.innerText === "My Articles") {
        this.articles = this.myArticles;
        this.pages = this.myPages;
        this.activeTab = "my";
      } else {
        this.articles = this.favArticles;
        this.pages = this.favPages;
        this.activeTab = "fav";
      }
    }
  }

  pageChange(e) {
    let offset = (e.target.innerText - 1) * 10;
    const fetchURL =
      this.activeTab === "my"
        ? `/articles?author=${this.username}&limit=10&offset=${offset}`
        : `/articles?favorited=${this.username}&limit=10&offset=${offset}`;

    get(fetchURL)
      .then(data => {
        this.articles = [...data.articles];
        window.scrollTo(0, 0);
      })
      .catch(err => console.log(err));
  }

  editSettingsClick(e) {
    Router.go("/setting");
  }

  articleView(slug) {
    Router.go(`/view-article/${slug}`);
  }

  render() {
    const pagesArr = [];
    for (var i = 1; i <= this.pages; i++) {
      pagesArr.push(i);
    }

    const navbar = html``;

    const banner = html`
      <div class="jumbotron center">
        <div class="wrapper jumbotron-wrap">
          <img src=${this.userImage} alt="Avatar" class="avatar" />
          <p id="name">${this.username}</p>
          <p id="bio">${this.userBio}</p>
          <button class="edit-settings" @click=${this.editSettingsClick}>
            Edit Your Settings
          </button>
        </div>
      </div>
    `;

    const tagSection = html`
      <div class="tag-section">
        <div>
          <h4>Popular tags</h4>
          ${this.tags.map(
            val =>
              html`
                <tag-button name=${val}></tag-button>
              `
          )}
        </div>
      </div>
    `;

    const contentSection = html`
      <div class="content-section">
        <div class="feed-buttons">
          <button class="active" @click=${this.tabsChange}>My Articles</button>
          <button class="" @click=${this.tabsChange}>
            Favorited Articles
          </button>
        </div>
        <hr />
        <div>
          ${this.articles.map(value => {
            return html`
              <div
                class="article-div"
                @click=${this.articleView.bind(this, value.slug)}
              >
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
                ></article-preview-tag>
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

customElements.define("user-profile-page", UserProfile);