<template>
  <div class="error-wrapper">
    <h1>Something went wrong</h1>
    <p>{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: string;
}

const { error } = defineProps<Props>();
</script>
