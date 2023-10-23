<template>
  <div>
    <button>
      {{ `<` }}
    </button>
    <button>
      <span>{{ props.currentPage }}</span>
    </button>
    <button>
      {{ `>` }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number;
}

const props = defineProps<Props>();
</script>
