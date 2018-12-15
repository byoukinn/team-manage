<template>
    <div class="flex">
        <div class="title">
            <h4>{{ label }}</h4>
        </div>
        <div class="more">
            <a :href="url">more</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'labelbar',
    props: ['label', 'url'],
}
</script>

<style scoped>
    .flex {
        box-sizing: border-box;
        align-items: baseline;
        background: #eee;
        display: flex;
    }
    .more {
        text-align: right;
        
    }
    .title,.more {
        width: 50%;
    }
</style>
