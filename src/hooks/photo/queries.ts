export const photoKey = {
  all: ['photo'],
  album: {
    all: () => [...photoKey.all, 'album'],
    id: (albumId: string) => [...photoKey.album.all(), albumId],
  },
  id: (id: string) => [...photoKey.all, id],
};
