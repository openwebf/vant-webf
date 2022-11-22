import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: '/',
    path: '/',
    redirect: {
      name: 'button',
    },
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'button',
    path: '/button',
    component: () => import('./view/components/button'),
    meta: {
      title: 'Button',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
