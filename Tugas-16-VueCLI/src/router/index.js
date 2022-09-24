import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/BlogsView.vue"),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: () => import("../views/BlogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
