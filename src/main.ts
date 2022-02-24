import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

import VueScrollto from "vue-scrollto";

Vue.use(VueScrollto);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
