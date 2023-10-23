import { useQuery } from '@tanstack/vue-query';

import { type Profile } from '@/types/profile';
import profile from '@/services/profile';
import { CACHE_TIME, STALE_TIME } from '@/utils/constants';
import { profileKey } from './queries';

export function useGetProfiles() {
  return useQuery<Profile[]>({
    queryKey: profileKey.all,
    queryFn: () => profile.getAll(),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
