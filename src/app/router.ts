import { createRouter, createWebHistory } from 'vue-router';
import { getUserSessionToken } from '../features/user';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import Profile from '../pages/Profile.vue';
import Signin from '../pages/Signin.vue';
import Signup from '../pages/Signup.vue';

const authRequired = () =>
  !getUserSessionToken() ? { path: '/signin' } : true;

const validateActiveSession = () =>
  getUserSessionToken() ? { path: '/' } : true;

const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', component: NotFound },

    {
      path: '/',
      component: Home,
      beforeEnter: authRequired,
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: authRequired,
    },

    {
      path: '/signin/:action?/:status?',
      component: Signin,
      props: true,
      beforeEnter: validateActiveSession,
    },
    { path: '/signup', component: Signup, beforeEnter: validateActiveSession },
  ],
});

export default appRouter;
