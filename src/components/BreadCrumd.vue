<template>
  <div class="breadEval">
    <div class="breadTitle">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>您的位置：</el-breadcrumb-item>
        <el-breadcrumb-item :to="item.path" v-for="item of breadListLast" :key="item.path">
          {{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    //面包屑解决方案，此方法只适用于面包屑与路由显示顺序一致，例如path：01/02/03 面包屑也是01/02/03
    data() {
      return {
        //手动配置项：breadListRelate为路由与面包屑名称对应关系,breadLoadName为面包屑组件路由
        breadLoadName: '/content',
        breadListRelate: [
          {
            path: '01',
            name: '一级'
          },
          {
            path: '02',
            name: '二级'
          },
          {
            path: '03',
            name: '三级'
          },
        ],
        breadListLast: []
      }
    },
    methods: {
      loadChange() {
        this.breadListLast = []
        if (this.$route.path.indexOf(this.breadLoadName) === -1) {
          console.log('面包屑路由地址breadLoadName没有配置正确！')
        } else {
          let breadListAgo = this.$route.path.split(this.breadLoadName)
          // let breadListAgo = '/index/indexSchool/breadList/01/02/03'.split(this.breadLoadName)
          let breadList = breadListAgo[1].split('/')
          let o = {}
          let breadIndex = ''
          //删除掉数组的前1个，提升遍历性能
          breadList.splice(0, 1)
          //考虑到顺序问题，只能先遍历breadList,再遍历breadListRelate
          for (let p of breadList) {
            for (let q of this.breadListRelate) {
              if (p === q.path) {
                breadIndex += '/' + q.path
                o.path = breadListAgo[0] + this.breadLoadName + breadIndex
                o.name = q.name
                this.breadListLast.push(o)
                o = {}
              }
            }
          }
          // 打印路由配置
          // console.log(JSON.stringify(this.breadListLast)) 
        }
      }
    },
    watch: {
      $route(to, from) {
        this.loadChange()
        // console.log(to.path);
      }
    },
    //页面挂载之后,解析路由，给出面包屑，路由里面一定要含有breadCom组件的path
    mounted: function () {
      this.loadChange()
    }
  };
</script>

<style scoped>
  .breadEval {
    position: relative;
    font-size: 14px;
    height: 100%; 
  }

  .breadEval .breadTitle{
    padding: 15px 30px;
  }
</style>
