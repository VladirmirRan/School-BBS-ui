import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
import getters from './getters'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
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
