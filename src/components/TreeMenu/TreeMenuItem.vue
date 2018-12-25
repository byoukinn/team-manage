<template>
    <div class="TreeMenuItem">
        <div class="level" :class="'level-'+ menu.level" v-for="menu in menus" :key="menu.id">
            <div v-if="menu.type === 'link'" > 
                <router-link href="javascript:void(0)" class="link"  :to="'/content/' + menu.name"  @click.native="toggle(menu)">{{menu.meta.breadcrumbName}}</router-link>
            </div>
            <div v-if="menu.type === 'button'">
                <div class="button heading" :class="{selected: menu.isSelected,expand:menu.isExpanded}" @click="toggle(menu)">
                    {{menu.meta.breadcrumbName}}
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24">
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z " />
                        </svg>
                    </div>
                </div>
                <transition name="fade">
                    <div class="heading-children" v-show="menu.isExpanded" >
                        <!-- v-if="menu.children" -->
                        <TreeMenuItem :menus='menu.children' v-bind="$attrs" v-on="$listeners" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: "TreeMenuItem",
        props: ["menus"],
        created() {
            this.$store.commit("firstInit", {
                path: this.$route.path
            });
        },
        methods: {
            toggle(menu) {
                this.$store.commit("findParents", {
                    menu
                });
            },
            jump(target) {
                // FIXME： 加入了东西
                console.log('ex114', target.target.text)
                this.$store.commit("getTarget", {
                    target
                });
            }
        }
    };
</script>
<style scoped>
    a {
        text-decoration: none;
        color: #333;
    }

    .link,
    .button {
        display: block;
        padding: 10px 15px;
        transition: background-color 0.2s ease-in-out 0s, color 0.3s ease-in-out 0.1s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }

    .button {
        position: relative;
    }

    .link:hover,
    .button:hover {
        color: #1976d2;
        background-color: #eee;
        cursor: pointer;
    }

    .icon {
        position: absolute;
        right: 0;
        display: inline-block;
        height: 24px;
        width: 24px;
        fill: currentColor;
        transition: -webkit-transform 0.15s;
        transition: transform 0.15s;
        transition: transform 0.15s, -webkit-transform 0.15s;
        transition-timing-function: ease-in-out;
    }

    .heading-children {
        padding-left: 14px;
        overflow: hidden;
    }

    .expand {
        display: block;
    }

    .collapsed {
        display: none;
    }

    .expand .icon {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .selected {
        color: #1976d2;
    }

    .fade-enter-active {
        transition: all 0.5s ease 0s;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave-to {
        height: 0;
    }
</style>