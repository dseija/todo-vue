import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { appRouter } from './app';
import { App } from './app';

const pinia = createPinia();
const app = createApp(App);

app.use(appRouter);
app.use(pinia);
app.mount('#app');
