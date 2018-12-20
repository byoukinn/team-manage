<template>
    <div class="panel-top">
        <div class="z-idx-2 ">
            <div v-if="title" class="col-xs-12 panel-row ">
                <div class="col-xs-6 panel-title">
                    <h3>{{ title }}</h3>
                </div>
                <a class="col-xs-6 panel-more text-right" v-if="more" :href="more">
                    more 
                </a>
            </div>
        </div>
        <div class="z-idx-1">
            <div class="col-xs-12 ">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Panel',
        props: ['title', 'more'],
    }
</script>

<style scoped>
    h3 {
        margin-top: 10px;
    }

    .panel-top {
        position: relative;
        overflow: hidden;
        width: 100%;
        border: 1px solid #dbdbdb !important;
        background-color: #fff;
    }

    .panel-row {
        box-shadow: 0px 1px 26px #bbb;
        color: #025e3a;
        text-align: left;
        background-color: #f4f4f4;
        margin: 0px;
        border-left: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;
    }

    /* .panel-row {
        width: 100%;
        box-sizing: border-box;
        align-items: baseline;
        display: flex;
        text-align: left;
        background-color: #f4f4f4;
        color: #025e3a;
    }
    .panel-row>div {
        width: 50%;
    }
    .panel-row>div>h3, .row>div>a {
        font-size: 18px;
        margin: 10px auto;
        padding: 0px 20px;
    }*/
    .panel-more {
        line-height: 44px;

    }

    .z-idx-1 {
        z-index: 1;
        position: relative;
    }

    .z-idx-2 {
        z-index: 2;
        position: relative;
    }
</style>