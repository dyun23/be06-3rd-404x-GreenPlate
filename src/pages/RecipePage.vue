<template>
  <div id="main">
    <div id="content">
      <div class="page_aticle">
        <div id="lnbMenu" class="lnb_menu">
          <div class="inner_lnb">
            <div class="ico_cate">
              <span class="tit">레시피</span>
              <router-link v-show="isLoggedIn" to="/recipe/write" class="write-button">
                레시피 작성
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="layout-wrapper">
        <RecipeItemComponent :cards="cards"></RecipeItemComponent>
        <PagingComponent
          :totalPages="totalPages"
          @update:currentPage="handlePageUpdate"
        ></PagingComponent>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItemComponent from "../components/recipe/RecipeItemComponent.vue";
import { mapStores } from "pinia";
import { useRecipeStore } from "@/stores/useRecipeStore";
import { useUserStore } from "@/stores/useUserStore";
import PagingComponent from "@/components/recipe/PagingComponent.vue";

export default {
  components: {
    RecipeItemComponent,
    PagingComponent,
  },
  name: "RecipePage",
  data() {
    return {
      currentPage: 1,
      totalPages: 0,
      cards: null,
    };
  },
  mounted() {
    this.getInitRecipe();
  },
  methods: {
    async getInitRecipe() {
      await this.recipeListStore.getRecipeList(this.currentPage);
      this.totalPages = this.recipeListStore.totalPages;
      this.cards = this.recipeListStore.recipeList;
      console.log(this.cards);
    },
    async handlePageUpdate(page) {
      this.currentPage = page;
      await this.recipeListStore.getRecipeList(this.currentPage);
      this.cards = this.recipeListStore.recipeList;
      console.log(this.cards);
      console.log("Current Page updated to:", this.currentPage);
    },
  },
  computed: {
    ...mapStores(useRecipeStore),
    ...mapStores(useUserStore),
    isLoggedIn() {
      return this.userStore.isLoggedIn;
    },
  },
};
</script>

<style scoped>
@import "../styles/RecipeCss.css";
.ico_cate {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.write-button {
  margin-left: auto;
  margin-right: 50px;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 30px;
  border-radius: 3px;
  color: rgb(102, 153, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(102, 153, 51);
  font-size: 14px;
  line-height: 28px;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.write-button:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(102, 153, 51);
  border: 1px solid rgb(255, 255, 255);
}
</style>
