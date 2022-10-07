<template>
  <div class="flex px-4 items-stretch bg-white">
    <span class="text-2xl flex items-center cursor-pointer"
          @click="router.push('/')">Romantic Night 校园墙</span>
    <div class="flex-1 pl-3  flex items-stretch ">
      <a v-for="(item, index) in data"
         :key="index"
         class="mx-2 flex border-b-2 border-white items-center cursor-pointer"
         :class="{active: index === currentIndex}"
         @click="handleClick(item, index)">{{item.name}}</a>
    </div>
    <div class="flex-1 justify-end flex items-center">
      <button @click="$router.push('/login')"
              v-if="!store.getters.token"
              class="text-red-500 border-2 border-red-400 mr-3">登录</button>
      <span v-else
            class="text-red-500 px-2">{{store.getters.userInfo.usrName}}</span>
      <button @click="logout"
              v-if="store.getters.token"
              class="px-2 border-2 border-gray-300 text-gray-600">退出</button>

    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
const store = useStore();
const router = useRouter();

defineProps({
  data: {
    required: true,
    type: Array,
    default: [],
  },
});

// 处理点击事件
const currentIndex = ref(0);
const handleClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};

// 退出登录
const logout = () => {
  store.dispatch("user/logout");
};
</script>

<style lang="scss" scoped>
.active {
  // text-red-400 border-b-2 border-red-400
  color: #f87171;
  border-bottom: 2px solid #f87171;
}
</style>