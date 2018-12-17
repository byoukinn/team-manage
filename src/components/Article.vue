<template>
    <div class="article-top">
        <h3 v-if="article.title">{{ article.title }}</h3>
        <div class="article-row">
            <div class="para-group">
                <p v-for="item in article.paragraph" :key="item.id">{{ item }}</p>
            </div>
            <div class="img-group" v-if="article.img">
                <img v-for="i in article.img" :key='i.id' :src="i.src" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: ['article', 'img'],
}
</script>

<style scoped>
    .article-top p {
        text-align: left;
        line-height: 1.5em;
        text-indent: 2em;
    }
    .article-top p img {
        text-align: center;
    }
    .article-top, .article-row, .img-group {
        display: flex;
        flex-flow: row;
        width: 100%;
    }
    .article-top .img-group {
        align-items: flex-start;
    }
    .article-row>div {
        padding: 10px;
    }
    .article-row>div:last-child {
        padding-left: 0px; 
    }

</style>
