<template>
    <div class="row">
        <SideMenu :menu-list="menuList"></SideMenu>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
    data() {
        return {
            menuList: {
                title: '成果展示',
                next: [
                    {
                        title: '2.1 内容体现',
                        src: '/content/1',
                        next: [
                            {
                                title: '2.1.1 主要解决的教学问题',
                                src: '/content/1',
                                next: [],
                            },
                            {
                                title: '2.1.2 开展的主要工作',
                                src: '/content/1',
                                next: [],
                            },
                            {
                                title: '2.1.3 主要解决的教学问题',
                                src: '/content/1',
                                next: [],
                            },
                        ],
                    },
                    {
                        title: '2.2 支撑条件',
                        src: '/content/1',
                        next: [
                            {
                                title: '2.2.1 主要解决的教学问题',
                                src: '/content/1',
                                next: [
                                    {
                                        title: '2.2.1.1 什么垃圾东西',
                                        src: '/content/1',
                                        next: [],
                                    },
                                ],
                            },
                            {
                                title: '2.2.2 主要解决的教学问题',
                                src: '/content/1',
                                next: [],
                            },
                        ],
                    },
                    {
                        title: '2.3 方向性',
                        src: '/content/1',
                        next: [
                            {
                                title: '2.3.1 主要解决的教学问题',
                                src: '/content/1',
                                next: [],
                            },
                        ],
                    },
                ]
            }
        }
    },
    components: {
        SideMenu,
    }
}
</script>

<style>

</style>
