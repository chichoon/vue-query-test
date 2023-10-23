<template>
  <li class="element-wrapper">
    <RouterLink :to="`/profile/${profile.id}`" class="link">
      <div class="username">
        <h3>{{ profile.username }}</h3>
        <h4>{{ profile.name }}</h4>
      </div>
      <span>{{ profile.email }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { Profile } from '@/types/profile';

interface Props {
  profile: Profile;
}

const { profile } = defineProps<Props>();
</script>

<style scoped>
.element-wrapper {
  border: 2px solid #12345678;
  border-radius: 5px;
}

.link {
  display: block;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.username {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  & h3 {
    font-size: 18px;
    margin-right: 10px;
  }

  & h4 {
    font-size: 14px;
  }
}
</style>
