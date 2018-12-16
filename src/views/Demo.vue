<!-- 测试组件 -->

<template>
    <div>
        <h3>这里是Demo</h3>
        <transition-group>
            <ul>
                <li v-for="item in list"> {{item.name}} </li>
            </ul>
        </transition-group>
        <LabelBar label='团队简介' url='#'><HelloWorld msg='团队简介下面的' /></LabelBar>
        
    </div>
</template>

<script>
import LabelBar from '@/components/LabelBar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Demo', 
    data () {
        return {
            timer: null,

        }
    },
    props: ['list'],
    methods: {
        runApp: function() {
              
        },
        play: function() {
            this.timer = setInterval(this.runApp, 1000/60)
        },
        pause: function() {
            clearInterval(this.timer) 
        },
    },
    created: function() {
        this.play()
    },
    components: {
        HelloWorld,
        LabelBar,
    }, 
}
</script>


<style>
    div.d233 {
        background: aliceblue;
    }
</style>
