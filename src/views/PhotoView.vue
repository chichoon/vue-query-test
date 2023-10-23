<template>
  <div><span>테스트</span></div>
  <PaginationComponent v-model:currentPage="currentPage" />
</template>

<script setup lang="ts">
import PaginationComponent from '@/components/PaginationComponent.vue';
import { ref } from 'vue';

const currentPage = ref(1);
</script>
