<template>
  <div class="row">
    <span class="pull-left">{{prefix}}</span>
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
      this.updateBreadcrumb();
    },
    data() {
      return {
        prefix: '您的位置：', // 页面标题
        brumblist: [] // 路由集合
      }
    },
    props: ['separator'],
    methods: {
      updateBreadcrumb() {
        var list = [{meta: {
            breadcrumbName: '首页'
          },
          path: '/',
        }]
        // 由于数据配置问题，在开头多了一个/content，尝试把他剔除了。
        var r = this.$route.matched
        var append = r.slice()
        this.brumblist = list.concat(append)
      }
    },
    watch: {
      $route() {
        this.updateBreadcrumb()
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