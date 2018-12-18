<template>
    <div id="conveyor" @mouseover="pause()" @mouseout="play()">
        <div  :class="{'conveyor-bar' : !this.column}">
            <Conveyor-Col v-if="column" :datas='datas' />
            <Conveyor-Row v-else :datas='datas' />
            <div id="canvas2"></div>
        </div>
    </div>
</template>


<script>
    import ConveyorCol from '@/components/Conveyor/ConveyorCol.vue'
    import ConveyorRow from '@/components/Conveyor/ConveyorRow.vue'
    // FIXME: 刷新后，宽度是不预期的，被父节点定了。
    // FIXME: PANEL是他的父节点。
    export default {
        name: 'Conveyor',
        props: ['datas', 'column'],
        data: function () {
            return {
                // 轮播图的 路径: src， 描述: desc
                // 图片需要require()方法请求进来
                convey: null,
                c1: null,
                c2: null,
                ms: 6,
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
            this.c2.innerHTML = this.c1.innerHTML;
            this.timer = null;
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
            getSize: function(dom) {
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
            move: function () {
                var 
                    axis = this.getTransform(this.c1),
                    x = this.column ? axis.x : this.calc(axis.x),
                    y = !this.column ? axis.y : this.calc(axis.y);
                this.setTransform(this.c1, x, y);
                this.setTransform(this.c2, x, y);
                this.timer = setTimeout(this.move, this.ms);
            },
            pause: function () {
                clearTimeout(this.timer);
            },
            play: function () {
                this.timer = setTimeout(this.move, this.ms);
            }
        },
        components: {
            ConveyorCol,
            ConveyorRow,
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
