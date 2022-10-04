<template>
  <div>
    header
    <button @click="$router.push('/login')"
            v-if="!store.getters.token"
            class="text-red-500 border-2 border-red-400 mr-3">登录</button>
    <span v-else
          class="text-red-500 ">{{store.getters.userInfo.usrName}}</span>
    <button @click="logout"
            v-if="store.getters.token"
            class="text-red-500 border-2 border-red-400">退出</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const logout = () => {
  store.dispatch("user/logout");
};
</script>

<style lang="scss" scoped>
</style>