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
      path: '/news',
      name: 'news',
      component: () => import('../views/new-noti.vue')
    },
    {
      path: '/AddOrDrop',
      name: 'add_drop',
      component: () => import('../views/add_drop.vue')
    },
    {
      path: '/ListName',
      name: 'list_name',
      component: () => import('../views/viewlist.vue')
    },
  ]
})

export default router
