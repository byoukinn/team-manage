<!-- 测试组件 -->

<template>
    <div>
        <h3>这里是Demo</h3>

        <Panel title='团队简介' class="demo-height">
            <Conveyor :column="false">
                <Conveyor-Row  v-for="(data, i) in conveyorData" :key="data.id" :data="data" :index="i"/>
            </Conveyor>
            <h3 v-for="num in 2" :key="num" :id="'canvas' + num">得到的结果： {{num}}</h3>
        </Panel>

    </div>
</template>

<script>
    import Panel from '@/components/Panel.vue'
    import Conveyor from '@/components/Conveyor.vue'
    import ConveyorRow from '@/components/Conveyor/ConveyorRow.vue'
    import pool from '@/config.js'

    export default {
        name: 'Demo',
        data() {
            return pool.demoData();
        },
        props: ['list'],
        methods: {
            runApp: function () {

            },
            play: function () {
                this.timer = setInterval(this.runApp, 1000 / 60)
            },
            pause: function () {
                clearInterval(this.timer)
            },
        },
        components: {
            Panel,
            Conveyor,
            ConveyorRow,
        },
    }
</script>


<style scoped>
    div {
        width: 100%;
    }

    .demo-height {
        height: 300px;
    }
</style>