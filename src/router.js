import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
      children: [
        {
          path: '/content/1',
          name: 'content1',
          component: () => import('./views/Content.vue'),
          meta: {
            breadcrumbName: "成果展示内容页1",
          },
        },
        {
          path: '/content/2',
          name: 'content1',
          component: () => import('./views/Content.vue'),
          meta: {
            breadcrumbName: "成果展示内容页2",
          },
        },
      ],
    },
    // this.$store.state.MenuModule.
  ]
})