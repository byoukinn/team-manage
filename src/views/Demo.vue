<!-- 测试组件 -->

<template>
    <div>
        <h3>这里是Demo</h3>
        <transition-group>
            <ul>
                <li v-for="item in list"> {{item.name}} </li>
            </ul>
        </transition-group>
    </div>
</template>

<script>
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
} 
</script>


<style>
    div.d233 {
        background: aliceblue;
    }
</style>
