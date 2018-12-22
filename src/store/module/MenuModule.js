/**
 * 可拓展的多级菜单
 * level: 层级
 * name: 显示的标题
 * type: 'button' 可下拉类型, 'link' 链接路由
 * 只有当type为button时: 
 * isExpanded: true为展开，false为未展开
 * isSelected: 正在选择时为true，否则为false
 * subMenu: 子菜单
 * 此时link失效
 * 当type为link时
 * url: 路由的路径
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
        subMenu: [
            {
                level: 2,
                name: '快速上手',
                type: "link",
                url: "/content/1"
            },
            {
                level: 2,
                name: '教程',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        level: 3,
                        name: '简介',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: '英雄编辑器',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: '主从结构',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: '多个组件',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: '服务',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: '路由',
                        type: "link",
                        url: "/content/1"
                    },
                    {
                        level: 3,
                        name: 'HTTP',
                        type: "link",
                        url: "/content/1"
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
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, url) {
    let sourceItem = '';
    for (let i = 0; i < source.length; i++) {
        sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
        if (sourceItem.indexOf(url) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
            if (source[i].type === 'button') { // 导航菜单为按钮
                source[i].isSelected = true; // 设置选中高亮
                source[i].isExpanded = true; // 设置为展开
                startExpand.push(source[i]);
                // 递归下一级菜单，以此类推
                setExpand(source[i].subMenu, url);
            }
            break;
        }
    }
}

const state = {
    menus,
    levelNum,
    contents,
    flag,
    content,
};


const mutations = {
    findParents(state, payload) {
        if (payload.menu.type === "button") {
            payload.menu.isExpanded = !payload.menu.isExpanded;
        } else if (payload.menu.type === "link") {
            if (startExpand.length > 0) {
                for (let i = 0; i < startExpand.length; i++) {
                    startExpand[i].isSelected = false;
                }
            }
            startExpand = []; // 清空展开菜单记录项
            setExpand(state.menus, payload.menu.url);
        }
    },
    firstInit(state, payload) {
        setExpand(state.menus, payload.url);
    },
    getTarget(state, payload) {
        state.content = state.contents[payload.target.text];
    },
}

export default {
    state,
    mutations
};