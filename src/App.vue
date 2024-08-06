<template>
  <!-- <ItemPage> </ItemPage> -->
  <!-- <ItemDetailPage></ItemDetailPage> -->
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
// import ItemPage from "./pages/ItemPage.vue";
// import ItemDetailPage from "./pages/ItemDetailPage.vue";
// import MyPage from "./pages/MyPage.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    // ItemPage,
    // ItemDetailPage,
    // MyPage,
    HeaderComponent,
    FooterComponent,
  },
  data() {},
  methods: {},
};
</script>

<style>
/* 공통 스타일 */
*,
:after,
:before,
legend,
td,
th {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 기본 요소 스타일 */
div {
  display: block;
  unicode-bidi: isolate;
}

body,
button,
input,
select,
textarea {
  font-size: 14px;
  color: #333;
  font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

/* 텍스트 관련 스타일 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

p {
  display: block;
  margin: 1em 0;
  unicode-bidi: isolate;
}

strong,
b,
optgroup {
  font-weight: 700;
}

em {
  font-style: italic;
}

/* 버튼 및 입력 요소 스타일 */
[type="button"],
[type="reset"],
[type="submit"],
button,
select {
  text-transform: none;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  color: inherit;
  line-height: 1.15;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

button {
  overflow: visible;
  background-color: transparent;
  border: none;
  border-radius: 0;
}

/* 리스트 스타일 */
ol,
ul {
  list-style-type: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}

/* 이미지 스타일 */
img {
  border-style: none;
  vertical-align: top;
  max-width: 100%;
}

/* 루트 변수 */
:root {
  --swiper-theme-color: #007aff;
}
</style>
