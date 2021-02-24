import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 导入模块
import category from './modules/category'
import banner from './modules/banner'
import goods from './modules/goods'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        category,
        banner,
        goods
    }
})
export default store