<template>
    <li class="category-list-sub-li">
      <div class="category-list-sub-div">
        <span class="category-list-sub-title">
          {{ name }}
        </span>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    name: "SubCategoryComponent",
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .category-list-sub-li {
    cursor: pointer;
  }
  
  .category-list-sub-div {
    padding: 11px 20px 11px 18px;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: rgb(51, 51, 51);
    line-height: 22px;
  }
  
  .category-list-sub-div:hover > .category-list-sub-title {
    box-shadow: rgb(95, 0, 128) 0px -1px 0px 0px inset;
    font-weight: 500;
    color: rgb(95, 0, 128);
  }
  
  .category-list-sub-title {
    line-height: 18px;
  }
  </style>