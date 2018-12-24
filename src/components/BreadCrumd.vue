<template>
  <div class="row">
    <span class="pull-left title">{{title}}</span>
    <ul class="pull-left breadcrumb">
      <li v-for="(item,index) in brumblist" :key="index">
        <router-link :to="item.path">{{item.meta.breadcrumbName}}</router-link>
        <span class="separator" v-if="index !== brumblist.length-1">{{separator}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    created() {
      this.getBreadcrumb();
    },
    data() {
      return {
        title: '您的位置：', // 页面标题
        brumblist: [] // 路由集合
      }
    },
    props: ['separator'],
    methods: {
      getBreadcrumb() {
        this.brumblist.push({
            meta: {
              breadcrumbName: '首页'
            },
            path: '/',
          })
        this.brumblist = this.brumblist.concat(this.$route.matched)
        // this.$route.matched.forEach((item, index) => {
        //   // 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
        //   // 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
        //   item.meta.breadcrumbName === '首页' ? item.path = '/' : '配置失败'
        //   // this.$route.path === item.path ? this.title = item.meta.breadcrumbName : ''
        // })
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    }
  }
</script>

<style scoped>
  .row {
    padding: 0px;
    padding-top: 0;
    margin: 10px 15px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


  li a {
    text-decoration: none;
    color: #333;
  }

  li a:hover {
    color: #20a0ff;
    text-decoration: underline;
  }

  .separator {
    display: inline-block;
    padding: 0 5px;
  }


  .breadcrumb {
    padding: 0 5px;
  }
</style>