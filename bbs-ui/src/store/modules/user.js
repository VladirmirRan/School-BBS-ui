import { loginUser, registerUser } from "@/api/login";
import { message } from '@/libs'
export default {
  namespaced: true,
  state: () => ({
    userInfo: {},
    token: "",
    test: '1'
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // 登录
    async login({ state, commit }, payload) {
      console.log("payload",payload);
      
      // const data = await loginUser(payload);
      // mock
      const data = {
        jwtToken: "123456",
      }
      
      if(data){
        data.userInfo = {...payload}
        commit("setUserInfo", data.userInfo);
        commit("setToken", data.jwtToken);
        
        // 欢迎
        message(
          'success',
          `欢迎您 ${ data.userInfo.usrName} `,
          3000
        )
      }
    },
    // 退出登录
    logout({ commit }) {
      commit("setUserInfo", {});
      commit("setToken", "");
    },
    // 注册
    async register({ commit }, payload) {
      const res = await registerUser(payload);
      console.log(res);
      // 增加消息提示
    }
  },
}