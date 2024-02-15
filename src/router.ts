import { createRouter, createWebHistory } from "vue-router";


export const RouteName = {
    HOME: 'home',
    PROJECT: 'project'
}


export default createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0, left: 0 }
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
        }
    ],
});
