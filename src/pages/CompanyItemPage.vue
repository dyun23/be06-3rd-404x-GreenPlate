<template>
  <div class="css-u71x2d eug5r8l4">
    <div class="css-72lz6z eug5r8l3">
      <CompanyLeftMenuComponent></CompanyLeftMenuComponent>
      <CompanyItemListComponent></CompanyItemListComponent>
    </div>
    <div class="component-container"></div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import CompanyLeftMenuComponent from "../components/mypage/CompanyLeftMenuComponent";
import CompanyItemListComponent from "@/components/company/CompanyItemListComponent.vue";

export default {
  components: {
    CompanyLeftMenuComponent,
    CompanyItemListComponent,
  },
  name: "CompanyProductPage",
  data() {
    return {};
  },
};
</script>

<style scoped>
.css-u71x2d {
  position: relative;
  min-width: 1050px;
  background-color: rgb(242, 245, 248);
}
* {
  box-sizing: border-box;
  margin: 0;
}
div {
  display: block;
  unicode-bidi: isolate;
}
.css-72lz6z {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 50px 0px 80px;
  margin: 0px auto;
}
</style>
