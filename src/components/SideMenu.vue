<template>
    <div class="col-xs-3 menu-head">
        <TreeMenuItem :menus='menus'></TreeMenuItem>
    </div>
</template>

<script>
    import $ from 'jquery'
    import TreeMenuItem from "./TreeMenu/TreeMenuItem.vue";
    import menus from '@/store/module/MenuModule'

    export default {
        data() {
            return {
                menus: this.$store.state.MenusModule.menus,
            };
        },
        components: {
            TreeMenuItem,
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

    

    .slidable {
        padding: 15px 0;
    }

    .menu-inner {
        padding: 0;
    }
</style>