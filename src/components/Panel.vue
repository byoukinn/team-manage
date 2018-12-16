<template>
    <div class="panel">
        <div>
            <h3>{{ title }}</h3>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Panel',
        props: ['title'],

    }
</script>

<style scoped>
    .panel {
        overflow: hidden;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        display: inline-flex;
        flex-flow: column nowrap;
    }

    .panel h3 {
        text-align: left;
        padding: 10px 20px;
        background-color: #f4f4f4;
        font-size: 18px;
        color: #025e3a;
    }

</style>