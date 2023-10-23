import type { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { profileKey } from './queries';
import dog from '@/services/dog';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import type { Dog } from '@/types/profile';

export function useGetDog(id: Ref<number>) {
  return useQuery<Dog>({
    queryKey: profileKey.dog(id),
    queryFn: dog.get,
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
