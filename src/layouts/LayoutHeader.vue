<template>
  <div style="padding: 10px; font-size: 24px; display: flex; margin-left: 20px">
    <RouterLink
      :to="{ path: '/', state: { count, path: '/' } }"
      @click="coutAdd"
      >home</RouterLink
    >
    <RouterLink
      :to="{ path: '/about', state: { count, path: '/about' } }"
      @click="coutAdd"
      style="margin-left: 10px"
      >about</RouterLink
    >
  </div>
</template>
<script lang="tsx" setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useBrowserLocation } from '@vueuse/core';
const location = useBrowserLocation();
onMounted(() => {
  const { state } = location.value;
  if (state?.count) {
    count.value = state.count;
  }
});
const count = ref(0);
const coutAdd = () => {
  count.value = count.value + 1;
};
</script>
<style lang="scss" scoped>
//
</style>
