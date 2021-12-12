import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Passwords.vue'
import Workshop from '../views/Workshop.vue'
import NewPassword from '@/views/NewPassword'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/NewPassword',
    name: 'NewPassword',
    component: NewPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
