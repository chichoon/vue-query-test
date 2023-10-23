<template>
  <LoadingComponent v-if="isLoading" />
  <ul class="list-wrapper">
    <ProfilePreview v-for="profile in profiles" :key="profile.id" :profile="profile" />
  </ul>
</template>

<script setup lang="ts">
import { useGetProfiles } from '@/hooks/profile';
import ProfilePreview from './ProfilePreview.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';

const { data: profiles, isLoading, isError } = useGetProfiles();
</script>

<style scoped>
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
