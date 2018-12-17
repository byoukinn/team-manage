<template>
    <div id='canvas1' class="conveyor-row-top">
        <div class='conveyor-row-outer' v-for="d in datas" :key="d.id">
            <img :src="d.img" alt="">
            <p v-if='d.desc'>{{ d.desc }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConveyorRow',
        props: ['datas'],
    }
</script>

