# vue-query-test

Tanstack Query 테스트를 하고 싶은데 [RealWorld 프로젝트](https://github.com/chichoon/vuealworld) 서버가 죽어서 1일만에 급조한 테스트 페이지

```ts
function useTestQuery(id: Ref<number) { // 중요!!
  return useQuery({
    queryKey: ['test', id], // Ref 인 id를 그대로 넣어주어야 한다
    queryFn: () => fetchTest(id.value)
  })
}
```

useQuery 의 Query Key 로 Ref 를 그대로 넣어주어야 Ref 값이 변동될 때마다 쿼리를 새로 받아오게 된다
