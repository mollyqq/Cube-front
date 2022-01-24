import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import App from './App.vue'
import store from "./store/index"

createApp(App).use(store)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
