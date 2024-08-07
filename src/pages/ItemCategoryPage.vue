<template>
  <div class="product-container">
    <CategoryComponent
      :isCategoryPage="isCategoryPage"
      :categories="categories"
      :main="main"
      :sub="sub"
    ></CategoryComponent>
    <div id="container" class="css-product-elements-container">
      <div class="css-product-items-container">
        <ItemCountComponent :totalItems="totalItems"></ItemCountComponent>
        <div class="css-product-items-box">
          <CardComponent
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          ></CardComponent>
        </div>
      </div>
      <PagingComponent
        :totalPages="totalPages"
        :isCategoryPage="isCategoryPage"
        :main="main"
        :sub="sub"
        @update:currentPage="handlePageUpdate"
      ></PagingComponent>
    </div>
  </div>
</template>

<script>
import CategoryComponent from "../components/item/CategoryComponent.vue";
import ItemCountComponent from "../components/item/ItemCountComponent.vue";
import CardComponent from "../components/item/CardComponent.vue";
import PagingComponent from "@/components/item/PagingComponent.vue";
import { mapStores } from "pinia";
import { useItemStore } from "@/stores/useItemStore";
import { useCategoryStore } from "@/stores/useCategoryStore";

export default {
  components: {
    CategoryComponent,
    ItemCountComponent,
    CardComponent,
    PagingComponent,
  },
  name: "ItemCategoryPage",
  data() {
    return {
      cards: [],
      categories: null,
      currentPage: 1,
      totalPages: 0,
      totalItems: 0,
      size: 5,
      isCategoryPage: true,
      main: null,
      sub: null,
    };
  },
  watch: {
    $route() {
      console.log("변경 감지");
      window.location.reload();
    },
  },
  computed: {
    ...mapStores(useItemStore),
    ...mapStores(useCategoryStore),
  },
  mounted() {
    this.main = this.$route.params.main;
    this.sub = this.$route.params.sub;
    this.getInitItem();
    this.getCategories(this.main);
  },
  methods: {
    async getInitItem() {
      await this.itemListStore.getItemListByCategory(this.main, this.sub);
      this.totalPages = this.itemListStore.totalPages;
      this.totalItems = this.itemListStore.totalItems;
      this.cards = this.itemListStore.itemList;
    },
    async handlePageUpdate(page) {
      this.currentPage = page;
      await this.itemListStore.getItemListByCategory(this.main, this.sub);
      this.cards = this.itemListStore.itemList;
      console.log(this.cards);
      console.log("Current Page updated to:", this.currentPage);
    },
    async getCategories(main) {
      await this.categoryStore.getSubs(main);
      this.categories = this.categoryStore.categories;
      console.log(this.categories);
    },
  },
};
</script>

<style scoped>
#container {
  position: relative;
}
.css-product-elements-container {
  display: flex;
  flex-direction: column;
  width: 1050px;
  margin: 0px auto;
}
.css-product-items-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, 249px);
  gap: 31px 18px;
  width: 100%;
}
div {
  unicode-bidi: isolate;
}
:not(svg) {
  transform-origin: 0px 0px;
}
*,
:after,
:before,
legend,
td,
th {
  padding: 0;
}
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
}
</style>
