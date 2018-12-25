/**
 * 可拓展的多级菜单
 * level: 层级
 * meta:  显示的标题
 * type: 'button' 可下拉类型, 'link' 链接路由
 * 只有当type为button时: 
 * isExpanded: true为展开，false为未展开
 * isSelected: 正在选择时为true，否则为false
 * children: 子菜单
 * 此时link失效
 * 当type为link时
 * path: 路由的路径
 */
// let menu = [
//     [],
//     [],
// ]
import ContentView from '@/views/ContentView.vue'

let menus = [{
        level: 1,
        type: "button",
        isExpanded: false,
        isSelected: false,
        path: "/content",
        name: 'content',
        component: ContentView,
        meta: {
            breadcrumbName: '成果展示'
        },
        children: [
            {
                level: 2,
                type: "link",
                path: "/content/getting-start",
                component: ContentView,
                name: 'getting-start',
                meta: {
                    breadcrumbName: '快速上手'
                },
            },
            {
                level: 2,
                type: "button",
                isExpanded: false,
                path: "/content/tutorial",
                name: 'tutorial',
                meta: {
                    breadcrumbName: '教程'
                },
                isSelected: false,
                children: [{
                        level: 3,
                        type: "link",
                        path: "/content/overview",
                        name: 'overview',
                        component: ContentView,
                        meta: {
                            breadcrumbName: '简介'
                        },
                    },
                    {
                        level: 3,
                        type: "button",
                        isExpanded: false,
                        path: "/content/scale",
                        name: 'scale',
                        meta: {
                            breadcrumbName: '规模'
                        },
                        isSelected: false,
                        children: [{
                            level: 4,
                            type: "link",
                            path: "/content/chapter1",
                            name: "chapter",
                            component: ContentView,
                            meta: {
                                breadcrumbName: '2.1 章节1'
                            },
                        },
                        {
                            level: 4,
                            type: "link",
                            path: "/content/chapter2",
                            name: "chapter2",
                            component: ContentView,
                            meta: {
                                breadcrumbName: '2.1 章节2'
                            },
                        }],
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/hero-editor",
                        name: "hero-editor",
                        component: ContentView,
                        meta: {
                            breadcrumbName: '英雄编辑器'
                        },
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/structure",
                        name: "structure",
                        component: ContentView,
                        meta: {
                            breadcrumbName: '主从结构'
                        },
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/components",
                        name: "components",
                        component: ContentView,
                        meta: {
                            breadcrumbName: '多个组件'
                        },
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/service",
                        name: "service",
                        component: ContentView,
                        meta: {
                            breadcrumbName: '服务'
                        },
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/router",
                        name: "router",
                        component: ContentView,
                        meta: {
                            breadcrumbName: '路由'
                        },
                    },
                    {
                        level: 3,
                        type: "link",
                        path: "/content/http",
                        name: "http",
                        component: ContentView,
                        meta: {
                            breadcrumbName: 'HTTP'
                        },
                    },
                ]
            },
        ],
    }

];

let contents = {
    "overview": {
        title: '简介',
        paragraph: [
            "关于简介的页面 in contents"
        ]
    },
    "getting-start": {
        title: '快速上手',
        paragraph: ["关于快速上手的页面", "line 2 in contents"]
    },
    'router': {
        title: '路由',
        paragraph: ["关于路由的页面 in contents"]
    },
}

let flag = menus[0].meta.breadcrumbName
let content = contents[flag];


let levelNum = 1;

export default {
    menus,
    levelNum,
    contents,
    flag,
    content,
};