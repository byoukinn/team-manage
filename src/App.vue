<template>
    <div id="app" class=".container">
            <div class="container">
                <Star />
                <Header :bannerContent="bannerContent" />
            </div>
            <div class="container-fluid navbox">
                <NavBar :navData="navData" class="navbar" />
            </div>
            <router-view />
            <div class="container-fluid">
                <Footer :content="fcontent" /> 
            </div>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    import Star from '@/components/Star.vue'

    export default {
        name: 'app',
        data() {
            return {
                fcontent: [
                    '© 2018 广东农工商职业技术学院 计算机学院 ｜ 技术支持：ITeam基地 软件青创工作室',
                    '地址：广东省广州市广东农工商职业技术学院增城校区',
                ],
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
                        path: '/teachers',
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
                bannerContent: [
                    '专业社团-工作室-创业公司"育人平台的探索与实践',
                    '省级教育教学成果奖申报网站'
                ],
            }
        },
        components: {
            NavBar,
            Footer,
            Header,
            Star,
        }
    }
</script>

<style>
    

    body {
        background: #f7f7f7;
    } 

    a,
    a:hover {
        text-decoration: none;
    }

    .navbox,
    .footer {
        background-color: #025e3a;
    }



    a:visited {
        color: white;
    }

    #app {
        font: 14px 微软雅黑, "Arial Narrow";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
    }
</style>