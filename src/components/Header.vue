<template>
    <div class="header">
            <img class="logo" src="@/assets/logo.png" alt="广东农工商职业技术学院">
            <div class="hengfu">
                <p>"专业社团-工作室-创业公司"育人平台的探索与实践</p>
                <p>省级教育教学成果奖申报网站</p>
            </div>

            <div class="star">
                <span></span>
                <ul>
                    <li><a href="">设为主页</a></li>
                    <li><a href="">收藏此页</a></li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        position: relative;
        display: flex;
        padding: 30px;
        font-weight: bold;
    }

    .logo {
        width: 50%;
        height: 50%;
    }
    
    .hengfu {
        margin-top: 15px;
        display: flex;
        flex-flow: column;
    }


    .hengfu>p {
        margin: -10px;
        font-size: 16px;
    }

    .header {
        width: 50%;
        margin: auto;
    }

    .star {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
    }

    .star span {
        margin-right: -1px;
        width: 27px;
        height: 27px;
        background: url('../assets/navL.png') no-repeat;
    }

    .star ul {
        background-color: #025e3a;
        display: flex;
    }

    .star ul li {
        padding: 4px;
        list-style-type: none;
    }

    .star ul li a:hover {
        color: #f58c02;
    }
</style>
