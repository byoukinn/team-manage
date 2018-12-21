import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import( './views/Teachers.vue')
    },
    {
        path: '/content',
        name: 'content',
        component: () => import( './views/Content.vue'),
        children:[
            {
                path: '/content/1',
                name: 'content1',
                component: () => import( './views/Content.vue')
            },
        ],
    },
  ]
})
