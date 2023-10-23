<template>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <template v-if="!!todoPages">
    <ul v-for="(todos, index) in todoPages.pages" :key="index" class="todo-wrappper">
      <li v-for="todo in todos" :key="todo.id" class="todo-element">
        <div :class="{ dot: true, done: todo.completed }" />
        <span>{{ todo.title }}</span>
      </li>
    </ul>
    <button @click="() => fetchNextPage()">Load more</button>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ErrorComponent from '@/components/ErrorComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import { useGetInfiniteTodos } from '@/hooks/todo';

const route = useRoute();
const id = computed(() => Number(route.params.id));
const { data: todoPages, isLoading, isError, error, fetchNextPage } = useGetInfiniteTodos(id);
</script>

<style scoped>
.dot {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid #ccc;
  box-shadow: inset 0 0 0 2px #fff;
  margin-right: 10px;

  &.done {
    background-color: #ccc;
  }
}

.todo-element {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
</style>
