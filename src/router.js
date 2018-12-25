import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store'
console.log('危险！ex12', store.state.MenuModule.menus[0])

function getChildren() {
  var root = store.state.MenuModule.menus[0].children
  var arr = []
  var queue = root.slice() // 必须是复制的，否则影响到原配置文件
  while (queue.length) {
    var pop = queue.shift()
    var children = pop.children
    children ? queue = queue.concat(children) : queue
    // 放入arr即放入routes的children中
    var e = Object.assign({}, pop)
    console.log('type', e.type, e)
    if (e.type === 'button') {
      e.children = []
    }
    arr.push(e)
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
      children: [],
      meta: {
        breadcrumbName: "首页",
      },
    },
    {
      path: '/about',
      name: 'about',
      children: [],
      component: () => import('./views/About.vue'),
      meta: {
        breadcrumbName: "关于",
      },
    },
    {
      path: '/demo',
      name: 'demo',
      children: [],
      component: () => import('./views/Demo.vue'),
      meta: {
        breadcrumbName: "测试",
      },
    },
    {
      path: '/teachers',
      name: 'teachers',
      children: [],
      component: () => import('./views/Teachers.vue'),
      meta: {
        breadcrumbName: "骨干师资",
      },

    },
    {
      path: '/content',
      name: 'content',
      isDropdown: true,
      component: () => import('./views/Content.vue'),
      meta: {
        breadcrumbName: "成果展示在router",
      },
      children: getChildren(),
    },
  ]
})