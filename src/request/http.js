
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'           
import store from '@/store'
import { VueAxios } from './axios'

import storage from 'good-storage'
// axios.defaults.withCredentials = true
// 创建 axios 实例
// export const IP = process.env.VUE_APP_API_BASE_URL

let baseURL;
if (process.env.VUE_APP_FLAG == "development") {
  baseURL = process.env.VUE_APP_API_BASE_URL;
} else if (process.env.VUE_APP_FLAG == "production") {
  baseURL = process.env.VUE_APP_API_BASE_URL;
} else if (process.env.VUE_APP_FLAG == "test") {
  baseURL = process.env.VUE_APP_API_BASE_URL;
}

const service = axios.create({
    baseURL:baseURL, // api base_url
    // baseURL:'http://139.159.182.101:8088', // api base_url
    timeout: 6000 // 请求超时时间
})
// axios.defaults.baseURL = 'http://192.168.0.109:8086';
//  // 请求超时时间
//  axios.defaults.timeout = 10000;


const err = (error) => {
    if (error.response) {
        const data = error.response.data
        const token = storage.get('token')
        if (error.response.status === 403) {
            notification.error({
                message: 'Forbidden',
                description: data.message
            })
        }
        if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
            notification.error({
                message: 'Unauthorized',
                description: 'Authorization verification failed'
            })
            if (token) {
                store.dispatch('Logout').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
        }
    }
    return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {

    const token = storage.get('token')
    // alert(token)
    if (token) {
        config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
        // config.headers['token'] = storage.get('token')
    }
    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
    //未登录 设置登录状态为未登录
    // alert(response.data.code)
    if (response.data.code == 50) {
        // Vue.ls.set(USER_STATUS, 50)
        storage.set('USER_STATUS',50)
        storage.remove('token');
       window.location.href= process.env.VUE_APP_API_LOGIN_URL
    }

    return response.data
}, err)

const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, service)
    }
}
 /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    });
}
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    });
}

export {
    installer as VueAxios,
    service as axios
}