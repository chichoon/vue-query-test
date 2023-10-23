import type { Ref } from 'vue';
import { useInfiniteQuery } from '@tanstack/vue-query';

import { todoKey } from './queries';
import todo from '@/services/todo';
import type { Todo } from '@/types/todo';

export function useGetInfiniteTodos(userId: Ref<number>) {
  return useInfiniteQuery<Todo[]>({
    queryKey: todoKey.user.id(userId),
    queryFn: () => todo.getFromUserId(userId.value),
    getNextPageParam: () => true,
  });
}
