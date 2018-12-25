<template>
    <div class="row">
        <BreadCrumb class="col-xs-12"></BreadCrumb>
        <div class="col-xs-3 menu-head">
            <TreeMenuItem :menus='menus'></TreeMenuItem>
        </div>
        <section class="col-xs-9">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    import TreeMenuItem from "@/components/TreeMenu/TreeMenuItem.vue";
    import BreadCrumb from '../components/BreadCrumb.vue';
    
    export default {
        data() {
            console.log('routes', this.$router.options.routes)
            return {
                menus: this.$store.state.MenuModule.menus,
                content: this.$store.state.MenuModule.content,
            };
        },
        components: {
            TreeMenuItem,
            BreadCrumb,
        },
         
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



    .slidable {
        padding: 15px 0;
    }

    .menu-inner {
        padding: 0;
    }
</style>