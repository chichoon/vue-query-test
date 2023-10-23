import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileListView.vue'),
      children: [
        {
          path: '/profile/:id',
          name: 'profile-single',
          component: () => import('@/views/ProfileView.vue'),
          children: [
            {
              path: '/album',
              name: 'album',
              component: () => import('@/views/AlbumView.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
