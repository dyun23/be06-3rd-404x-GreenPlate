<template>
    <div class="order-page">
      <h2>주문 확인</h2>
      <div v-if="selectedItems.length">
        <ul class="order-list">
          <li v-for="item in selectedItems" :key="item.id" class="order-item">
            <div class="item-info">
              <p>상품명: {{ item.title }}</p>
              <p>수량: {{ item.quantity }}</p>
              <p>할인 가격: {{ item.discountPrice }}원</p>
              <p>총 가격: {{ item.discountPrice * item.quantity }}원</p>
            </div>
          </li>
        </ul>
        <div class="order-summary">
          <p>선택된 총 상품 금액: {{ selectedTotalCost }}원</p>
        </div>
      </div>
      <div v-else>
        <p>선택된 상품이 없습니다.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/useCartStore';
  
  export default {
    name: "OrderComponent",
    setup() {
      const cartStore = useCartStore();
      return {
        selectedItems: cartStore.selectedItems,
        selectedTotalCost: cartStore.selectedTotalCost
      };
    }
  };
  </script>
  
  <style scoped>
  .order-page {
    padding: 20px;
  }
  .order-list {
    list-style-type: none;
    padding: 0;
  }
  .order-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  .item-info p {
    margin: 5px 0;
  }
  .order-summary {
    margin-top: 20px;
    font-weight: bold;
  }
  </style>