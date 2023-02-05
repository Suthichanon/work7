import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/news-noti',
      name: 'news-noti',
      component: () => import('../views/new-noti.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('../views/view.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('../views/view.vue')
    },
    {
      path: '/add_drop',
      name: 'add_drop',
      component: () => import('../views/add_drop.vue')
    },
  ]
})

export default router
