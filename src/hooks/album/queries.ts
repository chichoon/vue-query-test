import type { Ref } from 'vue';

export const albumKey = {
  all: ['album'],
  user: {
    all: () => [...albumKey.all, 'user'],
    id: (userId: Ref<number>) => [...albumKey.user.all(), userId],
  },
  id: (id: Ref<number>) => [...albumKey.all, id],
};
