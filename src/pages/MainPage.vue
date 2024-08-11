<template>
  <div class="product-container">
    <div class="css-product-elements-container1">
      <img class="logo-img" src="/image/title.PNG">
      <img
        class="main-img"
        src="https://raw.githubusercontent.com/beyond-sw-camp/be06-2nd-404x-GreenPlate/develop/img/greenplate.jpg"
        alt="Main Image"
      />
    </div>
    <div id="container" class="css-product-elements-container">
      <div
        v-for="(section, sectionIndex) in groupedSections"
        :key="sectionIndex"
      >
        <div class="SectionTitle undefined css-151twnq ej3ms6t0">
          <a href="/collections/sale231107" class="css-70ngop e10b7g5l1">
            <span class="css-r6zrzr ej3ms6t2">{{
              sectionTitles[sectionIndex]
            }}</span>
          </a>
        </div>
        <div class="css-product-items-container">
          <div class="css-product-items-box">
            <CardComponent
              v-for="(card, cardIndex) in section"
              :key="cardIndex"
              :card="card"
            ></CardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/item/CardComponent.vue";
import { mapStores } from "pinia";
import { useItemStore } from "@/stores/useItemStore";

export default {
  components: {
    CardComponent,
  },
  name: "MainPage",
  data() {
    return {
      cards: [],
      sectionTitles: [
        "🛒 이 상품 어때요?",
        "🎉 지금 인기 있는 상품",
        "🌟 이번주 신상 모음",
      ],
    };
  },
  computed: {
    ...mapStores(useItemStore),
    groupedSections() {
      const size = 4; // 한 섹션당 카드 개수
      const sections = [];
      for (let i = 0; i < this.cards.length; i += size) {
        sections.push(this.cards.slice(i, i + size));
      }
      return sections.slice(0, this.sectionTitles.length);
    },
  },
  mounted() {
    this.getInitItem();
  },
  methods: {
    async getInitItem() {
      await this.itemListStore.getItems(1, 12);
      this.cards = this.itemListStore.itemList;
    },
  },
};
</script>

<style scoped>
.main-img {
  margin: 50px auto;
  width: 75%;
}
#container {
  position: relative;
}
.css-product-elements-container1 {
  text-align: center;
  margin: 0px auto;
  width: 75%;
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

.css-151twnq {
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.css-70ngop {
  position: relative;
  display: flex;
  min-height: 48px;
  padding: 8px 0px 8px 8px;
  cursor: pointer;
}

.css-r6zrzr {
  color: rgb(51, 51, 51);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 700;
}
a {
  background-color: transparent;
}
.logo-img{
  margin-top: 30px;
  width: 60%;
  height: 50px;
}
</style>
