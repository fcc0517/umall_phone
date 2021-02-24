// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入公共样式库
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
// 引入全局过滤器
import './filters/goods'
// 引入全局的mixins
import './mixins/cart'
// 引入iconfont
import './assets/css/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
