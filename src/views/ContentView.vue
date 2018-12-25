<template>
    <Panel>
        <Article :article='content' />
    </Panel>
</template>

<script>
    import Panel from "@/components/Panel.vue"
    import Article from "@/components/Article.vue"

    export default {
        name: 'ContentView',
        data() {
            return {
                content: this.getArticle(),
            }
        },
        components: {
            Article,
            Panel,
        },
        methods: {
            getArticle: function() {
                var articles = this.$store.state.MenuModule.contents
                var name = this.$route.name
                console.log('arts', articles)
                return articles[name]
            }  
        },
        watch: {
            // 监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
            $route: {
                handler: function (to, from) {
                    this.content = this.getArticle();
                },
                deep: true
            }
        },
    }
</script>

<style>

</style>