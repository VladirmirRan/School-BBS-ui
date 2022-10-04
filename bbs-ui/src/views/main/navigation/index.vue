<template>
  <div>
    <MobileNavigationVue v-if="isMobileTerminal" />
    <PcNavigationVue v-else
                     :data="categoryList" />
  </div>
</template>

<script setup>
import { isMobileTerminal } from "@/utils/flexible";
import MobileNavigationVue from "./mobile/index.vue";
import PcNavigationVue from "./pc/index.vue";
</script>

<style lang="scss" scoped>
</style>