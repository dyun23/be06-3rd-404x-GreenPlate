<template>
  <div class="product-container">
    <h1 class="css-jfamsw e1yof8005">
      <div class="css-1uk9d3w e1yof8004">
        <span class="css-1qfsi3d e1yof8003">'{{ searchQuery }}'</span>
      </div>
      <span class="css-mmvz9h e1yof8002">에 대한 검색결과</span>
    </h1>
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
      <div v-if="totalItems > 5">
        <PagingComponent
          :totalPages="totalPages"
          :isCategoryPage="isCategoryPage"
          :searchWord="searchWord"
          @update:currentPage="handlePageUpdate"
        ></PagingComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCountComponent from "../components/item/ItemCountComponent.vue";
import CardComponent from "../components/item/CardComponent.vue";
import PagingComponent from "@/components/item/PagingComponent.vue";
import { mapStores } from "pinia";
import { useItemStore } from "@/stores/useItemStore";

export default {
  components: {
    ItemCountComponent,
    CardComponent,
    PagingComponent,
  },
  name: "ItemSearchResultPage",
  props: {
    query: String, // 쿼리 파라미터를 prop으로 받음
  },
  data() {
    return {
      cards: null,
      currentPage: 1,
      totalPages: 0,
      totalItems: 0,
      isCategoryPage: false,
      searchWord: null,
    };
  },
  computed: {
    ...mapStores(useItemStore),
    searchQuery() {
      return this.$route.query.word || ""; // 쿼리 파라미터를 직접 읽어오기
    },
  },
  mounted() {
    this.fetchResults();
  },
  watch: {
    $route() {
      this.fetchResults();
    },
  },
  methods: {
    async handlePageUpdate(page) {
      this.currentPage = page;
      await this.itemListStore.getItemList(this.currentPage);
      this.cards = this.itemListStore.itemList;
      console.log(this.cards);
      console.log("Current Page updated to:", this.currentPage);
    },
    async fetchResults() {
      const response = await this.itemListStore.getItemsByName(
        this.searchQuery,
        this.currentPage
      );
      this.searchWord = this.searchQuery;
      this.totalItems = this.itemListStore.totalItems;
      this.totalPages = this.itemListStore.totalPages;
      this.cards = response.content;
      console.log(this.cards);
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

.css-jfamsw {
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.5px;
}

h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
}

.css-1uk9d3w {
  max-width: 840px;
  display: inline-block;
  vertical-align: top;
}

.css-1qfsi3d {
  font-weight: 500;
  color: rgb(95, 0, 128);
}

.css-mmvz9h {
  font-weight: 400;
}
</style>
