import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use( config => {
    // 必须返回 config
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = store.getters.token
    }
    console.log(config)
    
    return config 
  }, error => {
    // 错误处理
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use((response) => {
  const { data, code } = response.data //根据code判断请求是否成功

  if (code === 200) { 
    return data
  }else{
    //请求成功，但操作失败的错误处理
    return 'error' 
  }
},(error) =>{ //请求失败的错误处理
  return Promise.reject(error)
})

export default service