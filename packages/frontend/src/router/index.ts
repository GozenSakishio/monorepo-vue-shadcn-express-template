import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '../views/WorkView.vue'
import SandboxView from '@/views/SandboxView.vue'
import DataView from '@/views/DataView.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wk',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/db',
      name: 'data',
      component: DataView,
    },
    {
      path: '/pf',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/sb',
      name: 'sandbox',
      component: SandboxView,
    },
  ],
})

export default router
