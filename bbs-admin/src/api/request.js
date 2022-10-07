import axios from "axios";
import store from "@/store";
import { message} from 'ant-design-vue'


const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 必须返回 config

    if (store.getters.token) {
      config.headers.token = store.getters.token;
    }
    console.log(config);

    return config;
  },
  (error) => {
    // 错误处理
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data, code, msg } = response.data; //根据code判断请求是否成功

    if (code === 200) {
      return data;
    } else if(code === 201) {
      //请求成功，但操作失败的错误处理
      // message.error("异常错误1");
      // return "error";
      return Promise.reject(msg);
    }
  },
  (error) => {
    //请求失败的错误处理
    message.error("异常错误");
  }
);

export default service;
