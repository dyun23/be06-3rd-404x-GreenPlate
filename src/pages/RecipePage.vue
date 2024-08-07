<template>
  <div id="main">
    <div id="content">
      <div class="page_aticle">
        <div id="lnbMenu" class="lnb_menu">
          <div class="inner_lnb">
            <div class="ico_cate">
              <span class="tit">레시피</span>
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
  },
};
</script>

<style scoped>
@import "../styles/RecipeCss.css";
</style>
