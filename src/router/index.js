import { createRouter, createWebHistory } from "vue-router";

import ItemPage from "@/pages/ItemPage.vue";
import ItemDetailPage from "@/pages/ItemDetailPage.vue";
import CartPage from "@/pages/CartPage.vue";
import RecipePage from "@/pages/RecipePage.vue";
import RecipeDetailsPage from "@/pages/RecipeDetailPage.vue";
import MyPage from "@/pages/MyPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RecipeWritePage from "@/pages/RecipeWritePage.vue";
import MyOrderPage from "@/pages/MyOrderPage.vue";
import MyAddressPage from "@/pages/MyAddressPage.vue";
import CompanyProductPage from "@/pages/CompanyProductPage.vue";
import CompanyOrderPage from "@/pages/CompanyOrderPage.vue";
import RSignuppComponentPage from "@/pages/RSignuppComponentPage.vue";



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
    { path: "/mypage/order", component: MyOrderPage },
    { path: "/mypage/address", component: MyAddressPage }, 
    { path: "/company/product", component: CompanyProductPage },
    { path: "/company/order", component: CompanyOrderPage },
    { path: "/signup", component: RSignuppComponentPage },
  ],
});


export default router;
