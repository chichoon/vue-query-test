<template>
  <div class="wrapper">
    <button class="button" :class="{ disabled: currentPage <= 1 }" @click="handlePrevPage">
      <ArrowLeftIcon />
    </button>
    <div>
      <span>{{ props.currentPage }}</span>
    </div>
    <button class="button" :class="{ disabled: currentPage >= props.limit }" @click="handleNextPage">
      <ArrowRightIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue';
import ArrowRightIcon from './icons/ArrowRightIcon.vue';

interface Props {
  currentPage: number;
  limit: number;
}

interface Emits {
  (e: 'update:currentPage', currentPage: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const handlePrevPage = () => {
  if (props.currentPage === 1) return;
  emits('update:currentPage', props.currentPage - 1);
};

const handleNextPage = () => {
  if (props.currentPage === props.limit) return;
  emits('update:currentPage', props.currentPage + 1);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button {
  background-color: #12345678;
  border: none;
  transition: transform 0.1s ease-in;

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  &.disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }

    &:active {
      transform: none;
    }
  }
}
</style>
