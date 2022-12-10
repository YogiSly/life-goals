import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'
import ViewMain from './views/ViewMain.vue'
import ViewAuth from './views/ViewAuth.vue'

const routes = [
  { path: '/', component: ViewMain },
  { path: '/auth', component: ViewAuth },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
  app.use(router);
  app.mount('#app');