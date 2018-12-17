<template>
    <div id='canvas1' class="conveyor-col-top">
        <div class='conveyor-col-outer' v-for="d in datas" :key="d.id">
            <img :src="d.avatar || d.img" :alt="d.name">
            <div class="conveyor-col-inner">
                <strong v-if="d.name"> {{ d.name }} </strong>
                <p v-if="d.overview"> {{ d.overview }} </p>
                <a v-if="to" :herf='to' class="conveyor-col-more">[详细信息]</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConveyorCol',
        props: ['datas', 'to'],
    }
</script>

<style scoped>
    .conveyor-col-outer {
        display: flex;
        padding: 5px;

    }
    .conveyor-col-inner {
        padding-left: 10px; 
    }

    .conveyor-col-top,
    .conveyor-col-inner {
        display: flex;
        flex-flow: column nowrap;
    }


    .conveyor-col-outer>img {
        width: 160px;
    }

    .conveyor-col-more {
        color: red;
        text-align: right;
    }
</style>