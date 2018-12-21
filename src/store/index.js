/**
 * 配置store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import MenusModule from './module/MenuModule.js'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    MenusModule
  }
})
export default store;