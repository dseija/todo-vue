import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { appRouter } from './app';
import { App } from './app';

const pinia = createPinia();
const app = createApp(App);

app.use(VueCookies);
app.use(pinia);
app.use(appRouter);
app.mount('#app');

const { $cookies } = app.config.globalProperties;
export { $cookies };
