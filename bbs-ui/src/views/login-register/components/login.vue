<template>
  <div class="w-[388px]  h-min bg-white flex flex-col p-4">
    <div class="text-lg text-red-500 text-center my-6">账号登录</div>
    <input class="mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
           placeholder="用户名"
           v-model="form.usrName">
    <input class="mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
           placeholder="密码"
           v-model="form.password">
    <div class="text-right text-gray-500 mx-4 text-xs cursor-pointer"
         @click="$emit('show')">去注册</div>
    <button class="my-6 p-4 text-lg text-white bg-red-400"
            @click="login">登录</button>
    <div>
      <span>qq登录</span>
      <span>微信登录</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

defineEmits(["show"]);
const form = ref({
  usrName: "dxy",
  password: "123456",
});

const login = async () => {
  console.log(form.value);

  try {
    await store.dispatch("user/login", {
      ...form.value,
    });

    // 跳转到首页
    if (store.getters.token) {
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>