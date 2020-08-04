

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import storage from 'good-storage'//本地缓存
Vue.use(Element)
import './permission'
import axios from 'axios'
import vueJsonp from 'vue-jsonp'
import '@/utils/commen.header.css'

// import 'lib-flexible'


export const IP = process.env.VUE_APP_API_BASE_URL
Vue.prototype.IP =IP
Vue.prototype.$echarts = echarts
Vue.prototype.$storage = storage
Vue.prototype.axios = axios//8.将axios 注册vue实列中，注意顺序
axios.defaults.withCredentials=true;

// let mapStyle="amap://styles/80d659c42e0ba2de1c39df708cbed25c"
// let mapStyle="amap://styles/2cff1b41e707115b649956817b3a15d5"
let mapStyle="amap://styles/eddd290e1a4e6d96cd274f7250745528"
Vue.prototype.$mapStyle=mapStyle
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    if(to.meta.content){
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      meta.content = to.meta.content;
      head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if(storage.get('companyname')){
        if (to.meta.title) {
            document.title = to.meta.title+"-"+storage.get('companyname');
        }
    }else{
        document.title = to.meta.title 
    }
   
    next()
  });

// 挂载全局

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')