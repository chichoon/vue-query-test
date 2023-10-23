<template>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <div v-else-if="!!album" class="album-wrapper">
    <span>{{ album[currentPage].title }}</span>
    <img :src="album[currentPage].url" :alt="album[currentPage].title" />
    <PaginationComponent v-model:currentPage="currentPage" :limit="10" />
  </div>
  <PaginationComponent v-model:currentPage="currentAlbum" :limit="10" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import PaginationComponent from '@/components/PaginationComponent.vue';
import { useGetPhotosByAlbumId } from '@/hooks/photo/useGetPhotoByAlbumId';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

const currentAlbum = ref(1);
const currentPage = ref(1);
const { data: album, isLoading, isError, error } = useGetPhotosByAlbumId(currentAlbum);

watch(currentAlbum, () => {
  currentPage.value = 1;
});
</script>

<style scoped>
.album-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;

  & span {
    font-size: 20px;
    margin-bottom: 20px;
  }

  & img {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
  }
}
</style>
