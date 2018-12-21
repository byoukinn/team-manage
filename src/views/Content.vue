<template>
    <div class="row">
        <div>
            <SideMenu></SideMenu>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
    components: {
        SideMenu,
    }
}
</script>

<style>

</style>
