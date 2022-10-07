<template>
  <div class="bg-gray-100">
    <Header class="h-header"
            :data="headerList" />
    <div class="h-main mx-40 my-4 ">
      <Main />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import { ref } from "vue";
const headerList = ref([
  {
    name: "论坛首页",
    path: "/",
  },
  {
    name: "匿名表白墙",
    path: "/messageWall",
  },
  {
    name: "失物招领",
    path: "/lastAndFound",
  },
]);
</script>

<style lang="scss" scoped>
</style>