<template>
    <div class="home-top">
        <div class="row">
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
        <div class="row">
            <div class="col-xs-12 conveyor" >
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
 
    export default {
        name: 'home',
        data() {
            return this.$store.state.HomeModule
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
    .sidebar, .conveyor {
        text-align: center;
    }

</style>


