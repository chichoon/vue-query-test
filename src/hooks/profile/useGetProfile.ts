import { useQuery } from '@tanstack/vue-query';

import { profileKey } from './queries';
import profile from '../../services/profile';
import { CACHE_TIME, STALE_TIME } from '../../utils/constants';

export function useGetProfile(id: string) {
  return useQuery({
    queryKey: profileKey.id(id),
    queryFn: () => profile.get(id),
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });
}
