<template>
  <div class="css-product">
    <div v-if="!isCategoryPage">
      <h3 class="css-product-h3">{{ allCategory }}</h3>
    </div>
    <div v-else>
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <h3 class="css-product-h3">{{ categories.main }}</h3>
        <ul class="css-product-ul">
          <li
            class="css-product-li list1"
            v-for="(category, index) in categories.subList"
            :key="index"
          >
            <router-link
              :to="{
                path: `/item/list/${categories.main}/${category}/${currentPage}`,
              }"
              :class="[
                'css-product-category',
                {
                  'css-product-default-category': category === sub,
                },
              ]"
              class="category0"
            >
              {{ category }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  data() {
    return {
      currentPage: 1,
      allCategory: "ALL",
      isLoading: true,
    };
  },
  props: {
    isCategoryPage: Boolean,
    categories: {
      type: Object,
      default: () => ({ main: "", subList: [] }),
    },
    main: String,
    sub: String,
  },
  watch: {
    categories: {
      immediate: true,
      handler(change) {
        if (change) {
          this.isLoading = false;
        }
      },
    },
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
  color: rgb(102, 153, 51);
}

.css-product-category:hover {
  font-weight: 700;
  color: rgb(102, 153, 51);
}
</style>
