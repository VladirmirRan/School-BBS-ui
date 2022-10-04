import { createStore } from "vuex";
import user from './modules/user'
import getters from './getters'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  getters,
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: "bbs",
      // 需要保存的模块
      paths: ["user"],
    }),
  ],
});

export default store;
