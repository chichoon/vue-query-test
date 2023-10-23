import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import photo from '@/services/photo';
import { photoKey } from './queries';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Photo } from '@/types/photo';

export function useGetPhoto(photoId: Ref<number>) {
  return useQuery<Photo>({
    queryKey: photoKey.id(photoId),
    queryFn: () => photo.get(photoId.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
