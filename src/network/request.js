import axios from 'axios'

// starA
// export function request (config, success, failure) {
// // 1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   // 2.request 提交/发送网络请求
//   instance(config).then(result => {
//     success(result)
//   }).catch(error => {
//     failure(error)
//   })
// }

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config).then(result => {
//       resolve(result)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }

// starB
// axios.create 本身返回的类型即是Promise
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)
    return config // 如不返回config，请求不会发送到服务端
    // 请求拦截的作用
    // 1.为config附加信息
    // 2.展示请求进度的动画
    // 3.特殊网络请求包含token，重定向至token登录
  }, error => {
    console.log(error)
  })

  // 相应拦截
  instance.interceptors.response.use(result => {
    console.log(result)
    return result.data
    // return result // 处理结果并返回
  }, error => {
    console.log(error)
  })

  return instance(config)
}
