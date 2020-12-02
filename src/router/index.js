import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      // name: 'Home',
      component: () => import('@/components/views/home')
    },
    {
      path: '/home',
      // name: 'Home',
      component: () => import('@/components/views/home')
    },
    {
      path: '/class',
      // name: 'Class',
      component: () => import('@/components/views/class')
    },
    {
      path: '/profile',
      // name: 'Profile',
      component: () => import('@/components/views/profile')
    },
    {
      path: '/shopcart',
      // name: 'Shopcart',
      component: () => import('@/components/views/shopcart')
    }
  ],
  mode: 'history'
})
