import type { Ref } from 'vue';

export const todoKey = {
  all: ['todo'],
  user: {
    all: () => [...todoKey.all, 'user'],
    id: (userId: Ref<number>) => [...todoKey.user.all(), userId],
  },
  id: (id: Ref<number>) => [...todoKey.all, id],
};
