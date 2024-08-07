import { createRouter, createWebHistory } from "vue-router";

import ItemPage from "@/pages/ItemPage.vue";
import ItemDetailPage from "@/pages/ItemDetailPage.vue";
import CartPage from "@/pages/CartPage.vue";
import RecipePage from "@/pages/RecipePage.vue";
import RecipeDetailsPage from "@/pages/RecipeDetailPage.vue";
import MyPage from "@/pages/MyPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RecipeWritePage from "@/pages/RecipeWritePage.vue";
import OrderComponent from "@/components/mypage/OrderComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/item/list/:page", component: ItemPage, props: true },
    { path: "/item/list/details/:id", component: ItemDetailPage },
    { path: "/user/details", component: MyPage },
    { path: "/cart", component: CartPage },
    { path: "/recipe/list/:page", component: RecipePage },
    { path: "/recipe/details", component: RecipeDetailsPage },
    { path: "/recipe/write", component: RecipeWritePage },
    { path: "/login", component: LoginPage },
    { path: "/orders", component: OrderComponent },
  ],
});

export default router;
