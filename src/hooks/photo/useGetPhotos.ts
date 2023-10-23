import { useQuery } from '@tanstack/vue-query';

import { photoKey } from './queries';
import photo from '@/services/photo';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Photo } from '@/types/photo';

export function useGetPhotos() {
  return useQuery<Photo[]>({
    queryKey: photoKey.all,
    queryFn: photo.getAll,
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
