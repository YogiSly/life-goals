import { createRouter, createWebHistory } from 'vue-router'
import ViewMain from '../views/ViewMain.vue'
import ViewAuth from '../views/ViewAuth.vue'

const routes = [
  { path: '/', component: ViewMain },
  { path: '/auth', component: ViewAuth },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router