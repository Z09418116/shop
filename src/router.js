/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const routers = [
  {
    path: '/list',
    meta: {
      title: 'list',
    },
    component: resolve => require(['./views/list.vue'], resolve),
  },
  {
    path: '/home',
    meta: {
      title: 'home',
    },
    component: resolve => require(['./views/home.vue'], resolve),
  },
  {
    path: '/product/:id',
    meta: {
      title: 'product',
    },
    component: resolve => require(['./views/product.vue'], resolve),
  },
  {
    path: '/cart',
    meta: {
      title: 'cart',
    },
    component: resolve => require(['./views/cart.vue'], resolve),
  },
  {
    path: '/login/:loginStatus',
    meta: {
      title: 'login',
    },
    component: resolve => require(['./views/login.vue'], resolve),
  },
  {
    path: '*',
    redirect: '/login/login',
  },
  {
    path: '/TodoList',
    meta: {
      title: '/TodoList',
    },
    component: resolve => require(['./views/TodoList.vue'], resolve),
  },
  {
    path: '/Todo',
    meta: {
      title: '/Todo',
    },
    component: resolve => require(['./views/Todo.vue'], resolve),
  },
  {
    path: '/aaa',
    meta: {
      title: '/aaa',
    },
    component: resolve => require(['./views/aaa.vue'], resolve),
  },
  {
    path: '/finish',
    meta: {
      title: '/finish',
    },
    component: resolve => require(['./views/finish.vue'], resolve),
  },
];
export default routers;
