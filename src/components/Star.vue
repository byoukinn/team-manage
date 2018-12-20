<template>
    <div class="row">
            <div class="col-xs-4 col-xs-offset-8 col-lg-3 col-lg-offset-9 star">
                <ul>
                    <li class="pull-left"><img :src="require('@/assets/navL.png')" alt=""></li>
                    <li class="pull-left bg"><a href="">设为首页</a></li>
                    <li class="pull-left bg"><a href="">收藏此页</a></li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Star',
}
</script>

<style scoped>
    .star span {
        width: 27px;
        height: 27px;
    }

    .star ul li {
        list-style-type: none;
    }

    .star ul li a {
        font-size: 12px;
    }

    .star ul li a:hover {
        color: #f58c02;
    }

    .bg { 
        background-color: #025e3a;
        padding: 3px 16px;
    }
</style>
