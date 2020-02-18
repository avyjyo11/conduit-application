import { Router } from "@vaadin/router";
import "./src/pages/signin-page";
import "./src/pages/home-page";
import "./src/pages/signup-page";
import "./src/pages/article-page";
import "./src/pages/your-setting-page";
import "./src/pages/article-view-page";
import "./src/pages/user-profile-page";

const outlet = document.querySelector("main");
const router = new Router(outlet);
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/sign-in", component: "signin-tag" },
  { path: "/sign-up", component: "signup-tag" },
  { path: "/new-post", component: "article-page" },
  { path: "/setting", component: "your-setting-tag" },
  { path: "/profile", component: "user-profile-page" },
  { path: "/view-article/:slug", component: "view-article" }
]);
