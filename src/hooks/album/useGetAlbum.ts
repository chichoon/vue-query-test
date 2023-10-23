import { useQuery } from '@tanstack/vue-query';

import { albumKey } from './queries';
import album from '@/services/album';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Album } from '@/types/album';

export function useGetAlbum(albumId: string) {
  return useQuery<Album>({
    queryKey: albumKey.id(albumId),
    queryFn: () => album.get(albumId),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
