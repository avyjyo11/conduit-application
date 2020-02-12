import { Router } from "@vaadin/router";
import "./src/pages/signin-page";
import "./src/pages/home-page";
import "./src/pages/signup-page";
import "./src/pages/article-page";
import "./src/pages/yoursetting-page";
import "./src/pages/article-view-page";
<<<<<<< HEAD
import "./src/pages/test";
import "./src/pages/userprofile-page";
=======
>>>>>>> 7660a2b045011e186b2e2bf0c84584a386f7a986


const outlet = document.querySelector("main");
const router = new Router(outlet);
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/sign-in", component: "signin-tag" },
  { path: "/sign-up", component: "signup-tag" },
  { path: "/new-post", component: "article-page" },
  { path: "/setting", component: "yoursetting-tag" },
<<<<<<< HEAD
  { path:"/profile",component:"userprofile-page"},
  { path: "/test/:id", component: "test-page" },
  { path: "/view-article/:slug",component:"view-article"}
=======
  {path: "/view-article/:slug",component:"view-article"}
>>>>>>> 7660a2b045011e186b2e2bf0c84584a386f7a986
]);
