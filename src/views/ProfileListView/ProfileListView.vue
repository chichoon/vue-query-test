<template>
  <header class="header">
    <h1>Profiles</h1>
  </header>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <ul v-else class="list-wrapper">
    <ProfilePreview v-for="profile in profiles" :key="profile.id" :profile="profile" />
  </ul>
</template>

<script setup lang="ts">
import { useGetProfiles } from '@/hooks/profile';
import ProfilePreview from './ProfilePreview.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

const { data: profiles, isLoading, isError, error } = useGetProfiles();
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.list-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
}
</style>
