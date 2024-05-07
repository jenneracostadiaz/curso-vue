import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import createPersistedState from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';
import axios from 'axios';

window.axios = axios;

window.axios.defaults.baseURL = 'http://projects.local';
window.axios.defaults.headers.common['Accept'] =
	'application/json';
window.axios.defaults.headers.common['Content-Type'] =
	'application/json';
window.axios.defaults.headers.common['X-Requested-With'] =
	'XMLHttpRequest';
// window.axios.defaults.withCredentials = true;

const pinia = createPinia();
pinia.use(({ store }) => {
	store.router = markRaw(router);
});
pinia.use(createPersistedState);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
