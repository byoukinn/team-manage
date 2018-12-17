<template>
    <div class="row header">
        <div class="col-xs-12 col-lg-10 col-lg-offset-1">
            <img class="logo pull-left" src="@/assets/logo.png" alt="广东农工商职业技术学院">
            <div class="pull-left banner">
                <p v-for="item in bannerContent" :key="item.id">{{ item }}</p>
            </div>
        </div>
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