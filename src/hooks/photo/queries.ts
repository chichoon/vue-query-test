import type { Ref } from 'vue';

export const photoKey = {
  all: ['photo'],
  album: {
    all: () => [...photoKey.all, 'album'],
    id: (albumId: Ref<number>) => [...photoKey.album.all(), albumId],
  },
  id: (id: Ref<number>) => [...photoKey.all, id],
};
