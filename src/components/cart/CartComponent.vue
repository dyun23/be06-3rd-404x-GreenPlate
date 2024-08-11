<template>
  <div data-reactroot>
    <div class="page-title">
      <h2 class="title-text">장바구니</h2>
      <div class="cart-div">
        <div class="cart-left">
          <div class="cart-total">
            <div class="cart-total-div">
              <div class="total-div">
                <label class="total-label">
                  <input
                    type="checkbox"
                    class="total-input"
                    :checked="isChecked"
                    @change="toggleTotalCheck"
                  />
                  <div class="total-check">
                    <svg
                      v-if="isChecked"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                        fill="#5f0080"
                      ></path>
                      <path
                        d="M7 12.6667L10.3846 16L18 8.5"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      v-else
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                        stroke="#ddd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M7 12.6667L10.3846 16L18 8.5"
                        stroke="#ddd"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span
                    >전체선택
                    <span class="total-value"
                      >({{ checkedCount }}/{{ items.length }})</span
                    ></span
                  >
                </label>
                <span class="total-middle"></span>
                <button @click="confirmDeleteSelected">선택삭제</button>
              </div>
            </div>
          </div>
          <div class="cart-items">
            <div>
              <ul>
                <CartItemComponent
                  v-for="item in items"
                  :key="item.id"
                  :item="item"
                  :cartId="item.id"
                  @update-checked="updateItemChecked"
                  @update-count="updateItemCount"
                  @delete-item="deleteItem"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="cart-right">
          <div class="cart-right-div">
            <div class="addr-div">
              <div class="css-8jmoub ea1mry77">
                <span class="css-vmo0an ea1mry76">전체 상품금액</span>
                <span class="cost-text">{{ allTotalCost }} 원</span>
              </div>
              <button
                class="addr-change-btn"
                type="button"
                height="36"
                radius="3"
                @click="orderAllItems"
              >
                <span class="addr-change-text">전체 상품 주문하기</span>
              </button>
            </div>
            <div class="cart-cost-div">
              <div class="css-8jmoub ea1mry77">
                <span class="css-vmo0an ea1mry76">선택 상품금액</span>
                <span class="cost-text"
                  ><span style="font-weight: 700">{{ selectedTotalCost }}</span>
                  원</span
                >
              </div>
            </div>
            <div class="order-div">
              <button
                class="order-btn"
                type="button"
                height="56"
                @click="orderSelectedItems"
              >
                <span class="order-text">선택 상품 주문하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useCartStore } from "../../stores/useCartStore";
import CartItemComponent from "./CartItemComponent.vue";
import { useRouter } from "vue-router";

export default {
  name: "CartComponent",
  components: {
    CartItemComponent,
  },
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();
    return {
      cartStore,
      router,
    };
  },
  computed: {
    items() {
      return this.cartStore.items;
    },
    isChecked() {
      return this.items.length > 0 && this.items.every((item) => item.checked);
    },
    checkedCount() {
      return this.items.filter((item) => item.checked).length;
    },
    selectedTotalCost() {
      return this.cartStore.selectedTotalCost;
    },
    allTotalCost() {
      return this.cartStore.totalCost;
    },
  },
  methods: {
    toggleTotalCheck() {
      const isChecked = this.isChecked;
      this.items.forEach((item) => {
        item.checked = !isChecked;
      });
      this.updateSelectedItems();
    },
    updateItemChecked(id, checked) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.checked = checked;
      }
      this.updateSelectedItems();
    },
    updateItemCount(id, count) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.quantity = count;
      }
      this.updateSelectedItems();
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
      this.updateSelectedItems();
    },
    updateSelectedItems() {
      const selectedItems = this.items.filter((item) => item.checked);
      this.cartStore.setSelectedItems(selectedItems);
    },
    confirmDeleteSelected() {
      if (confirm("선택된 상품을 삭제하시겠습니까?")) {
        this.deleteSelectedItems();
      }
    },
    deleteSelectedItems() {
      const selectedIds = this.items
        .filter((item) => item.checked)
        .map((item) => item.id);

      axios
        .delete("http://localhost:8080/cart/delete/list", {
          data: { cartIdList: selectedIds },
          withCredentials: true,
        })
        .then((response) => {
          console.log("Delete successful:", response.data);
          this.items = this.items.filter((item) => !item.checked);
          this.updateSelectedItems();
        })
        .catch((error) => {
          console.error("Error deleting selected items:", error);
        });

      console.log();
    },
    fetchCartItems() {
      axios
        .get("http://localhost:8080/cart/list", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            const items = response.data.result || [];
            this.cartStore.setItems(
              items.map((item) => ({
                id: item.cartId,
                itemId: item.itemId,
                title: item.itemName,
                quantity: item.quantity,
                checked: false,
                discountPrice: item.discountPrice,
                imageUrl: item.imageUrl,
                originalPrice: item.price,
              }))
            );
          } else {
            this.errorMessage =
              response.data.message ||
              "장바구니 데이터를 불러오는 데 실패했습니다.";
          }
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
          this.errorMessage = "장바구니 데이터를 불러오는 데 실패했습니다.";
        });
    },
    orderAllItems() {
      this.cartStore.setSelectedItems(this.cartStore.items);
      this.router.push("/order");
    },
    orderSelectedItems() {
      this.router.push("/order");
    },
  },
  created() {
    this.fetchCartItems();
  },
};
</script>

<style scoped>
.page-title {
  width: 1050px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.title-text {
  padding: 50px 0 48px;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
}

.cart-div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  letter-spacing: -0.5px;
}

.cart-left {
  width: 742px;
}

.cart-total {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 18px 10px 16px 2px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
}

.cart-total-div label {
  display: inline-flex;
  font-size: 14px;
  line-height: 26px;
  padding: 0px;
  color: rgb(51, 51, 51);
}

.cart-items {
  border-bottom: 1px solid #f4f4f4;
  border-top: 1px solid rgb(51, 51, 51);
}

.cart-right {
  position: relative;
  width: 284px;
  min-height: 942px;
}

.cart-right-div {
  position: absolute;
  width: 284px;
  padding-top: 60px;
}

.cart-cost-div {
  padding: 19px 18px 18px 20px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
}

.css-8jmoub {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 10px;
  padding-top: 0;
}

.css-vmo0an {
  width: 100px;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}

.cost-text {
  font-size: 18px;
  line-height: 24px;
  text-align: right;
}

.css-hfgifi {
  padding-left: 2px;
  font-size: 16px;
  font-weight: normal;
  vertical-align: bottom;
}

.order-div {
  padding-top: 20px;
}

.order-btn {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  font-weight: 500;
}

.order-btn:disabled {
  background-color: #ddd;
}

.order-btn > div {
  display: inline-block;
  position: relative;
}

.order-btn > div > div:first-of-type {
  max-width: 100px;
  max-height: 100px;
  width: 70%;
  height: 70%;
}

.total-label {
  padding: 14px 0px 9px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 16px;
  vertical-align: top;
  line-height: normal;
  color: rgb(51, 51, 51);
}

.total-input {
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
}

.total-check {
  margin-right: 12px;
}

.total-check > svg {
  vertical-align: middle;
}

.total-middle {
  display: inline-block;
  width: 1px;
  height: 14px;
  background: rgb(221, 221, 221);
  margin: 6px 21px 0px 22px;
  vertical-align: top;
}

/* .css-td54hr {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 60px;
    padding: 15px 5px 15px 0px;
    border-top: 1px solid rgb(51, 51, 51);
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
}
.css-1nzj0g2 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 500;
}
.css-12dwhid {
    margin-right: 8px;
    vertical-align: top;
}
.css-12dwhid > span {
    vertical-align: top;
}
.css-lvqq7y {
    border: 0px;
    background: none;
    outline: none;
}
svg:not(:root) {
    overflow: hidden;
}
:not(svg) {
    transform-origin: 0px 0px;
}
g {
    fill: none;
    fill-rule: evenodd;
} */

.addr-div {
  padding: 23px 20px 20px;
  border-width: 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-top-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-image: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
}

.addr-title {
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: url("https://res.kurly.com/pc/service/cart/2007/ico_location.svg")
    0px 50% / 20px 20px no-repeat;
}

.addr {
  padding-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 51, 51);
}

.addr-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  word-break: break-word;
}

.addr-change-btn {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 36px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
  margin-top: 16px;
}

.addr-change-btn > span {
  font-size: 12px;
  font-weight: 500;
}
</style>
