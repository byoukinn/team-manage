<template>
    <div id="demo" class="conveyor-img" @mouseover="pause()" @mouseout="play()">
        <div class="conveyor-bar" v-if="!column">
            <div id="demo1">
                <div class="conveyor-piece" v-for="item in conveyorData" :key="item.id">
                    <img :src="item.src" alt="">
                    <p>{{ item.desc }}</p>
                </div>
            </div>
            <div id="demo2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Conveyor',
        data: function () {
            return {
                /**
                 * 轮播图的 路径: src， 描述: desc
                 * 图片需要require()方法请求进来
                 */
                conveyorData: [
                    {
                        src: require("@/assets/cloud.png"),
                        desc: 'hello',
                    },
                    {
                        src: require("@/assets/cloud.png"),
                        desc: 'xxx',
                    },
                    {
                        src: require("@/assets/cloud.png"),
                        desc: 'qqq',
                    },
                    {
                        src: require("@/assets/cloud.png"),
                        desc: 'www',
                    },
                    {
                        src: require("@/assets/logo.png"),
                        desc: 'eee',
                    },
                    {
                        src: require("@/assets/logo.png"),
                        desc: 'rrr',
                    },
                    {
                        src: require("@/assets/logo.png"),
                        desc: 'tttt',
                    },
                    {
                        src: require("@/assets/logo.png"),
                        desc: 'yyyy',
                    },
                    {
                        src: require("@/assets/logo.png"),
                        desc: 'uuuu',
                    },
                ],
                demo: null,
                demo1: null,
                demo2: null,
                ms: null,
                timer: null,
                /**
                 * true 为垂直向上滚动， false 为水平向左滚动 
                 */
                column: false,
            }
        },
        mounted: function () {
            /**
             * 轮播图
             */
            this.demo = document.getElementById("demo");
            this.demo1 = document.getElementById("demo1");
            this.demo2 = document.getElementById("demo2");
            this.ms = 6;
            this.demo2.innerHTML = this.demo1.innerHTML;
            this.timer = null;
            this.move();
        },
        methods: {
            move: function () {
                var offset = this.column ? 'offseHeight' : 'offsetWidth';
                var scroll = this.column ? 'scrollTop' : 'scrollLeft';
                if (this.demo2[offset] - this.demo[scroll] <= 0) {
                    this.demo[scroll] -= this.demo1[offset];
                } else {
                    this.demo[scroll]++;
                }
                this.timer = setTimeout(this.move, this.ms);
            },
            pause: function () {
                clearTimeout(this.timer);
            },
            play: function () {
                this.timer = setTimeout(this.move, this.ms);
            }
        },
    }
</script>

<style scoped>
    /**
    * 轮播图的高度
    */
    .conveyor-img {
        padding: 5px;
        overflow: hidden;
    }

    .conveyor-piece {
        display: flex;
        flex-flow: column nowrap;
    }

    .conveyor-piece>img {
        height: 160px;
    }

    .conveyor-bar,
    #demo1,
    #demo2 {
        display: flex;
    }

    p {
        text-align: center;
    }
</style>