import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';

const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/', component: Home },
    { path: '/signin/:action?/:status?', component: Signin, props: true },
    { path: '/signup', component: Signup },
  ],
});

export default appRouter;
