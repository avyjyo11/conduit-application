import {Router} from '@vaadin/router';
import './src/pages/signin-page';
import './src/pages/home-page';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
    {path:'/', component:'home-page'},
    {path:'/sign-in', component:'signin-tag'}
]);