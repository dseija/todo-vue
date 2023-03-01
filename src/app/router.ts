import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const appRouter = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Home }],
});

export default appRouter;
