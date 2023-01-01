import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import { appAxios } from "./utils/appAxios.js";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.scss";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component("Toast", Toast);
app.provide("appAxios", appAxios);

app.mount('#app');