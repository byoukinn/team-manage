<template>
    <div class="row">
        <div class="col-xs-3 menu-head">
            <TreeMenuItem :menus='menus'></TreeMenuItem>
        </div>
        <section class="col-xs-9">
            <Panel>
                <Article :article='content' />
            </Panel>
        </section>
    </div>
</template>

<script>
    import Panel from "@/components/Panel.vue"
    import TreeMenuItem from "@/components/TreeMenu/TreeMenuItem.vue";
    import Article from "@/components/Article.vue"

    export default {
        data() {
            return {
                menus: this.$store.state.MenusModule.menus,
                content: this.$store.state.MenusModule.content,
            };
        },
        created(){
            this.log();
        },
        components: {
            TreeMenuItem,
            Article,
            Panel
        },
        methods: {
            log: function() {
                this.content = this.$store.state.MenusModule.content;
                setTimeout(this.log, 1)
            }
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