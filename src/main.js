import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'
import store from './store/index.js'
import './assets/css/normalize.css'
import './assets/scss/styles.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App);
  app.use(router);
  app.use(store)
  app.use(VueAxios, axios)
  app.mount('#app');