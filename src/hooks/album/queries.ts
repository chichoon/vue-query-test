export const albumKey = {
  all: ['album'],
  user: {
    all: () => [...albumKey.all, 'user'],
    id: (userId: string) => [...albumKey.user.all(), userId],
  },
  id: (id: string) => [...albumKey.all, id],
};
