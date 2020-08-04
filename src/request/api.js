/*
 * @Author: your name
 * @Date: 2020-05-31 15:05:00
 * @LastEditTime: 2020-05-31 15:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \crmQD\src\request\api.js
 */ 
import { get, post } from './http'
import { axios } from '@/request/http'
const requestAction = function(data) {
    let ret = ''
    for (var it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    ret = ret.substring(0, ret.lastIndexOf('&'))
    return ret
}

const api = {
    //客户管理
    captcha: '/app/captcha.jpg?uuid=',//图形验证码
    login: '/app/login',//登录
}

//登录
// export function login(parameter) {
//     return axios({
//         url: 'login', //1 pc 2 web
//         method: 'post',
//         transformRequest: [
//             function(data) {
//                 let ret = ''
//                 for (var it in data) {
//                     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                 }
//                 ret = ret.substring(0, ret.lastIndexOf('&'))
//                 return ret
//             }
//         ],
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded'
//         },
//         data: parameter
//     })
// }
export function login(data) {

    return axios({
        url: api.login,
        method: 'post',
        data: data,
        transformRequest: [
            requestAction
        ],
        headers: {

        },
     
    })
}

export function captcha(data) {

    return axios({
        url: api.captcha+data,
        method: 'get',
        transformRequest: [
            requestAction
        ],
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
}

export function getProductEndRemind(data) {

    return axios({
        url: api.getProductEndRemind,
        method: 'post',
        data: data,
        transformRequest: [
            requestAction
        ],
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
}
export function getBirthdayRemind(data) {

    return axios({
        url: api.getBirthdayRemind,
        method: 'post',
        data: data,
        transformRequest: [
            requestAction
        ],
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
}


export function countRemind(data) {

    return axios({
        url: api.countRemind,
        method: 'post',
        data: data,
        transformRequest: [
            requestAction
        ],
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
}