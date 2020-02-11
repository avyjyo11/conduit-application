import { LitElement, html, css } from "lit-element";
import "../components/navigation.component";
import "../components/tag-button.component";
import "../components/userInfo.component";
import "../components/article-preview.component";
import "../components/page-indicator.component";
import "../components/footer.component";
import { cssStyles } from "../styles/cssStyles";

class HomePage extends LitElement {
  constructor() {
    super();
    this.tags = [];
    this.articles = [];
    this.pages = 0;
    this.pageChange = this.pageChange.bind(this);

    this.isToken =
      window.localStorage.getItem("token") === null ||
      window.localStorage.getItem("token") === ""
        ? false
        : true;
  }

  static get properties() {
    return {
      articles: { type: Array },
      tags: { type: Array },
      pages: Number,
      isToken: { type: Boolean }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    fetch("https://conduit.productionready.io/api/articles?limit=10")
      .then(res => res.json())
      .then(data => {
        this.articles = [...data.articles];
        this.pages = data.articlesCount / 10;
      })
      .catch(err => console.log(err));

    fetch("https://conduit.productionready.io/api/tags?limit=20")
      .then(res => res.json())
      .then(data => {
        this.tags = [...data.tags];
      })
      .catch(err => console.log(err));
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
      `
    ];
  }

  pageChange(e) {
    let offset = (e.target.innerText - 1) * 10;
    fetch(
      `https://conduit.productionready.io/api/articles?limit=10&offset=${offset}`
    )
      .then(res => res.json())
      .then(data => {
        this.articles = data.articles;
        window.scrollTo(0, 0);
      })
      .catch(err => console.log(err));
  }

  render() {
    const pagesArr = [];
    for (var i = 1; i <= this.pages; i++) {
      pagesArr.push(i);
    }

    console.log("rendered");
    const navbar = html`
      <navigation-tag></navigation-tag>
    `;

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
                <tag-button name=${val}></tag-button>
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
                <button>Your Feed</button>
              `
            : null}
          <button class="active">Global Feed</button>
        </div>
        <hr />
        <div>
          ${this.articles.map(value => {
            return html`
              <div>
                <user-tag
                  username=${value.author.username}
                  postDate=${value.updatedAt}
                  userImg=${value.author.image}
                  hearts=${value.favoritesCount}
                ></user-tag>
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

    const footer = html`
      <footer-section></footer-section>
    `;

    return html`
      ${navbar} ${banner} ${allContent} ${footer}
    `;
  }
}

window.customElements.define("home-page", HomePage);
