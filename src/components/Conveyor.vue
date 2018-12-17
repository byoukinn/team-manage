<template>
    <div id="conveyor" class="conveyor-top" @mouseover="pause()" @mouseout="play()">
        <div :class="{'conveyor-bar' : !this.column}">
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
                /**
                 * 轮播图的 路径: src， 描述: desc
                 * 图片需要require()方法请求进来
                 * */
                convey: null,
                c1: null,
                c2: null,
                ms: null,
                timer: null,
                offset: '',
                scroll: '',

                /**
                 * true 为垂直向上滚动， false 为水平向左滚动 
                 */
            }
        },
        mounted: function () {
            /**
             * 轮播图
             */
            this.convey = document.getElementById("conveyor");
            this.c1 = document.getElementById("canvas1");
            this.c2 = document.getElementById("canvas2");
            this.ms = 1;
            this.c2.innerHTML = this.c1.innerHTML;
            this.timer = null;
            var className = this.column ? 'vertical' : 'horizon';
            this.c1.className = this.c1.className + " " + className;
            this.c2.className = this.c2.className + " " + className;
            this.offset = this.column ? 'offsetHeight' : 'offsetWidth';
            this.scroll = this.column ? 'scrollTop' : 'scrollLeft';
            this.move();
        },
        methods: {
            move: function () {
                if (this.c2[this.offset] - this.convey[this.scroll] <= 0) {
                    this.convey[this.scroll] -= this.c1[this.offset];
                } else {
                    this.convey[this.scroll] += 5;
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
        components: {
            ConveyorCol,
            ConveyorRow,
        },
    }
</script>


<style scoped>
    /**
    * 轮播图的高度
    */
    .conveyor-top {
        height: 100%;
        overflow: hidden;
        width: 100%;
    }

    .conveyor-bar {
        display: flex;
    }

    /*
        canvas1 在 ConveyorCol, ConveyorRow 文件里
    */
    #canvas1,
    #canvas2 {
        display: flex;
    }

    p {
        text-align: center;
    }

    .vertical {
        flex-direction: column;
    }

    .hirizon {
        flex-direction: row;
    }
</style>