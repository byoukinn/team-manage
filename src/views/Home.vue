<template>
    <div class="home-top">
        <div class="row home-content">
            <div class="col-xs-3 sidebar">
                <Panel>
                   <Sidebar/>
                </Panel>
                 
            </div>
            <div class="col-xs-9 showbox">
                <Panel :title="title">
                    <Article :article="article" />
                </Panel>

            </div>
        </div>
        <div class="row conveyor">
            <div class="col-xs-12" >
                <Panel :title="conveyor ">
                <Conveyor >
                    <Conveyor-Row v-for="data in conveyorData" :key="data.id" :data="data" />
                </Conveyor>
            </Panel>

            </div>
        </div>
    </div>
</template>

<script>
    import Article from '@/components/Article.vue'
    // @ is an alias to /src
    import Panel from '@/components/Panel.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Conveyor from '@/components/Conveyor.vue'
    import ConveyorRow from '@/components/Conveyor/ConveyorRow.vue'
    import pool from '@/config.js'

    export default {
        name: 'home',
        data() {
            return pool.homeData()
        },
        components: {
            Sidebar,
            Conveyor,
            ConveyorRow,
            Panel,
            Article,
        }
    }
</script>

<style scoped>
    .showbox {
        padding-left: 0px;
    }
    .home-top>div {
        margin: 15px auto;
    }
</style>