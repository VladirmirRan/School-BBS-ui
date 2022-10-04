<template>
  <div class="h-screen bg-red-300 flex flex-col items-center justify-center">
    <div class="text-white text-5xl font-bold text-center mb-20">
      Romantic Night 校园墙
    </div>
    <div class="flex items-center justify-center">
      <Login v-if="isLoginPage"
             @show="isLoginPage = !isLoginPage" />
      <Register v-else
                @show="isLoginPage = !isLoginPage" />

    </div>
  </div>

</template>

<script setup>
import Login from "./components/login.vue";
import Register from "./components/register.vue";

import { ref } from "vue";

const isLoginPage = ref(true);
</script>

<style lang="scss" scoped>
</style>