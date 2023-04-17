import { createApp } from 'vue'
import App from './App.vue'
import router from "@/plugins/router";
import store from "@/plugins/vuex/store";
import Paginate from "vuejs-paginate-next";

createApp(App)
    .use(router)
    .use(store)
    .use(Paginate)
    .mount('#app')
