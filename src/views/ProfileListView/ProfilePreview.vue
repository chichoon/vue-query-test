<template>
  <li class="element-wrapper">
    <h3>{{ profile.name }}</h3>
    <span>{{ profile.email }}</span>
  </li>
</template>

<script setup lang="ts">
import type { Profile } from '@/types/profile';

interface Props {
  profile: Profile;
}

const { profile } = defineProps<Props>();
</script>

<style scoped>
.element-wrapper {
  border: 2px solid #12345678;
  border-radius: 5px;
}
</style>
