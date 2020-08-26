import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import KijiIchiran from '../views/KijiIchiran.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/kijiIchiran',
    name: 'KijiIchiran',
    component: KijiIchiran
  },
  {
    path: '/Test',
    component: Test
  },
  { path: '/', redirect: '/Home' }
]

const router = new VueRouter({
  routes
})

export default router
