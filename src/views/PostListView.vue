<template>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <div v-else-if="!!posts" class="post-wrapper">
    <h3>{{ posts[currentPage].title }}</h3>
    <p>{{ posts[currentPage].body }}</p>
    <PaginationComponent v-model:currentPage="currentPage" :start="0" :limit="posts.length - 1" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useGetPostsByUserId } from '@/hooks/post/useGetPostsByUserId';
import ErrorComponent from '@/components/ErrorComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const route = useRoute();
const id = computed(() => Number(route.params.id));
const currentPage = ref(0);
const { data: posts, isLoading, isError, error } = useGetPostsByUserId(id);
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;

  & h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  & p {
    width: 500px;
    height: 300px;
    overflow-y: scroll;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
