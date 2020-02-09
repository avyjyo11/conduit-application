import {Router} from '@vaadin/router';
import './src/pages/signin-page';
import './src/pages/home-page';
import './src/pages/signup-page';
import './src/pages/article-page';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
    {path:'/', component:'home-page'},
    {path:'/sign-in', component:'signin-tag'},
    {path:'/sign-up', component:'signup-tag'},
    {path:'/publish-article', component:'article-page'},
]);