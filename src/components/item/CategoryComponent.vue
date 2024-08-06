<template>
  <div class="css-product">
    <h3 class="css-product-h3">{{ mainCategory }}</h3>
    <ul class="css-product-ul">
      <li
        class="css-product-li list1"
        v-for="(category, index) in subCategories"
        :key="index"
      >
        <a
          :class="[
            'css-product-category',
            { 'css-product-default-category': index === 0 },
          ]"
          class="category0"
        >
          {{ category }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  data() {
    return {
      mainCategory: "상위 카테고리",
      subCategories: [
        "하위 카테고리1",
        "하위 카테고리2",
        "하위 카테고리3",
        "하위 카테고리4",
        "하위 카테고리5",
        "하위 카테고리6",
        "하위 카테고리7",
      ],
    };
  },
};
</script>

<style scoped>
@charset "utf-8";

.css-product {
  width: 1050px;
  margin: 0px auto;
}

.css-product-h3 {
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
}

.css-product-ul {
  display: grid;
  grid-template-columns: repeat(4, 180px);
  gap: 16px 83px;
  overflow: hidden;
  margin-top: 28px;
  padding: 30px 40px;
  border: 1px solid rgb(226, 226, 226);
  line-height: 20px;
}

.css-product-li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.css-product-default-category,
.css-product-category {
  letter-spacing: -1px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: rgb(51, 51, 51);
  text-decoration: none;
}

.css-product-default-category {
  font-weight: 700;
  color: rgb(95, 0, 128);
}

.css-product-category:hover {
  font-weight: 700;
  color: rgb(95, 0, 128);
}
</style>
