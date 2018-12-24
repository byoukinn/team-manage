/**
 * 配置 vuex store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import MenuModule from './module/MenuModule.js'
import HomeModule from './module/HomeModule.js'
import DemoModule from './module/DemoModule.js'
import TeacherModule from './module/TeacherModule.js'


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    MenuModule,
    HomeModule,
    DemoModule,
    TeacherModule,
  }
})
export default store;