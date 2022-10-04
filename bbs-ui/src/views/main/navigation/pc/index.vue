<template>
  <div>
    <!-- 导航栏 -->
    <Header></Header>
    <!-- 主体区 -->
    <Main></Main>
    <!-- 底部区 -->
    <Footer></Footer>
  </div>

</template>

<script setup>
import Header from "./header/index.vue";
defineProps({
  data: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>