import { createWebHistory, createRouter } from 'vue-router';

export const routes = createRouter({
  history: createWebHistory('/test-page-history'),
  routes: [
    {
      path: '/',
      component: () => {
        return import('../views/Home.vue');
      },
    },
    {
      path: '/about',
      component: () => {
        return import('../views/About.vue');
      },
    },
  ],
});
