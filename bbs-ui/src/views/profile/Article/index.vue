<template>
  <div>
    articleList
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getList } from "@/api/article";

const list = ref([]);
const getArticle = async () => {
  // const res = await getList();
  // list.value = res.data
};
</script>

