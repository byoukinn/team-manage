<template>
    <div class="sidebar">
        <div v-for="item in sideData" :key="item.id">
            <router-link :to="item.target">
                <div class="piece" :style="{background:item.bg}">
                    <div class="content">
                        <img :src="item.imgsrc" />
                        <p>{{ item.desc }}</p>
                    </div>
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
                        bg: '#f17272',
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

    /* .sidebar {
        border: 1px solid #dbdbdb;
    } */

    img {
        max-width: 100%;
    }

    .piece {
        position: relative;
        border-radius: 12px;
        margin: 3%;
        width: 94%;
        padding-bottom: 64%; 
        box-sizing: border-box;
        height: 0; 
    }
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

 </style>