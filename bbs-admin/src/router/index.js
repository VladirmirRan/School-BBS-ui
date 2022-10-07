import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/user',
    name: "main",
    component: () =>import("@/views/main/index.vue"),
    beforeEnter: (to, from, next) => {
      const token = store.getters.token;
      // 未登录直接路由到登录页
      if (!token) {
        next({
          path: '/login',
        })
        return;
      }
      next();
    },
    children: [
      {
        path: "/user",
        name: "user",
        component: () =>import("@/views/user/index.vue"),
      },
      {
        path: "/article",
        name: "article",
        component: () =>import("@/views/article/index.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>import("@/views/login/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
