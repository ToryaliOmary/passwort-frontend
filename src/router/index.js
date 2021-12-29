import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Passwords from '../views/Passwords.vue'
import NewPassword from '@/views/NewPassword'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/passwords',
    name: 'Password',
    component: Passwords
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
