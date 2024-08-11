<template>
  <div v-if="item">
    <main id="product-atf" class="css-1eoy87d e17iylht5">
      <div class="css-ikeoj9 e17iylht4">
        <div class="css-p55uhh" style="border-radius: 6px">
          <div class="css-0">
            <div class="css-pw7jst e9elpup1" style="padding-bottom: 128.372%">
              <div class="css-j2pfbl e9elpup0">
              <span style="
                  box-sizing: border-box;
                  display: block;
                  overflow: hidden;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 0px;
                  position: absolute;
                  inset: 0px;
                ">
                <img :src="getValidImageUrl(item?.imageUrl)" sizes="100vw" decoding="async" data-nimg="fill" class="css-1zjvv7" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section v-if="item" class="css-1ua1wyk e17iylht3">
        <div class="css-12lw2qc ezpe9l13">{{ item.companyName }}</div>
        <div class="css-1qy9c46 ezpe9l12">
          <h1 class="css-79gmk3 ezpe9l11">
            {{ item.name }}
          </h1>
          <!-- <h2 class="css-ki8mlo ezpe9l10">{{ item.contents }}</h2> -->
        </div>
        <h2 class="css-abwjr2 e1q8tigr4">
          <span class="css-9pf1ze e1q8tigr2">{{ formattedPricePerItem }}</span>
          <span class="css-1x9cx9j e1q8tigr1">원</span>
        </h2>
        <ul class="css-iqoq9n e6qx2kx2">
          <!-- <li class="css-e6zlnr epzddad2">
            <dt class="css-lytdfk epzddad1">배송</dt>
            <dd class="css-1k8t52o epzddad0">
              <p class="css-c02hqi e6qx2kx1">샛별배송</p>
              <p class="css-uy94b2 e6qx2kx0">
                23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송
                운영시간 별도 확인)
              </p>
            </dd>
          </li> -->
          <li class="css-e6zlnr epzddad2">
            <dt class="css-lytdfk epzddad1">판매자</dt>
            <dd class="css-1k8t52o epzddad0">
              <p class="css-c02hqi e6qx2kx1">{{ item.companyName }}</p>
            </dd>
          </li>
        </ul>
        <div class="css-1bp09d0 e17iylht1">
          <div class="css-2lvxh7 e1qy0s5w0">
            <li class="css-e6zlnr epzddad2">
              <dt class="css-159o541 epzddad1">상품 선택</dt>
              <dd class="css-1k8t52o epzddad0">
                <div class="cart-option-item css-1cb5lnc e1bjklo18">
                  <div class="css-1qdyvok e1bjklo16">
                    <span class="css-1yojl0t e1bjklo14">{{ item.name }}</span>
                  </div>
                  <div class="css-tk6lxo e1bjklo15">
                    <div class="css-nx0orh e1cqr3m40">
                      <button type="button" aria-label="수량내리기" class="css-1e90glc e1hx75jb0" @click="decreaseQuantity"
                              :disabled="quantity <= 1"></button>
                      <div class="count css-6m57y0 e1cqr3m41">{{ quantity }}</div>
                      <button type="button" aria-label="수량올리기" class="css-18y6jr4 e1hx75jb0"
                              @click="increaseQuantity"></button>
                    </div>
                  </div>
                </div>
              </dd>
            </li>
          </div>
          <div class="css-9y0nwt e17iylht0">
            <div class="css-ixlb9s eebc7rx4">
              <div class="css-yhijln eebc7rx3">
                <span class="css-w1is7v eebc7rx2">총 상품금액 :</span><span
                  class="css-x4cdgl eebc7rx1">{{ formattedTotalPrice }}</span><span class="css-1jb8hmu eebc7rx0">원</span>
              </div>
            </div>
          </div>
          <div class="css-gnxbjx e10vtr1i2">
            <div class="css-14jnwd7 e10vtr1i0">
              <button class="cart-button css-1qirdbn e4nu7ef3" type="button" radius="3">
                <span class="css-nytqmg e4nu7ef1">장바구니 담기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <p v-else>Loading...</p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        imageUrl: 'https://via.placeholder.com/430x550'
      }),
    },
  },
  computed: {
    totalPrice() {
      return this.quantity * this.item.price;
    },
    formattedTotalPrice() {
      return this.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formattedPricePerItem() {
      return this.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    getValidImageUrl(imageUrl) {
      const placeholder = "https://via.placeholder.com/430x550";
      if (!imageUrl || !this.isValidUrl(imageUrl)) {
        return placeholder;
      }
      return imageUrl;
    },
    isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.css-1eoy87d {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-ikeoj9 {
  width: 430px;
}

.css-p55uhh {
  overflow: hidden;
  border-radius: 4px;
}

.css-pw7jst {
  position: relative;
  width: 100%;
}

.css-j2pfbl {
  position: absolute;
  inset: 0;
}

.css-1zjvv7 {
  user-select: none;
  -webkit-user-drag: none;
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
}

.css-1ua1wyk {
  width: 560px;
}

.css-12lw2qc {
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #999;
  margin-bottom: 6px;
  width: 500px;
}

.css-1qy9c46 {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
}

.css-79gmk3 {
  width: 500px;
  font-weight: 500;
  font-size: 24px;
  color: #333;
  line-height: 34px;
  letter-spacing: -0.5px;
  margin-right: 20px;
}

.css-ki8mlo {
  width: 500px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 19px;
  letter-spacing: -0.5px;
}

.css-abwjr2 {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
}

.css-9pf1ze {
  padding-right: 4px;
  font-size: 28px;
  color: #333;
}

.css-1x9cx9j {
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: #333;
  vertical-align: top;
}

.css-iqoq9n {
  margin-top: 20px;
}

.css-e6zlnr {
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  padding: 17px 0 18px;
  border-top: 1px solid #f4f4f4;
  font-size: 14px;
  letter-spacing: -0.5px;
}

.css-lytdfk {
  width: 128px;
  height: 100%;
  color: #666;
  font-weight: 400;
  line-height: 19px;
}

.css-1k8t52o {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
}

.css-c02hqi {
  color: #333;
  font-weight: 400;
  line-height: 19px;
  white-space: pre-line;
  word-break: break-all;
  overflow: hidden;
}

.css-uy94b2 {
  display: block;
  font-size: 12px;
  color: #666;
  padding-top: 4px;
  line-height: 16px;
  white-space: pre-line;
}

.css-1bp09d0 {
  padding-bottom: 40px;
}

.css-2lvxh7 {
  border-bottom: 1px solid #f4f4f4;
}

.css-159o541 {
  width: 128px;
  height: 100%;
  color: #666;
  font-weight: 400;
  line-height: 40px;
}

.css-1k8t52o {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
}

.css-1k3x8v3 {
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
}

.css-9y0nwt {
  padding-top: 30px;
}

.css-ixlb9s {
  letter-spacing: -0.5px;
}

.css-yhijln {
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-end;
}

.css-w1is7v {
  padding-right: 12px;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  line-height: 20px;
}

.css-x4cdgl {
  font-weight: 700;
  font-size: 32px;
  color: #333;
  line-height: 36px;
}

.css-1jb8hmu {
  padding-left: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  line-height: 30px;
}

.css-gnxbjx {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.css-14jnwd7 .cart-button {
  font-weight: 500;
}

@media (min-width: 1050px) {
  .css-1qirdbn {
    height: 56px;
  }
}

.css-14jnwd7 {
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.css-1qirdbn {
  display: block;
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 52px;
  border-radius: 3px;
  color: #fff;
  background-color: rgb(102, 153, 51);
  border: 0 none;
}

.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}

button {
  cursor: pointer;
}

.css-1k8t52o {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
}

.css-1cb5lnc:last-of-type {
  border-bottom: 1px solid #f4f4f4;
}

.css-1cb5lnc {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border-left: 1px solid #f4f4f4;
  border-top: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}

.css-1qdyvok {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}

.css-1yojl0t {
  line-height: 16px;
  width: 320px;
  min-height: 24px;
  color: #333;
  overflow-wrap: break-word;
}

.css-tk6lxo {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 4px;
}

.css-nx0orh {
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid #dddfe1;
  width: 88px;
  border-radius: 3px;
}

.css-1e90glc {
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  vertical-align: top;
}

.css-nx0orh .count {
  font-weight: 600;
}

.css-6m57y0 {
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
}

.css-18y6jr4 {
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
  vertical-align: top;
}
</style>