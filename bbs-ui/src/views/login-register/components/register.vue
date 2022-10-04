<template>
  <div class="w-[388px]  h-min bg-white flex flex-col p-4">
    <div class="text-lg text-red-500 text-center my-6">注册</div>
    <input class="mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
           placeholder="用户名"
           v-model="form[key]"
           v-for="(value, key) in form"
           :key="key">
    <div class="text-right text-gray-500 mx-4 text-xs cursor-pointer"
         @click="$emit('show')">去登录</div>
    <button class="my-6 p-4 text-lg text-white bg-red-400"
            @click="submit">注册</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

defineEmits(["show"]);
const form = ref({
  name: "dxy",
  password: "123456",
  checkPassword: "123456",
  phone: "123",
  sex: 0,
  avatar: "123",
});

const submit = async () => {
  console.log("注册");
  console.log(form.value);
  await store.dispatch("user/register", { ...form.value });
};
</script>