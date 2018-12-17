<template>
    <div class="row footer">
        <div class="col-xs-10 col-xs-offset-1 col-lg-6 col-lg-offset-3">
            <p v-for="item in content" :key="item.id">{{ item }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: ['content']
    }
</script>

<style scoped>
    .footer {
        background-color: #025e3a;
    }

    .footer>div {
        padding: 35px;
    }

    .footer p {
        text-align: center;
        font-size: 12px;
        color: #ffffff;
    }
</style>