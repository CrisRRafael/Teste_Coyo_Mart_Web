import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/clients",
    name: "Clients",

    component: () => import("../views/Clients.vue"),
  },
  {
    path: "/products",
    name: "Product",

    component: () => import("../views/Product.vue"),
  },
  {
    path: "/categories",
    name: "Categories",

    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/newproduct",
    name: "Newproduct",

    component: () => import("../views/NewProduct.vue"),
  },
  {
    path: "/updateproduct/:id",
    name: "UpdateProduct",

    component: () => import("../views/UpdateProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
