<template>
  <ul>
    <li>hihi</li>
  </ul>
</template>

<script setup lang="ts">
import { useGetProfiles } from '../hooks/profile';

const { data: profiles } = useGetProfiles();
</script>
