<template>
  <div class="product-container">
    <CategoryComponent></CategoryComponent>
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

export default {
  components: {
    CategoryComponent,
    ItemCountComponent,
    CardComponent,
    PagingComponent,
  },
  name: "ItemPage",
  data() {
    return {
      cards: [],
      currentPage: 1,
      totalPages: 0,
      totalItems: 0,
      size: 5,
    };
  },
  computed: {
    ...mapStores(useItemStore),
  },
  mounted() {
    this.getInitItem();
  },
  methods: {
    async getInitItem() {
      await this.itemListStore.getItemList(this.currentPage);
      this.totalPages = this.itemListStore.totalPages;
      this.totalItems = this.itemListStore.totalItems;
      this.cards = this.itemListStore.itemList;
    },
    async handlePageUpdate(page) {
      this.currentPage = page;
      await this.itemListStore.getItemList(this.currentPage);
      this.cards = this.itemListStore.itemList;
      console.log(this.cards);
      console.log("Current Page updated to:", this.currentPage);
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
