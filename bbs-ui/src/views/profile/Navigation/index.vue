<template>
  <div class="flex flex-col items-strench">
    <div v-for="(item, index) in data"
         :key="index">
      <div class="p-4 text-center border-gray-100 border-b-2 border-r-2 cursor-pointer hover:bg-red-400 hover:text-white "
           :class="{active: item.path === currentPath}"
           @click="handleClick(item)">
        {{item.name}}
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  data: {
    required: true,
    type: Array,
    default: [],
  },
});

const currentPath = ref(router.currentRoute.value.path);

const handleClick = (item) => {
  router.push(item.path);
  currentPath.value = item.path;
};
</script>

<style lang="scss" scoped>
.active {
  background-color: rgb(248, 113, 113);
  color: white;
}
</style>