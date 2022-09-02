import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/Home.vue'
import DetailView from '../view/UserDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router