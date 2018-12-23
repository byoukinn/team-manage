/**
 * 配置 vuex store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import MenusModule from './module/MenuModule.js'
import HomeModule from './module/HomeModule.js'
import DemoModule from './module/DemoModule.js'
import TeacherModule from './module/TeacherModule.js'


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    MenusModule,
    HomeModule,
    DemoModule,
    TeacherModule,
  }
})
export default store;