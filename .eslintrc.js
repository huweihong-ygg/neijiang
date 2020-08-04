/*
 * @Author: your name
 * @Date: 2020-05-31 12:52:56
 * @LastEditTime: 2020-05-31 15:35:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \crmQD\.eslintrc.js
 */ 
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
