import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import album from '@/services/album';
import { albumKey } from './queries';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Album } from '@/types/album';

export function useGetAlbumsByUserId(userId: Ref<number>) {
  return useQuery<Album[]>({
    queryKey: albumKey.user.id(userId),
    queryFn: () => album.getFromUserId(userId.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
