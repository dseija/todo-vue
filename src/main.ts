import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { appRouter } from './app';
import { App } from './app';
import 'vuetify/styles';
import { loadSavedSettings } from './features/settings';

const { themeMode } = loadSavedSettings();
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: themeMode,
    themes: {
      dark: {
        colors: {
          primary: '#41B883',
          secondary: '#bb86fc',
        },
      },
      light: {
        colors: {
          primary: '#41B883',
          secondary: '#bb86fc',
        },
      },
    },
  },
});

const pinia = createPinia();
const app = createApp(App);

app.use(VueCookies);
app.use(pinia);
app.use(appRouter);
app.use(vuetify);
app.mount('#app');

const { $cookies } = app.config.globalProperties;
export { $cookies };
