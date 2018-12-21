<template>
    <div class="col-xs-3 menu-head">
        <div role="button" class="menu-title">
            <div @click="slide()">
                <h4 class="text">{{ menuList.title }}</h4>
                <img src="" alt="">
            </div>
            <div class="menu-line">
                <img :src="require('@/assets/menu-line.png')" alt="">
            </div>
        </div>
        <div class="text menu-inner">
            <SideMenuInner :innerList="menuList.next"></SideMenuInner>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery'
    import SideMenuInner from '@/components/SideMenuInner.vue'
    export default {
        props: ['menuList'],
        methods: {
            slide: function () {
                $('.menu-inner').stop().slideToggle();
            }
        },
        components: {
            SideMenuInner,
        }
    }
</script>

<style scoped>
    .text {
        text-align: left;
        padding: 0 15px;
    }

    .menu-head {
        width: 20%;
        border: 1px solid #dbdbdb;
        background: #ffffff;
        padding: 0;
    }

    .menu-title {
        position: relative;
        color: #025e3a;
    }

    .collapse {
        padding: 15px 15px;
    }

    .collapse:hover {
        background: #eeeeee;
    }

    .menu-line {
        position: absolute;
        bottom: -15px;
    }

    .menu-head h4 {
        font-weight: bold;

    }

    .menu-head a {
        color: black;
        text-decoration: none;
    }

    .active {
        background: #f7f7f7;
    }

    .slidable {
        padding: 15px 0;
    }
</style>