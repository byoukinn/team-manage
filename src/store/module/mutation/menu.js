
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, path) {
    let sourceItem = '';
    for (let i = 0; i < source.length; i++) {
        sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
        if (sourceItem.indexOf(path) > -1) { // 查找当前 path 所对应的子菜单属于哪一个祖先菜单
            if (source[i].type === 'button') { // 导航菜单为按钮
                source[i].isSelected = true; // 设置选中高亮
                source[i].isExpanded = true; // 设置为展开
                startExpand.push(source[i]);
                // 递归下一级菜单，以此类推
                setExpand(source[i].subMenu, path);
            }
            break;
        }
    }
}



export default {
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
            setExpand(state.menus, payload.menu.path);
        }
    },
    firstInit(state, payload) {
        setExpand(state.menus, payload.path);
    },
    getTarget(state, payload) {
        state.content = state.contents[payload.target.text];
    },
}

