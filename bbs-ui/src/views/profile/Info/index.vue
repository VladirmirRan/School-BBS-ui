<template>
  <div>
    <div class="p-6 text-2xl font-bold text-center">个人信息</div>
    <div class="bg-white flex flex-col p-4 gap-2 mx-10">
      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          用户名
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.name">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          手机号
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.phone">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          头像
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.avatar">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          头像
        </label>
        <div class="flex items-center mr-2 gap-1">
          <input type="radio"
                 v-model="form.sex"
                 value="MAN">
          <label>男</label>
        </div>
        <div class="flex items-center gap-1">
          <input type="radio"
                 v-model="form.sex"
                 value="WOMAN">
          <label>女</label>
        </div>
      </div>
      <button class="my-2 p-3 text-lg text-white bg-red-400 w-2/12 mx-auto rounded-sm"
              @click="submit">修改</button>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUser, edit } from "@/api/user";

defineEmits(["show"]);
let form = ref({
  // 设初始值
  name: "",
  phone: "",
  sex: "",
  avatar: "",
});

onMounted(() => {
  getUserInfo();
});

const getUserInfo = async () => {
  try {
    const data = await getUser();
    /* let res = {};
    res.data = {
      name: "dxy111",
      phone: "123111",
      sex: 0,
      avatar: "123111",
    }; */
    console.log(data);

    form.value = data;
  } catch (error) {
    console.log(error);
  }
};

const submit = async () => {
  console.log(form.value);
  await edit(form.value);
  getUserInfo();
};
</script>