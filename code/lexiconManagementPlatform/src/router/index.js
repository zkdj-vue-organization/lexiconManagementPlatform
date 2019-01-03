import Vue from 'vue'
import Router from 'vue-router'
const helloWorld = () => import ('@/components/HelloWorld')
const notFound = () => import ('@/pages/errors/404')
const serverError = () => import ('@/pages/errors/500')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      name: '500',
      path:"/500",
      component:serverError
    },
    {
      name: '404',
      path:"/404",
      component:notFound
    },{
      name: '400+',
      path: '*',
      redirect: '/404'
    }
  ]
})
