/**
 * 可拓展的多级菜单
 * level: 层级
 * name: 显示的标题
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

let menus = [
    {
        level: 1,
        name: '成果展示',
        type: "button",
        isExpanded: false,
        isSelected: false,
        children: [
            {
                level: 2,
                name: '快速上手',
                type: "link",
                path: "/content/1"
            },
            {
                level: 2,
                name: '教程',
                type: "button",
                isExpanded: false,
                isSelected: false,
                children: [
                    {
                        level: 3,
                        name: '简介',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: '英雄编辑器',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: '主从结构',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: '多个组件',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: '服务',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: '路由',
                        type: "link",
                        path: "/content/1"
                    },
                    {
                        level: 3,
                        name: 'HTTP',
                        type: "link",
                        path: "/content/1"
                    },
                ]
            },
        ],
    }
    
];

let contents = {
    '成果展示': {
        title: '成果展示',
        paragraph: [
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ]
    },
    '快速上手': {
        title: '快速上手',
        paragraph: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    '路由': {
        title: '路由',
        paragraph: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    },
}
    
let flag = menus[0].name;
let content = contents[flag];


let levelNum = 1;

export default {
    menus,
    levelNum,
    contents,
    flag,
    content,
};
