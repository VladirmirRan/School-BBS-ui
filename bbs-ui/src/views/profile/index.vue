<template>
  <div>
    <!-- 个人信息页 -->
    <div class="flex h-main">
      <Navigation class="bg-white w-2/12"
                  :data="navList"></Navigation>
      <div class="flex-1 bg-white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./Navigation/index.vue";
import { ref } from "vue";

const navList = ref([
  {
    name: "个人信息",
    path: "/profile/info",
  },
  {
    name: "我的发帖",
    path: "/profile/article",
  },
  {
    name: "新建帖子",
    path: "/profile/article/add",
  },
  {
    name: "点赞收藏",
    path: "/profile/article/star",
  },
]);
</script>

<style lang="scss" scoped>
</style>