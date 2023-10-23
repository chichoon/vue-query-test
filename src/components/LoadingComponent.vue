<template>
  <div class="loading-wrapper">
    <LoadingIcon />
  </div>
</template>

<script setup lang="ts">
import LoadingIcon from './icons/LoadingIcon.vue';
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-wrapper {
  animation: spin 0.3s linear infinite;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100px;
    height: 100px;
  }
}
</style>
