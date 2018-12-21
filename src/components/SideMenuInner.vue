<template>
    <div>
        <div v-for="i in innerList" :key="i.id" class="hello" role="button" @click="slide($event.srcElement)">
            <router-link :to="i.src">{{ i.title }}</router-link>
            <div v-if="i.next && i.next.length > 0" class="slidable">
                <SideMenuInner :innerList="i.next"></SideMenuInner>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    /**
     * TODO: 控制不同的router的样式
     * watch 根据当前的链接来展开对应的目录项
     */
    export default {
        name: 'SideMenuInner',
        props: ['innerList'],
        data() {
            return {
                
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init: function() {
                $(".hello").each(function() {
                    $(this).find('.slidable').hide();
                })
            },
            slide: function(obj) {
                $(obj).find('.slidable').stop().slideToggle();
            }
        }
    }
</script>

<style scoped>

    .slidable {
        text-indent: 2em;
    }

    .hello a,
    .hello a:visited,
    .hello a:hover {
        color: #000000;
        text-decoration: none;
    }

    .hello {
        padding: 10px 0;
    }

    /* .hello a:hover {
        background: #cfcfcf;
    } */


</style>