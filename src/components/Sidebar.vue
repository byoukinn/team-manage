<template>
    <div class="col-xs-3 col-lg-2 col-lg-offset-1 sidebar">
        <div v-for="item in sideData" :key="item.id">
            <router-link :to="item.target">
                <div class="piece" :style="{background:item.bg}">
                    <img :src="item.imgsrc" />
                    <p>{{ item.desc }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Siderbar',
        data() {
            return {
                sideData: [{
                        target: '/c',
                        imgsrc: require("@/assets/icon-1.png"),
                        desc: 'en',
                        bg: '#F17272',
                    },
                    {
                        target: '/b',
                        imgsrc: require("@/assets/icon-2.png"),
                        desc: 'aa',
                        bg: '#f89555',
                    },
                    {
                        target: '/a',
                        imgsrc: require("@/assets/icon-3.png"),
                        desc: 'ss',
                        bg: '#31b2ff',
                    },
                ],
            }
        },

    }
</script>

<style scoped>
    a {
        color: #fff;
    }

    a:visited {
        color: #fff;
    }

    .sidebar {
        border: 1px solid #dbdbdb;
    }

    img {
        max-width: 100px;
    }

    .piece {
        border-radius: 12px;
        margin: 5px;
        padding: 30px;
    }
</style>