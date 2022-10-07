import { loginUser,getPublicKey, registerUser } from "@/api/login";
import { message } from '@/libs'
import { getEncryptor} from '@/utils/getKey'
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

      const res= await getPublicKey();
      payload.uuid = res.uuid

      const encryptor = getEncryptor(res.publicKey)

      payload.password = encryptor.encrypt(payload.password)

      try {
        const data = await loginUser(payload);
        if (data) {
          const { usrName} = payload;
          data.userInfo = {usrName}
          commit("setUserInfo", data.userInfo);
          commit("setToken", data.jwtToken);

          // 欢迎
          message(
            'success',
            `欢迎您 ${ data.userInfo.usrName} `,
            3000
          );
        }
      }catch (error) {
        message(
          'error',
          `登录失败，请重试`,
          3000
        );
      }
      /* // mock
      const data = {
        jwtToken: "123456",
      } */
    },
    // 退出登录
    logout({ commit }) {
      commit("setUserInfo", {});
      commit("setToken", "");
    },
    // 注册
    async register({ commit }, payload) {
      const res= await getPublicKey();
      if(res){
        payload.uuid = res.uuid
        const encryptor = getEncryptor(res.publicKey)

        payload.password = encryptor.encrypt(payload.password)
        payload.checkPassword = encryptor.encrypt(payload.checkPassword)

        try {
          const data = await registerUser(payload);
          message(
            'success',
            `注册成功`,
            3000
          );
        }catch (error) {
          message(
            'error',
            error,
            3000
          );
        }

      }
    }
  },
}