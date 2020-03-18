import Vue from 'vue'
import VueRouter from 'vue-router'
import Img1 from '../components/Img1.vue'
import Img2 from '../components/Img2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Img1',
    name: 'Img1',
    component: Img1
  },
  {
    path: '/Img2',
    name: 'Img2',
    component: Img2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
