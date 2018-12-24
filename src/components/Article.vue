<template>
    <div>
        <div v-if="article">
            <h3 class="title text-center" v-if="article.title">{{ article.title }}</h3>
            <div class="row">
                <div class="para-group" :class="para_height">
                    <p v-for="item in article.paragraph" :key="item.id">{{ item }}</p>
                </div>
                <div  :class="'img-group col-xs-3'" v-if="article.img">
                    <img 
                        v-for="i in article.img" 
                        :key='i.id' 
                        :src="i.src"
                        :alt="i.desc"
                        :class="'img-responsive'" >
                </div>
            </div>
        </div>
        <div v-else>
            <h3>文章页没有配置成功，请检查在 /src/store/state/menus 目录下的 'menus.name' 与 'contents' 的 Key 是否一致</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: ['article', 'img'],
    computed: {
        para_height: function() { 
            return this.article.img && this.article.img.length ? 'col-xs-9' : 'col-xs-12' 
        } 
    },
}
</script>

<style scoped>
    .row {
        margin: 25px 0px;
    }
    .para-group {
        padding: 10px;
    } 
    p {
        text-align: left;
        line-height: 1.5em;
        text-indent: 2em;
    }
</style>
