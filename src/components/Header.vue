<template>
    <div class="row header">
        <router-link class="col-xs-12" to="/">
            <img class="logo pull-left" src="@/assets/logo.png" alt="广东农工商职业技术学院">
            <div class="pull-left banner">
                <p v-for="item in bannerContent" :key="item.id">{{ item }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['bannerContent'],
    }
</script>

<style scoped>
    .header {
        position: relative;
        padding: 20px;
    }

    .banner {
        margin-top: 10px;
    }

    .banner>p {
        text-align: left;
        font-size: 16px;
        font-weight: bold;
    }
</style>
