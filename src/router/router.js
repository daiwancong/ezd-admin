import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Layout from '@/component/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Layout
    }
  ]
})
