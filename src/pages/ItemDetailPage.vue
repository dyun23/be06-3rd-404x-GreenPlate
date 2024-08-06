<template>
  <div class="css-n48rgu ex9g73v0">
    <div class="css-16c0d8l e1brqtzw0">
      <ItemDetailComponent :item="item"></ItemDetailComponent>
      <ItemDetailMenuComponent></ItemDetailMenuComponent>
      <div class="css-0 el27cq1">
        <ItemDetailContentsComponent></ItemDetailContentsComponent>
        <ItemDetailDetailComponent></ItemDetailDetailComponent>
        <ItemReviewComponent></ItemReviewComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ItemDetailComponent from "../components/item/ItemDetailComponent.vue";
import ItemDetailMenuComponent from "../components/item/ItemDetailMenuComponent.vue";
import ItemDetailContentsComponent from "../components/item/ItemDetailContentsComponent.vue";
import ItemDetailDetailComponent from "../components/item/ItemDetailDetailComponent.vue";
import ItemReviewComponent from "../components/item/ItemReviewComponent.vue";
import { mapStores } from "pinia";
import { useItemDetailStore } from "@/stores/useItemDetailStore";

export default {
  components: {
    ItemDetailComponent,
    ItemDetailMenuComponent,
    ItemDetailContentsComponent,
    ItemDetailDetailComponent,
    ItemReviewComponent,
  },
  name: "ItemDetailPage",
  data() {
    return {
      item: null,
    };
  },
  computed: {
    ...mapStores(useItemDetailStore),
  },
  methods: {
    async getInitItem() {
      const id = this.$route.params.id;
      const result = await this.itemDetailStore.getItemDetail(id);
      this.item = result;
      console.log(this.item);
    },
  },
  mounted() {
    this.getInitItem();
  },
};
</script>

<style scoped>
.css-n48rgu {
  width: 100%;
  position: relative;
}

.css-16c0d8l {
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 30px;
}

*,
:after,
:before {
  box-sizing: border-box;
}

user agent stylesheet div {
  display: block;
  unicode-bidi: isolate;
}
</style>
