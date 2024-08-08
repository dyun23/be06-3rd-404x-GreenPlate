<template>
  <div class="css-heioij eug5r8l1">
    <div v-if="ordersList[0]" class="css-oc8mjz ed9qr673">
      <div class="css-eq7f8j ed9qr672">
        <h2 class="css-1lmd4kz ed9qr671">주문 내역 상세</h2>
      </div>
    </div>
    <div v-if="ordersList[0]"  class="css-1xdhyk6 eug5r8l0">
      <div class="css-1z1jvv e17ra5i93">
        <div class="css-1u8skbo e17ra5i92">
          <span class="css-h6hci1 e17ra5i91"> 배송 상태 : {{formatOrderState(ordersList[0].order_state)}}</span>
        </div>
      </div>
      <div class="css-jp2y92 e1s7667r0"></div><button type="button" class="css-1h4blvi e1udu6es2"><span>
          <h3 class="css-1a1250p e1udu6es1">주문번호 <span class="css-dqnyvi e1lb2pwe0">2289622010159</span></h3><span
            class="css-3qkund e1udu6es0"><span class="css-gxk3p9 e16g8rol0"><svg width="20" height="20"
                viewBox="2 2 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L9 11L5 7" stroke="#999" stroke-width="0.6"></path>
              </svg></span></span>
        </span></button>
      <div class="css-d3v9zr e14m4ys50" style="opacity: 1; height: auto;">
        <div class="css-cku72n e1lb2pwe2">
          <div  v-for="(orderDetail, index) in ordersList" :key="index" class="css-100mgqw e20ugtq12">
            <img src="https://img-cf.kurly.com/hdims/resize/%5E%3E120x%3E156/cropcenter/120x156/quality/85/src/shop/data/goods/1540185573395l0.jpg"
              alt="청양고추 80g" class="css-1mhidi6 e20ugtq11">
            <div class="css-1yt1bj8 e20ugtq10">
              <div class="css-95tt0l e20ugtq9"><a data-testid="deal-name" href="/goods/5027766"
                  class="css-1awriqz e20ugtq8">{{ orderDetail.itemName }}</a></div>
              <div class="css-95tt0l e20ugtq9"><span data-testid="goods-price"
                  class="css-1j389vi e20ugtq6">{{ orderDetail.price }}원</span><span class="css-un1ini e20ugtq3"></span><span
                  class="css-16c8x0o e20ugtq4">{{ orderDetail.cnt }}개</span></div>
              <div class="css-1eza2jc e20ugtq1">
                <div class="css-95tt0l e20ugtq9"><span class="css-1d54mr1 e20ugtq2">{{formatOrderState(orderDetail.order_state)}}</span></div>
                <div class="css-11rfkkj e20ugtq0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="css-jp2y92 e1s7667r0"></div>
      <div class="css-jp2y92 e1s7667r0"></div><button type="button" class="css-1h4blvi e1udu6es2"><span>
          <h3 class="css-1a1250p e1udu6es1">결제정보</h3><span class="css-3qkund e1udu6es0"><span
              class="css-gxk3p9 e16g8rol0"><svg width="20" height="20" viewBox="2 2 13 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L9 11L5 7" stroke="#999" stroke-width="0.6"></path>
              </svg></span></span>
        </span></button>
      <div class="css-d3v9zr e14m4ys50" style="opacity: 1; height: auto;">
        <ul class="css-c4ewfg e1mzx65b4">
          <li class="css-s4wkbf e1ysbs754"><span class="css-11h8hn9 e1ysbs753">상품금액</span><span
              class="css-l5tyq9 e1ysbs751">{{ordersList[0].order_totalPrice}}<span class="css-cvbrkf e1ysbs750">원</span></span></li>
          <li class="css-s4wkbf e1ysbs754"><span class="css-11h8hn9 e1ysbs753">결제금액</span><span
              class="css-l5tyq9 e1ysbs751">{{ordersList[0].order_totalPrice}}<span class="css-cvbrkf e1ysbs750">원</span></span></li>
          <li class="css-s4wkbf e1ysbs754"><span class="css-11h8hn9 e1ysbs753">결제방법</span>
            <div class="css-6r4ker e1mzx65b3">카카오페이</div>
          </li>
        </ul>
      </div>
      <div class="css-jp2y92 e1s7667r0"></div><button type="button" class="css-1h4blvi e1udu6es2"><span>
          <h3 class="css-1a1250p e1udu6es1">주문정보</h3><span class="css-3qkund e1udu6es0"><span
              class="css-gxk3p9 e16g8rol0"><svg width="20" height="20" viewBox="2 2 13 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L9 11L5 7" stroke="#999" stroke-width="0.6"></path>
              </svg></span></span>
        </span></button>
      <div class="css-d3v9zr e14m4ys50" style="opacity: 1; height: auto;">
        <ul class="css-12lpk41 e1nt8uak3">
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">주문번호</span><span
              class="css-1ept5d5 e1nt8uak0">{{ordersList[0].order_id}}</span></li>
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">보내는 분</span><span
              class="css-1ept5d5 e1nt8uak0">{{companyname}}</span></li>
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">결제일시</span><span
              class="css-1ept5d5 e1nt8uak0">{{ new Date(ordersList[0].order_date).toLocaleString() }}</span></li>
        </ul>
      </div>
      <div class="css-jp2y92 e1s7667r0"></div><button type="button" class="css-1h4blvi e1udu6es2"><span>
          <h3 class="css-1a1250p e1udu6es1">배송정보</h3><span class="css-3qkund e1udu6es0"><span
              class="css-gxk3p9 e16g8rol0"><svg width="20" height="20" viewBox="2 2 13 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L9 11L5 7" stroke="#999" stroke-width="0.6"></path>
              </svg></span></span>
        </span></button>
      <div class="css-d3v9zr e14m4ys50" style="opacity: 1; height: auto;">
        <ul class="css-12lpk41 e1nt8uak3">
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">받는분</span><span
              class="css-1ept5d5 e1nt8uak0">받는사람이름</span></li>
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">핸드폰</span><span
              class="css-1ept5d5 e1nt8uak0">{{ordersList[0].phoneNum}}</span></li>
          <li class="css-1i0l638 e1nt8uak2"><span class="css-1l1nmpa e1nt8uak1">주소</span><span
              class="css-1ept5d5 e1nt8uak0">({{ordersList[0].zipCode}}) {{ordersList[0].address}}</span></li>
        </ul>
      </div>
      <div class="css-jp2y92 e1s7667r0"></div>
      <div class="css-mp70gy emggxjq5"><span class="css-1uwfxtx emggxjq4">주문취소는 [주문완료] 상태일 경우에만 가능합니다.</span><button>
          <div href="/mypage/inquiry/list" class="css-zjik7 emggxjq3"><span class="css-1x29nf7 emggxjq2"> 1:1 문의
            </span><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDkgMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtMiA0IDUgNS01IDUiIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLXdpZHRoPSIxLjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="purpleArrowRight" class="emggxjq1 css-cb2xrd eflljbi0"></div>
        </button></div>
      <div class="css-13pz1p0 emggxjq0"><button class="css-1wvls6k e4nu7ef3" type="button" disabled="" height="48"
          radius="6"><span class="css-nytqmg e4nu7ef1">전체 상품 주문 취소</span></button></div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { useCompanyInfoStore } from '@/stores/useCompanyInfoStore';

export default {
  name: "CompanyOrderDetailComponent",
  data() {
    return {
      ordersList: [],
      companyName: ""
    };
  },
  async created() {
    this.companyInfoStore = useCompanyInfoStore(); // Pinia 스토어를 초기화합니다.
    await this.getCompanyInfo(); // 사용자 정보를 가져옵니다.
    const ordersId = this.extractNumberFromCurrentPath();
    if (ordersId) {
      await this.getData(ordersId); // 데이터를 가져옵니다.
    }
  },
  methods: {
    async getData(ordersId) {
      try {
        const response = await axios.get(`http://localhost:8080/orders/list/company/${ordersId}`, {
          withCredentials: true
        });
        console.log(response.data.result);
        this.ordersList = response.data.result;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    async getCompanyInfo() {
      try {
        await this.companyInfoStore.getCompanyInfo(); // 스토어에서 사용자 정보를 가져옵니다.
        this.companyName = this.companyInfoStore.name; // 사용자 이름을 설정합니다.
        console.log(this.companyName);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    },
    formatOrderState(state) {
      switch (state) {
        case 'ready':
          return '상품준비';
        case 'shipped':
          return '배송중';
        case 'completed':
          return '배송완료';
        default:
          return '상태 미정';
      }
    },
    extractNumberFromCurrentPath() {
      const path = window.location.pathname;
      const match = path.match(/\/(\d+)$/);
      return match ? match[1] : null;
    }
  }
};
</script>



<style scoped>
.css-heioij {
  overflow: hidden;
  width: 650px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
}

.css-eq7f8j {
  display: flex;
  align-items: flex-end;
}

.css-1lmd4kz {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 28px;
}

.css-1z1jvv {
  display: flex;
  padding: 12px 20px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-1u8skbo {
  margin: 4px 0px;
}

.css-jp2y92 {
  height: 8px;
  background: rgb(244, 244, 244);
}

.css-1h4blvi {
  width: 100%;
  padding: 18px 20px;
}

.css-1h4blvi>span {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-1a1250p {
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  flex-shrink: 0;
}

.css-3qkund {
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 600;
}

.css-d3v9zr {
  overflow: hidden;
}

.css-cku72n>div:first-of-type {
  padding-top: 0px;
  margin-top: 16px;
}

.css-100mgqw {
  display: flex;
  flex-direction: row;
  padding: 17px 20px 0px;
}

.css-1mhidi6 {
  width: 50px;
  height: 65px;
  margin-right: 16px;
  background-color: rgb(245, 245, 245);
}

.css-1yt1bj8 {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgb(244, 244, 244);
  padding-bottom: 14px;
}

.css-95tt0l:first-of-type {
  margin-top: 0px;
}

.css-95tt0l {
  margin-top: 5px;
  line-height: 20px;
}

.css-1awriqz {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.css-95tt0l:nth-of-type(2) {
  margin-top: 2px;
}

.css-95tt0l {
  margin-top: 5px;
  line-height: 20px;
}

.css-1j389vi {
  font-weight: 700;
}

.css-un1ini {
  padding: 0px 7px 0px 5px;
}

.css-un1ini::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: rgb(221, 221, 221);
  vertical-align: 0px;
}

.css-16c8x0o {
  color: rgb(102, 102, 102);
  font-weight: 600;
}

.css-1eza2jc {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 8px;
}

.css-95tt0l:first-of-type {
  margin-top: 0px;
}

.css-95tt0l {
  margin-top: 5px;
  line-height: 20px;
}

.css-1d54mr1 {
  font-weight: 600;
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.css-11rfkkj {
  display: flex;
  gap: 6px;
}

.css-jp2y92 {
  height: 8px;
  background: rgb(244, 244, 244);
}

.css-1h4blvi {
  width: 100%;
  padding: 18px 20px;
}

element.style {
  opacity: 1;
  height: auto;
}

.css-d3v9zr {
  overflow: hidden;
}

.css-12lpk41 li:first-of-type {
  padding-top: 8px;
}

.css-1i0l638 {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 20px 9px;
  line-height: 19px;
}

.css-1l1nmpa {
  min-width: 120px;
  flex-shrink: 1;
  color: rgb(102, 102, 102);
}

.css-1ept5d5 {
  -webkit-box-flex: 1;
  flex-grow: 1;
  color: rgb(51, 51, 51);
  word-break: break-all;
}

.css-mp70gy {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 16px 20px 20px;
}

.css-1uwfxtx {
  flex: 1 1 0%;
  margin-right: 16px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(153, 153, 153);
}

.css-zjik7 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.css-1x29nf7 {
  font-weight: 600;
  color: rgb(95, 0, 128);
}

.css-cb2xrd {
  width: 16px;
  height: 16px;
}

.css-13pz1p0 {
  padding: 0px 20px 34px;
}

.css-1wvls6k:disabled {
  border-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

.css-13pz1p0>button>span {
  font-weight: 600;
}

.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}

.css-1wvls6k {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
}
.css-c4ewfg {
    padding-bottom: 20px;
}
.css-c4ewfg li:first-of-type {
    padding-top: 8px;
}
.css-s4wkbf {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 20px 9px;
    font-size: 14px;
    line-height: 19px;
}
.css-xfz5ew {
    padding: 8px 20px 20px;
}
.css-1iy0o8r {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
}
.css-12lpk41 li:last-of-type {
    padding-bottom: 20px;
}
.css-1i0l638 {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 20px 9px;
    line-height: 19px;
}
</style>