import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Trash from '../views/Trash.vue'
import Admin from "@/views/Admin.vue";

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/trash',
    name: 'trash',
    component: Trash
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
