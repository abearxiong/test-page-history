<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutHeader from './layouts/LayoutHeader.vue';
</script>

<template>
  <div>
    <LayoutHeader />
    <div style="padding: 10px">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
