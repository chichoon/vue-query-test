<template>
  <LoadingComponent v-if="isPhotoListLoading" />
  <ErrorComponent v-else-if="isPhotoListError" :error="PhotoListError" />
  <div v-else-if="!!album" class="album-wrapper">
    <span>{{ album[currentPage].title }}</span>
    <img :src="album[currentPage].url" :alt="album[currentPage].title" />
    <PaginationComponent v-model:currentPage="currentPage" :start="0" :limit="album.length - 1" />
  </div>
  <PaginationComponent v-model:currentPage="currentAlbum" :start="(id - 1) * 10 + 1" :limit="(id - 1) * 10 + 10" />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import PaginationComponent from '@/components/PaginationComponent.vue';
import { useGetPhotosByAlbumId } from '@/hooks/photo/useGetPhotoByAlbumId';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';

const route = useRoute();
const id = computed(() => Number(route.params.id));

const currentAlbum = ref((id.value - 1) * 10 + 1);
const currentPage = ref(0);
const {
  data: album,
  isLoading: isPhotoListLoading,
  isError: isPhotoListError,
  error: PhotoListError,
} = useGetPhotosByAlbumId(currentAlbum);

watch(currentAlbum, () => {
  currentPage.value = 0;
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
