import type { Ref } from 'vue';

export const profileKey = {
  all: ['profile'],
  id: (id: Ref<number>) => [...profileKey.all, id],
  dog: (id: Ref<number>) => [...profileKey.all, 'dog', id],
};
