<template>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <div v-else-if="!!profile" class="wrapper">
    <div class="header">
      <span>{{ profile?.name }}</span>
    </div>
    <div class="link-wrapper">
      <RouterLink :to="`/profile/${profile?.id}/album`">Go To Album</RouterLink>
      <RouterLink :to="`/profile/${profile?.id}/todo`">Go To Todo</RouterLink>
      <RouterLink :to="`/profile/${profile?.id}/post`">Go To Post</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import { useGetProfile } from '@/hooks/profile';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const id = computed(() => Number(route.params.id));
const { data: profile, isLoading, isError, error } = useGetProfile(id);
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.link-wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
