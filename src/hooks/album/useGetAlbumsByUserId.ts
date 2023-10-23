import { useQuery } from '@tanstack/vue-query';

import album from '@/services/album';
import { albumKey } from './queries';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Album } from '@/types/album';

export function useGetAlbumsByUserId(userId: string) {
  return useQuery<Album[]>({
    queryKey: albumKey.all,
    queryFn: () => album.getFromUserId(userId),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
