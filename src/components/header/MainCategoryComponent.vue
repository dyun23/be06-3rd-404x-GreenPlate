<template>
    <div :style="divWidth" class="category-div">
      <ul class="category-ul">
        <template v-for="(category, mainIndex) in categories" :key="mainIndex">
          <li class="category-list" 
              @mouseover="applyStyle(mainIndex)" 
              @mouseleave="removeStyle(mainIndex)">
            <div class="category-list-main">
              <span class="category-list-main-title"> {{ category.main }} </span>
            </div>
            <ul class="category-list-sub-ul" v-show="isHovered[mainIndex]">
              <SubCategoryComponent 
                v-for="(sub, subIndex) in category.subList" 
                :key="subIndex" 
                :name="sub" />
            </ul>
          </li>
        </template>
        <li :style="liWidth" class="category-sub-back"></li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SubCategoryComponent from './SubCategoryComponent.vue';
  
  export default {
    name: "MainCategoryComponent",
    components: {
      SubCategoryComponent
    },
    data() {
      return {
        isHovered: {},
        categories: [],
        width1: 249,
        width2: 0,
        hover: 268
      };
    },
    computed: {
      divWidth() {
        return Object.values(this.isHovered).includes(true) ? { width: this.width1 + this.hover + 'px' } : { width: this.width1 + 'px' };
      },
      liWidth() {
        return Object.values(this.isHovered).includes(true) ? { width: this.width2 + this.hover + 'px' } : { width: this.width2 + 'px' };
      }
    },
    methods: {
      applyStyle(index) {
        this.isHovered = { ...this.isHovered, [index]: true };
      },
      removeStyle(index) {
        this.isHovered = { ...this.isHovered, [index]: false };
      },
      async fetchCategories() {
        try {
          console.log('Fetching categories from /category/list');
          const response = await axios.get('http://localhost:8080/category/list');
          console.log('Response:', response.data);
          this.categories = response.data.result;
        } catch (error) {
          console.error("Failed to fetch categories:", error);
        }
      }
    },
    mounted() {
      this.fetchCategories();
    }
  };
  </script>
<style scoped>
.category {
    max-height: calc(-55px + 95vh);
    min-height: 200px;
    position: absolute;
    display: flex;
    top: 46px;
    padding-top: 10px;
    display: none;
}

.category-div {
    position: relative;
    z-index: 321;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    animation: 0.2s linear 0s 1 normal none running animation-w43n76;
}

.category-ul {
    overflow-y: auto;
    width: 247px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
}

.category-list {
    padding: 7px 0px 9px 14px;
}

.category-list:hover {
    font-weight: 500;
    color: rgb(95, 0, 128);
    background-color: rgb(247, 247, 247);
}

.category-list-main {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.category-list-main-img {
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
}

.category-list-main-title {
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
}

.category-list-sub-ul {
    border-left: 0px;
    width: 266px;
    max-height: 300px;
    position: absolute;
    overflow-y: auto;
    top: -1px;
    left: 249px;
    z-index: 320;
    animation: 0.5s linear 0s 1 normal none running animation-plwpox;
}

.category-sub-back {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 247px;
    background-color: rgb(247, 247, 247);
    z-index: -1;
    animation: 0.2s linear 0s 1 normal none running animation-1rae3xd;
}
</style>