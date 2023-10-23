import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { photoKey } from './queries';
import photo from '@/services/photo';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Photo } from '@/types/photo';

export function useGetPhotosByAlbumId(albumId: Ref<number>) {
  return useQuery<Photo[]>({
    queryKey: photoKey.album.id(albumId),
    queryFn: () => photo.getAllPhotosInAlbum(albumId.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
