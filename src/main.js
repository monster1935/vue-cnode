// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

//引入 
import './assets/scss/base.scss'

// 引入Vuex作为全局状态管理
import store from './store/store'

// 引入全局工具库,可以使用global将其暴露为全局
import util from './assets/js/util'
// global.util = util;

// 使用axios作为请求工具，组件内可以直接使用实例this的值获取到axios 
import axios from 'axios'
Vue.prototype.$http = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
