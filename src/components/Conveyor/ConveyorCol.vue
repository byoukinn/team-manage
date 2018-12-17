<template>
    <div id='canvas1'>
        <div class='row convey-row' v-for="d in datas" :key="d.id">
            <a :href="d.url">
                <div class="col-xs-4 img-group">
                    <img :src="d.avatar || d.img" :alt="d.name" class="img-thumbnail img-responsive">
                </div>
                <div class="col-xs-8">
                    <strong v-if="d.name"> {{ d.name }} </strong>
                    <p v-if="d.overview"> {{ d.overview }} </p>
                    <a v-if="to" :herf='to' class="conveyor-col-more">[详细信息]</a>
                </div>
            </a>
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
    .convey-row {
        margin: 15px 5px;
    }
    .img-group {
        padding-left: 0px ;
        padding-right: 0px ;
    }
    .img-group img {
        max-height: 100%;
    }
    .conveyor-col-more {
        color: red;
        text-align: right;
    }
</style>