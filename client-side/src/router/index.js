import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/pages/Home.vue"),
        },
        {
          path: "/accounts",
          name: "accounts",
          component: () => import("@/pages/Accounts.vue"),
        },
        {
          path: "/users",
          name: "users",
          component: () => import("@/pages/Users.vue"),
        },
      ],
    },
  ],
});

export default router;
