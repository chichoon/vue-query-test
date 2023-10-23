import { useQuery } from '@tanstack/vue-query';
import { type Ref } from 'vue';

import { profileKey } from './queries';
import profile from '../../services/profile';
import { CACHE_TIME, STALE_TIME } from '../../utils/constants';
import type { Profile } from '@/types/profile';

export function useGetProfile(id: Ref<number>) {
  return useQuery<Profile>({
    queryKey: profileKey.id(id),
    queryFn: () => profile.get(id.value),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
