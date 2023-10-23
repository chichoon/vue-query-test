import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { postKey } from './queries';
import post from '@/services/post';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Post } from '@/types/post';

export function useGetPostsByUserId(userId: Ref<number>) {
  return useQuery<Post[]>({
    queryKey: postKey.user.id(userId),
    queryFn: () => post.getFromUserId(userId.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
