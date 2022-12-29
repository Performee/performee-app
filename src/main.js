import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import MaterialDashboard from "./material-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");