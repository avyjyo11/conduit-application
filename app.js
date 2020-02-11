import { Router } from "@vaadin/router";
import "./src/pages/signin-page";
import "./src/pages/home-page";
import "./src/pages/signup-page";
import "./src/pages/article-page";
import "./src/pages/yoursetting-page";
import "./src/pages/article-view-page";


const outlet = document.querySelector("main");
const router = new Router(outlet);
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/sign-in", component: "signin-tag" },
  { path: "/sign-up", component: "signup-tag" },
  { path: "/new-post", component: "article-page" },
  { path: "/setting", component: "yoursetting-tag" },
  {path: "/view-article/:slug",component:"view-article"}
]);
