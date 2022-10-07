<template>
  <div>
    <MobileMain v-if="isMobileTerminal" />
    <PcMain v-else />
  </div>
</template>

<script setup>
import { isMobileTerminal } from "@/utils/flexible";
import MobileMain from "./mobile/index.vue";
import PcMain from "./pc/index.vue";
</script>

<style lang="scss" scoped>
</style>