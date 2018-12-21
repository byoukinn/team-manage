<template>
    <div class='conveyor-row-outer' @mousedown="onmousedown($event)" >
        <img :src="data.img" alt="">
        <p v-if='data.desc'>{{ data.desc }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ConveyorRow',
        props: ['data', 'index'],
        methods: {
            onmousedown: function() {
                this.$emit('mousedownindex', this.index)
            },
        },
    }
</script>

