<template>
  <div>
    <div class="p-6 text-2xl font-bold text-center">发布帖子</div>
    <div class="bg-white flex flex-col p-4 gap-2 mx-10">
      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          主题
        </label>
        <div class="flex items-center mr-2 gap-1">
          <input type="radio"
                 v-model="form.categoryEnum"
                 value="CONFESSION_WALL">
          <label>表白墙</label>
        </div>
        <div class="flex items-center gap-1">
          <input type="radio"
                 v-model="form.categoryEnum"
                 value="CONFESSION_WALL2">
          <label>失物招领</label>
        </div>
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          标题
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.title">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          摘要
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.summary">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          内容
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.content">
      </div>

      <div class="flex">
        <label class="text-gray-700 text-sm font-bold w-3/12 text-right p-3"
               for="username">
          缩略图
        </label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               v-model="form.thumbnail">
      </div>

      <button class="my-2 p-3 text-lg text-white bg-red-400 w-2/12 mx-auto rounded-sm"
              @click="submit">发布</button>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { add } from "@/api/article";
import { message } from "@/libs";

let form = ref({
  // 设初始值
  title: "",
  content: "",
  summary: "",
  thumbnail: "",
  categoryEnum: "",
});

const submit = async () => {
  console.log(form.value);

  try {
    await add(form.value);
    message("success", "发布成功", 3000);
    // 清空表单
    form.value = {
      title: "",
      content: "",
      summary: "",
      thumbnail: "",
      categoryEnum: "",
    };
  } catch (e) {
    message("error", e, 3000);
  }
};
</script>

