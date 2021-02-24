// 引入axios库
import axios from 'axios'

// 创建一个axios实例， 不要污染全局的axios对象
// axios.create([config])
const http = axios.create({
  baseURL: '/api', // 会在所有的axios的url前面添加/api
  timeout: 5000 // 超时的时间
})

// 做拦截
// 响应拦截
http.interceptors.response.use(function (response) {
  response = response.data
  if (response.code === 200) { // 接口请求成功 (包括数据正常返回)
    return response.list || null
  }
  // Promise.reject(Error对象)
  return Promise.reject(new Error(response.msg))
}, function (error) {
  // 请求失败
  return Promise.reject(error)
})

export default http
