// 移动端的路由
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/main/index.vue'),//后缀名不能省略
  }
]