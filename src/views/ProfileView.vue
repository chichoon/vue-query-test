<template>
  <header class="header">
    <RouterLink to="/profile">{{ '<' }}</RouterLink>
  </header>
  <LoadingComponent v-if="isLoading" />
  <ErrorComponent v-else-if="isError" :error="error" />
  <div v-else-if="!!profile" class="wrapper">
    <div class="profile">
      <div class="profile-img-wrapper">
        <template v-if="isDogLoading"><LoadingComponent /></template>
        <img v-else-if="!!dog" :src="dog.message" alt="dog" />
      </div>
      <div class="profile-metadata-wrapper">
        <h2>{{ profile.name }} ({{ profile.username }})</h2>
        <span>{{ profile.email }}</span>
        <span>Working in {{ profile.company.name }}</span>
      </div>
    </div>
    <div class="link-wrapper">
      <RouterLink :to="`/profile/${profile?.id}/album`" active-class="active">Go To Album</RouterLink>
      <RouterLink :to="`/profile/${profile?.id}/todo`" active-class="active">Go To Todo</RouterLink>
      <RouterLink :to="`/profile/${profile?.id}/post`" active-class="active">Go To Post</RouterLink>
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
import { useGetDog } from '@/hooks/profile/useGetDog';

const route = useRoute();
const id = computed(() => Number(route.params.id));
const { data: profile, isLoading, isError, error } = useGetProfile(id);
const { data: dog, isLoading: isDogLoading } = useGetDog(id);
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding: 10px;

  & a {
    text-decoration: none;
    color: inherit;
  }
}
.wrapper {
  width: 100%;
}

.profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.profile-img-wrapper {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  border-radius: 80px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profile-metadata-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
}

.link-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;

  & a {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: #eee;
    }

    &.active {
      background-color: #eee;
    }
  }
}
</style>
