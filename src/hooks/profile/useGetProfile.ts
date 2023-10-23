import { useQuery } from '@tanstack/vue-query';

import { profileKey } from './queries';
import profile from '../../services/profile';
import { CACHE_TIME, STALE_TIME } from '../../utils/constants';
import type { Profile } from '@/types/profile';

export function useGetProfile(id: string) {
  return useQuery<Profile>({
    queryKey: profileKey.id(id),
    queryFn: () => profile.get(id),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
