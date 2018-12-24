import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store'
console.log('危险！ex12', store.state.MenuModule.menus[0])

function getChildren() {
  var root = store.state.MenuModule.menus[0]
  var arr = []
  var queue = [root]
  while (queue.length) {
      var s = queue.shift()
      arr.push(s)
      var children = s.children
      queue.concat(children)
  }
  return arr
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumbName: "首页",
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        breadcrumbName: "关于",
      },
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue'),
      meta: {
        breadcrumbName: "测试",
      },
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('./views/Teachers.vue'),
      meta: {
        breadcrumbName: "骨干师资",
      },

    },
    {
      path: '/content',
      name: 'content',
      component: () => import('./views/Content.vue'),
      meta: {
        breadcrumbName: "成果展示",
      },
      children: getChildren(),
    },
  ]
})