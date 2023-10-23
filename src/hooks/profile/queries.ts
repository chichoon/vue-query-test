export const profileKey = {
  all: ['profile'],
  id: (id: string) => [...profileKey.all, id],
};
