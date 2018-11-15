import axios from 'axios'


const service= axios.create({
  baseURL: "https://cnodejs.org/api/v1/", // api的base_url
  timeout: 60000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
console.log(config)
// console.log(config)

return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
response => {
// console.log(response)
/**
* code为非20000是抛错 可结合自己业务进行修改
*/
  const res = response.data
  if (res.code !== "0000" && res.code !== "0003") {
    return Promise.reject('error')
  } else {
    return response.data
  }
},
error => {
  console.log('err' + error)// for debug
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  return Promise.reject(error)
}
)

export default service
