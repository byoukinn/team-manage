<template>
    <div class="navbar">
        <ul class="nav" v-for="item in navData" :key="item.id">
            <li @mouseover="showsub($event.srcElement)" @mouseout="hidesub($event.srcElement)">
                <router-link :to="item.path">
                    {{ item.content }}
                </router-link>
                <ul v-if="item.sub" @mouseover="showsub($event.srcElement)">
                    <div v-for="subitem in item.sub" :key="subitem.id">
                        <li>
                            <router-link :to="subitem.path">
                                {{ subitem.content }}
                            </router-link>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                navData: [
                    /**
                     * 一个对象一个 [li 选项]
                     * content 选项名称
                     * path 跳转路径 （需配置路由）
                     * sub 子选项集合 内部存储子选项对象 
                     * sub 对象参数参考content 和 path
                     */
                    {
                        content: '首页',
                        path: '/',
                        sub: [],
                    },
                    {
                        content: '成果展示',
                        path: '/chengguo',
                        sub: [{
                            content: '测试选项',
                            path: '/',
                        }, ],
                    },
                    {
                        content: '成果展示',
                        path: '/chengguo',
                        sub: [{
                                content: '测试选项',
                                path: '/',
                            },
                            {
                                content: '测试选项',
                                path: '/',
                            },
                            {
                                content: '测试选项',
                                path: '/',
                            },
                        ],
                    },
                    {
                        content: '成果展示',
                        path: '/chengguo',
                        sub: [{
                            content: '速度快',
                            path: '/',
                        }, ],
                    },
                ],

            }
        },
        methods: {
            showsub: function (li) {
                var submenu = li.nextSibling;
                if (submenu) {
                    submenu.style.display = "flex";
                    submenu.onmouseover = function () {
                        submenu.style.display = "flex";
                    }
                }
            },
            hidesub: function (li) {
                var submenu = li.nextSibling;
                if (submenu) {
                    submenu.onmouseout = function () {
                        submenu.style.display = "none";
                    }
                    submenu.style.display = "none";
                }
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
    }

    .navbar,
    .navbar>ul {
        display: flex;
    }

    .navbar {
        width: 70%;
        margin: 0 auto;
    }

    .navbar ul li:hover {
        background-color: #f58c02;
    }

    .navbar ul li {
        position: relative;
        float: left;
        text-align: center;
        line-height: 55px;

    }

    .navbar ul li a {
        display: block;
        width: 140px;
        height: 55px;
        color: #fff;
    }

    .navbar ul li ul {
        position: absolute;
        top: 55px;
        z-index: 1001;
        display: none;
        flex-direction: column;
        width: inherit;
    }

    .navbar ul li ul li {
        background-color: #4a4a4a;
    }

    .navbar ul li ul li:hover {
        background-color: #606060;
    }

    .navbar ul li ul li a {
        height: 50px;
        line-height: 50px;
        font-size: 14px;
    }
</style>