import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import {request} from './network/request.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// starA
// request({
//   url: '/home/multidata',
//   method: 'get'
// }, result => {
//   console.log(result)
// }, error => {
//   console.log(error)
// })

// starB
request({
  url: '/home/multidata',
  method: 'get'
}).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // ms 请求超时设置
// axios.defaults.timeout = 5000

// axios({
//   url: '/home/multidata',
//   // 默认get请求
//   method: 'get'
//   // params: {
//   //   // 参数拼接
//   //   count: 20
//   //   age: 27
//   // }
// }).then(result => {
//   console.log(result)
// })
// axios.get()
// axios.post()

// 处理并发请求
// axios.all([axios({
//   url: 'test1'
// }), axios({
//   url: 'test2'
// })]).then(axios.spread((result1, result2) => {
//   console.log(result1)
//   console.log(result2)
// }))
// 数组的解构
// .then(result => {
//   console.log(result)
//   console.log(result[0])
//   console.log(result[1])
// })
// mutations commit
// jsonp
// httpbin.org

// http://123.207.32.32:8000/home/multidata
// axios实例封装模块化
