<template>
  <div class="css-product-items-count-box">
    <div class="css-product-items-count">총 {{ totalItems }}건</div>
  </div>
</template>

<script>
export default {
  name: "ItemCountComponent",
  props: ["totalItems"],
};
</script>

<style scoped>
.css-product-items-count-box {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 20px;
  line-height: 20px;
}

.css-product-items-count {
  font-size: 14px;
  font-weight: 800;
  color: rgb(51, 51, 51);
}
</style>
