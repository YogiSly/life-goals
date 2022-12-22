import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'
import store from './store/index.js'
import './assets/css/normalize.css'
import './assets/scss/styles.scss'



const app = createApp(App);
  app.use(router);
  app.use(store)
  app.mount('#app');