<template>
    <div id="conveyor" @mouseover="pause()" @mouseout="play()">
        <div :class="{'conveyor-bar' : !column}">
            <div :class="{'conveyor-row-top' : !column}">
                <div id="canvas1">
                    <slot></slot>
                </div>
                <div id="canvas2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Conveyor',
        props: ['column'],
        data: function () {
            return {
                // 轮播图的 路径: src， 描述: desc
                // 图片需要require()方法请求进来
                convey: null,
                c1: null,
                c2: null,
                timer: null,
                speed: 1,
            }
        },
        mounted: function () {
            /**
             * 轮播图
             */
            this.convey = document.getElementById("conveyor-bar");
            this.c1 = document.getElementById("canvas1");
            this.c2 = document.getElementById("canvas2");
            // 初始化
            this.setup();
            this.move();
        },
        methods: {
            setup: function () {
                var className = this.column ? 'vertical' : 'horizon';
                this.c1.style.transform = 'translate(0px, 0px)'
                this.c2.style.transform = 'translate(0px, 0px)'
                this.c1.className = this.c1.className + " " + className;
                this.c2.className = this.c1.className;
            },
            getSize: function (dom) {
                return this.column ? dom.offsetHeight : dom.offsetWidth;
            },
            calc: function (origin) {
                return (origin - this.speed) % this.getSize(this.c1);
            },
            getTransform: function (dom) {
                var regex = /translate\((-*\d+)px,\s*(-*\d+)px\)/i,
                    t = dom.style.transform,
                    axis = t.match(regex),
                    o = {
                        x: axis[1],
                        y: axis[2],
                    };
                return o;
            },
            setTransform: function (dom, x, y) {
                var r = `translate(${x}px, ${y}px)`;
                dom.style.transform = r;
            },
            /**
             * 实际轮播算法。
             * 原理，操作css的transform属性，让图表移动。
             * 当a表完全播完，直接将移动值置零
             */
            move: function () {
                var
                    axis = this.getTransform(this.c1),
                    x = this.column ? axis.x : this.calc(axis.x),
                    y = !this.column ? axis.y : this.calc(axis.y);
                this.setTransform(this.c1, x, y);
                this.setTransform(this.c2, x, y);
                this.timer = setTimeout(this.move, 6);
            },
            pause: function () {
                clearTimeout(this.timer);
            },
            play: function () {
                this.timer = setTimeout(this.move, 6);
            }
        },
    }
</script>

<style scoped>
    #conveyor {
        display: flex;
    }

    .conveyor-bar {
        display: flex;
        flex-flow: row nowrap;
    }

    .conveyor-row-top #canvas1, 
    .conveyor-row-top #canvas2 {
        display: flex;
    }

    .conveyor-row-top {
        display: flex;
        flex-flow: row nowrap;
    }

    .conveyor-row-outer {
        display: flex;
        flex-flow: column nowrap;
    }

    .conveyor-row-outer>img {
        height: 160px;
    }

    .horizon {
        flex-direction: row;
    }
</style>