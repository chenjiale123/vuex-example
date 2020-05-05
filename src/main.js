import Vue from 'vue'
import App from './App.vue'
import router from '@/route/router'

Vue.config.productionTip = false


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import {Message} from  'element-ui'

Vue.prototype.$message=Message

import 'font-awesome/css/font-awesome.min.css'


import axios from 'axios'
axios.defaults.baseURL='www.baidu.com'
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http=axios

import store from '../store/index.js'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
