import { Router } from "@vaadin/router";
import "./src/pages/signin-page";
import "./src/pages/home-page";
import "./src/pages/signup-page";
import "./src/pages/article-page";
import "./src/pages/your-setting-page";
import "./src/pages/article-view-page";
import "./src/pages/user-profile-page";
import{SETTING,SIGN_IN,SIGN_UP,NEW_POST,PROFILE,VIEW_ARTICLE, HOME } from "./src/constants/routes.config";
const outlet = document.querySelector("main");
const router = new Router(outlet);
router.setRoutes([
  { path: HOME, component: "home-page" },
  { path: SIGN_IN, component: "signin-tag" },
  { path:  SIGN_UP, component: "signup-tag" },
  { path: NEW_POST, component: "article-page" },
  { path: SETTING, component: "your-setting-tag" },
  { path: PROFILE, component: "user-profile-page" },
  { path: VIEW_ARTICLE, component: "view-article" }
]);
