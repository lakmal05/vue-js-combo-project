import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductPage from "../components/ProductPage.vue";
import CatogrysPage from "../components/CatogrysPage.Vue";
import axiosInstance from "../axiosFile";
import { myMiddleware, rollBack } from "../middleware/middlewareFile";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: rollBack,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: myMiddleware,
    },
    {
      path: "/productPage",
      name: "productPage",
      component: ProductPage,
      beforeEnter: myMiddleware,
    },
    {
      path: "/catogrysPage",
      name: "catogrysPage",
      component: CatogrysPage,
      beforeEnter: myMiddleware,
    },
    {
      path: "/middleware",
      beforeEnter: myMiddleware,
    },
  ],
});

//router.beforeEach(rollBack)

export default router;
