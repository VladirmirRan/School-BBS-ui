// pc端路由
export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),//后缀名不能省略
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/main/index.vue'),
      },
      {
        path: '/messageWall',
        name: 'messageWall',
        component: () => import('@/views/message-wall/index.vue'),
      },
      {
        path: '/lastAndFound',
        name: 'lastAndFound',
        component: () => import('@/views/last-and-found/index.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        children: [
          {
            path: '',
            redirect: '/profile/info',
            name:'default',
          },
          {
            path: 'info',
            name: 'info',
            component: () => import('@/views/profile/Info/index.vue'),
          },
          {
            path: 'article',
            name: 'article',
            component: () => import('@/views/profile/Article/index.vue'),
          },
          {
            path: 'article/add',
            name: 'addArticle',
            component: () => import('@/views/profile/Article/add.vue'),
          },
          {
            path: 'article/star',
            name: 'starArticle',
            component: () => import('@/views/profile/Article/star.vue'),
          },
        ],
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404/index.vue')
      },
      // 404 页面处理
      {
        path: '/:catchAll(.*)',
        name: 'error',
        redirect: '/404'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-register/index.vue')
  },
]