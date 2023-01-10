<template>
  <div>Home</div>
</template>
<script lang="tsx" setup>
import { onMounted, onUnmounted } from 'vue';
import { computed } from 'vue';
import { useBrowserLocation } from '@vueuse/core';
const dev = computed(() => 23);
const location = useBrowserLocation();
onMounted(() => {
  const { state } = location.value;
  const { count } = state;
  console.log('location home count', count);
});
</script>
<style lang="scss" scoped>
//
</style>
