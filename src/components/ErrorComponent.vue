<template>
  <div class="error-wrapper">
    <h1>Something went wrong</h1>
    <p>{{ error as string }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: unknown;
}

const { error } = defineProps<Props>();
</script>
