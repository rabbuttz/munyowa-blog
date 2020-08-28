import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/article',
    component: Article
  },
  {
    path: '/About',
    component: About
  },
  { path: '/', redirect: '/Home' }
]

const router = new VueRouter({
  routes
})

export default router
