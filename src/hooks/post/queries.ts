import type { Ref } from 'vue';

export const postKey = {
  all: ['post'],
  user: {
    all: () => [...postKey.all, 'user'],
    id: (userId: Ref<number>) => [...postKey.user.all(), userId],
  },
  id: (id: Ref<number>) => [...postKey.all, id],
};
