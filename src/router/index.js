import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/raffle', name: 'Raffle', component: () => import('../views/raffle/index.vue') },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
