<template>
        <div class='row convey-row'>
            <a :herf='data.to' @mousedown="onmousedown()">
                <div class="col-xs-4 img-group">
                    <img :src="data.avatar || data.img" :alt="data.name" class="img-thumbnail img-responsive">
                </div>
                <div class="col-xs-8">
                    <strong v-if="data.name"> {{ data.name }} </strong>
                    <p class="no-bottom-border" v-if="data.overview"> {{ data.overview }} </p>
                    <a herf='javascript():void' class="red pull-right">[详细信息]</a>
                </div>
            </a>
        </div>
</template>

<script>
    export default {
        name: 'ConveyorCol',
        props: ['data', 'index'],
        methods: {
            onmousedown: function() {
                this.$emit('mousedownindex', this.index)
            },
        },
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
    .convey-row {
        margin: 20px 5px;
    }
    .img-group {
        padding-left: 0px ;
        padding-right: 0px ;
    }
    .img-group img {
        max-width: 100%;
    }
    .no-bottom-border {
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
    .red {
        color: red;
    }
</style>