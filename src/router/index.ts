import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/profile',
    },
    {
      path: '/profile',
      component: () => import('@/views/ProfileListView/ProfileListView.vue'),
    },
    {
      path: '/profile/:id',
      component: () => import('@/views/ProfileView.vue'),
      children: [
        // { path: 'album', redirect: (to) => ({ path: `${to.path}/1` }) },
        { path: 'album', component: () => import('@/views/AlbumListView.vue') },
        { path: 'todo', component: () => import('@/views/TodoListView.vue') },
        { path: 'post', component: () => import('@/views/PostListView.vue') },
      ],
    },
  ],
});

export default router;
