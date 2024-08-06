import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPersistedstate from "pinia-plugin-persistedstate";
import jQuery from "jquery";
import LoadScript from "vue-plugin-load-script";
import '../src/assets/style.css';

const pinia = createPinia();
pinia.use(piniaPersistedstate);

const app = createApp(App);
window.$ = window.jQuery = jQuery;

app.use(pinia);
app.use(router);
app.use(LoadScript);
app.mount("#app");