<template>
    <div class="row navbar">
        <ul class="col-xs-12 nav">
            <li v-for="item in navs" :key="item.id" @mouseover="showsub($event.srcElement)" @mouseout="hidesub($event.srcElement)">
                <router-link :to="item.path">
                    {{ item.meta.breadcrumbName }}
                </router-link>
                <ul class="navbar-inner-ul" v-if="item.children" @mouseover="showsub($event.srcElement)">
                    <div v-for="subitem in item.children" :key="subitem.id">
                        <li>
                            <router-link :to="subitem.path">
                                {{ subitem.meta.breadcrumbName }}
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
            // 导航栏数据
            return {
                navs: this.$router.options.routes
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
                    li.style.backgroundColor = "transparents";
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
        margin: 0 auto;
    }

    .nav>li>a:hover {
        background-color: #f58c02;
    }

    .navbar ul li {
        position: relative;
        float: left;
        text-align: center;
        line-height: 55px;
    }

    .nav>li>a {
        padding: 0;
    }

    .navbar ul li a {
        display: block;
        width: 140px;
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
    }

    a {
        font-size: 12px;
    }

    .navbar-inner-ul {
        padding-left: 0px;
    }
</style>