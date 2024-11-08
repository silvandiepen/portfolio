import { createRouter, createWebHistory } from "vue-router";

export const RouteName = {
  HOME: "home",
  PROJECT: "project",
  CV: "cv",
  WORK: "work",
  WORK_CATEGORY: "work_category",
  ABOUT: "about",
  CONTACT: "contact",
  USES: "uses",
  BLOG: "blog",
  BLOG_POST: "blog_post",
};

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  routes: [
    {
      name: RouteName.HOME,
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      name: RouteName.PROJECT,
      path: "/:slug",
      component: () => import("./views/Project.vue"),
    },
    {
      name: RouteName.ABOUT,
      path: "/about",
      component: () => import("./views/About/index.vue"),
    },
    {
      name: RouteName.CV,
      path: "/cv",
      component: () => import("./views/About/CV.vue"),
    },
    {
      name: RouteName.USES,
      path: "/uses",
      component: () => import("./views/About/Uses.vue"),
    },
    {
      name: RouteName.WORK,
      path: "/work",
      component: () => import("./views/Work.vue"),
    },
    {
      name: RouteName.WORK_CATEGORY,
      path: "/work/:category",
      component: () => import("./views/Work.vue"),
    },
    {
      name: RouteName.CONTACT,
      path: "/contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      name: RouteName.BLOG,
      path: "/blog",
      component: () => import("./views/Blog/index.vue"),
    },
    {
      name: RouteName.BLOG_POST,
      path: "/blog/:slug",
      component: () => import("./views/Blog/Article.vue"),
    },
  ],
});
