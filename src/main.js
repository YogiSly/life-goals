import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './assets/css/normalize.css'
import './assets/scss/styles.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './config/firebase.js'
// import firebase from 'firebase'

// const webapp =
initializeApp(firebaseConfig)
// const analytics = getAnalytics(webapp);

const app = createApp(App)
  app.use(router)
  app.use(store)
  app.use(VueAxios, axios)
  // app.use(webapp)
  app.mount('#app');