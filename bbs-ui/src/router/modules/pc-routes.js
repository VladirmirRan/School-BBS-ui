// pc端路由
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/layout/index.vue'),//后缀名不能省略
    children: [
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-register/index.vue')
  },
]