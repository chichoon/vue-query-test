<template>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <div v-if="!!todoPages" class="todo-wrapper">
    <ul class="todo-list">
      <template v-for="(todos, index) in todoPages.pages" :key="index">
        <li v-for="todo in todos" :key="todo.id" class="todo-element">
          <div :class="{ dot: true, done: todo.completed }" />
          <span>{{ todo.title }}</span>
        </li>
      </template>
    </ul>
    <button class="load-button" @click="() => fetchNextPage()">Load more</button>
  </div>
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

.todo-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.todo-list {
  width: 500px;
  height: 400px;
  overflow-y: scroll;
  margin-bottom: 20px;
}

.todo-element {
  display: flex;
  flex-direction: row;
  padding: 5px;
}

.load-button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
}
</style>
