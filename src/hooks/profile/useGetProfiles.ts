import { useQuery } from '@tanstack/vue-query';

import { profileKey } from './queries';
import profile from '../../services/profile';
import { CACHE_TIME, STALE_TIME } from '../../utils/constants';

export function useGetProfiles() {
  return useQuery({
    queryKey: profileKey.all,
    queryFn: () => profile.getAll(),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
