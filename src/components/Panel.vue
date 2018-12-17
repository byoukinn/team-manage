<template>
    <div class="panel-top">
        <div class="panel-row z-idx-1">
            <div class="panel-title">
                <h3>{{ title }}</h3>
            </div>
            <div class="panel-more" v-if="more">
                <a :href="more">more</a>
            </div>
        </div>
        <slot class="z-idx-2"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Panel',
        props: ['title', 'more'],
    }
</script>

<style scoped>
    .panel-top {
        overflow: hidden;
        width: 100%;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        display: inline-flex;
        align-items: baseline;
        flex-flow: column nowrap;
    }
    .panel-row {
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
    }
    .panel-more {
        text-align: right;
    }
    .z-idx-1 {
        z-index: 1;
    }
    .z-idx-2 {
        z-index: 2;
    }
</style>