import { createRouter, createWebHistory } from 'vue-router'
import ViewMain from '../views/ViewMain.vue'
import ViewAuth from '../views/ViewAuth.vue'
import ViewGoal from '../views/ViewGoal.vue'

const routes = [
  { path: '/', component: ViewMain },
  { path: '/auth', component: ViewAuth },
  { path: '/goal', component: ViewGoal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router