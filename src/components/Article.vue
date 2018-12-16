<template>
    <div class="article">
        <title v-if="article.title">{{ article.title }}</title>
        <div>
            <p v-for="item in article.paragraph" :key="item.id">{{ item }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: ['article'],
}
</script>

<style>
    p {
        text-align: left;
        padding: 10px 20px;
        font-size: 18px;
    }
</style>
