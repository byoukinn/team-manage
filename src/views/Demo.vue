<!-- 测试组件 -->

<template>
    <div>
        <h3>这里是Demo</h3>

            <Panel title='团队简介'  class="demo-height">
                <Conveyor  :datas='conveyorData' :column='false' />
            </Panel>


    </div>
</template>

<script>
    import Panel from '@/components/Panel.vue'
    import Conveyor from '@/components/Conveyor.vue'

    export default {
        name: 'Demo',
        data() {
            return {
                timer: null,
                conveyorData: [{
                        img: require("@/assets/cloud.png"),
                        desc: 'hello',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'xxx',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'qqq',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'www',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'eee',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'rrr',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'tttt',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'yyyy',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'uuuu',
                    },
                ],

            }
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
        created: function () {},
        components: {
            Panel,
            Conveyor,
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