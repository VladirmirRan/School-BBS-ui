<template>
  <div class="w-[388px]  h-min bg-white flex flex-col p-4">
    <div class="text-lg text-red-500 text-center my-6">注册</div>
    <div class="flex">
      <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
             for="username">
        用户名
      </label>
      <input placeholder="请输入用户名"
             class="flex-1 mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
             v-model="form.name">
    </div>

    <div class="flex">
      <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
             for="username">
        密码
      </label>
      <input type="password"
             class="flex-1 mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
             v-model="form.password">
    </div>

    <div class="flex">
      <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
             for="username">
        确认密码
      </label>
      <input type="password"
             class="flex-1 mb-4 mx-2 p-2 border-b-2 border-gray-200 outline-0 focus:border-red-500"
             v-model="form.checkPassword">
    </div>

    <div class="px-10 py-4 text-gray-500 text-xs">
      <p>* 1.密码长度至少8位以上</p>
      <p>* 2.密码应至少包含大写字母，小写字母，数字，特殊符号中的三项</p>
      <p>* 3.禁止使用相同的数字或字符作为密码，如111111，aaaaaa等</p>
      <p>* 4.禁止使用连续升序或降序的数字或字母作为密码，如123456，abcdef等</p>

    </div>

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
  name: "dxy2",
  password: "Dxy20221001",
  checkPassword: "Dxy20221001",
});

const submit = async () => {
  console.log("注册");
  console.log(form.value);
  await store.dispatch("user/register", { ...form.value });
};
</script>