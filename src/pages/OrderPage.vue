<template>
  <div class="css-1ykiyus e146m4rf2">
    <div class="css-1uom1od e146m4rf0">
      <h2 class="css-10owlr e146m4rf1">주문서</h2>
      <div v-if="selectedItems.length" class="css-ixlb9s epvroj94">
        <div class="css-zo1i6f edbbr7c2">
          <h3 class="css-1ddzp0m edbbr7c1">주문 상품</h3>
        </div>
        <div
          v-for="item in selectedItems"
          :key="item.id"
          class="css-bd9p1l e17a7yib10"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="css-17jyui4 e17a7yib9"
          />
          <span class="css-10nl60h e17a7yib8"
            ><span class="css-9j7jhp e17a7yib7">{{ item.title }}</span></span
          >
          <span class="css-1efb5i1 e17a7yib5">{{ item.quantity }}개</span>
          <span class="css-1j31gob e17a7yib4"
            ><span class="css-jnogx7 e17a7yib1"
              >{{ item.discountPrice }}원</span
            ></span
          >
        </div>
        <div class="css-12aowi2 edbbr7c2">
          <h3 class="css-1ddzp0m edbbr7c1">주문자 정보</h3>
        </div>
        <div id="kurly-orderer-info" class="css-shoa2s e1vfdada3">
          <div class="css-yazyg9 e150alo82">
            <span class="css-ln1csn e150alo81">보내는 분</span>
            <div class="css-82a6rk e150alo80">
              <div class="css-t6o2y8 e1vfdada2">{{ this.name }}</div>
            </div>
          </div>
          <div class="css-yazyg9 e150alo82">
            <span class="css-ln1csn e150alo81">휴대폰</span>
            <div class="css-82a6rk e150alo80">
              <div v-if="defaultAddress" class="css-t6o2y8 e1vfdada2">
                {{ defaultAddress.phoneNum }}
              </div>
            </div>
          </div>
          <div class="css-yazyg9 e150alo82">
            <span class="css-ln1csn e150alo81">이메일</span>
            <div class="css-82a6rk e150alo80">
              {{ this.email }}
              <div class="css-1r0yqr6 e1vfdada1">
                <p class="css-i7dt79 e1vfdada0">
                  정보 변경은 마이컬리 &gt; 개인정보 수정 메뉴에서 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="shipping-container">
          <div class="css-12aowi2 edbbr7c2">
            <h3 class="css-1ddzp0m edbbr7c1">배송 정보</h3>
            <div class="css-1te1vur e1wlxftg2">
              <div class="css-1he5996 e1wlxftg1">
                <span>배송지 변경 안내</span
                ><img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y29tbW9uX2J0bl9xdWVzdGlvbjwvdGl0bGU+CiAgICA8ZyBpZD0iY29tbW9uX2J0bl9xdWVzdGlvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTkuOTkzLDMuNyBDMTEuNzM0ODYwNCwzLjcgMTMuMzExNDEzLDQuNDA1Mzc4MTIgMTQuNDUyNjI3LDUuNTQ1NDUxOTcgQzE1LjU5NDA1OTQsNi42ODU3NDQwOSAxNi4zLDguMjYwOTE3NTQgMTYuMywxMCBDMTYuMywxMS43MzkwODI1IDE1LjU5NDA1OTQsMTMuMzE0MjU1OSAxNC40NTI2MjcsMTQuNDU0NTQ4IEMxMy4zMTE0MTMsMTUuNTk0NjIxOSAxMS43MzQ4NjA0LDE2LjMgOS45OTMsMTYuMyBDOC4yNTQ5MjA3OCwxNi4zIDYuNjgyMTMzMDUsMTUuNTk0ODI0NCA1LjU0MzY3MTgsMTQuNDU1MjIzNiBDNC40MDQzNzU5NSwxMy4zMTQ3ODczIDMuNywxMS43MzkzMjc1IDMuNywxMCBDMy43LDguMjYwNjcyNSA0LjQwNDM3NTk1LDYuNjg1MjEyNzMgNS41NDM2NzE4LDUuNTQ0Nzc2NDQgQzYuNjgyMTMzMDUsNC40MDUxNzU1OSA4LjI1NDkyMDc4LDMuNyA5Ljk5MywzLjcgTDkuOTkzLDMuNyBaIiBpZD0iY29tbW9uX2ljb25fdG9vbHRpcCIgc3Ryb2tlPSIjOTk5OTk5IiBzdHJva2Utd2lkdGg9IjEuNCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik03LjUsOC4yMTA4MTA4MSBMOC43NzAyNzAyNyw4LjIxMDgxMDgxIEM4LjgxMzUxMzUxLDcuNTUxMzUxMzUgOS4yNjIxNjIxNiw3LjEyOTcyOTczIDkuOTU5NDU5NDYsNy4xMjk3Mjk3MyBDMTAuNjQwNTQwNSw3LjEyOTcyOTczIDExLjA5NDU5NDYsNy41MzUxMzUxNCAxMS4wOTQ1OTQ2LDguMDk3Mjk3MyBDMTEuMDk0NTk0Niw4LjU4NzgzNzg0IDEwLjkwMzgyODgsOC44Njk0NDQ0NCAxMC4zNTU3NTU4LDkuMjI1MjM3NzQgTDEwLjE5NzI5NzMsOS4zMjQzMjQzMiBDOS40NTEzNTEzNSw5Ljc2MjE2MjE2IDkuMTM3ODM3ODQsMTAuMjQ4NjQ4NiA5LjE4NjQ4NjQ5LDExLjA1OTQ1OTUgTDkuMTkxODkxODksMTEuNDI3MDI3IEwxMC40NDU5NDU5LDExLjQyNzAyNyBMMTAuNDQ1OTQ1OSwxMS4xMTg5MTg5IEMxMC40NDU5NDU5LDEwLjU4Mzc4MzggMTAuNjQ1OTQ1OSwxMC4zMDgxMDgxIDExLjM1NDA1NDEsOS44OTE4OTE4OSBDMTIuMDg5MTg5Miw5LjQ1NDA1NDA1IDEyLjUsOC44NzU2NzU2OCAxMi41LDguMDQ4NjQ4NjUgQzEyLjUsNi44NTQwNTQwNSAxMS41MTA4MTA4LDYgMTAuMDI5NzI5Nyw2IEM4LjQyNDMyNDMyLDYgNy41NDMyNDMyNCw2LjkyOTcyOTczIDcuNSw4LjIxMDgxMDgxIFogTTkuODc4Mzc4MzgsMTQuMDA1NDA1NCBDOS4zMzc4Mzc4NCwxNC4wMDU0MDU0IDguOTgxMDgxMDgsMTMuNjY0ODY0OSA4Ljk4MTA4MTA4LDEzLjE0NTk0NTkgQzguOTgxMDgxMDgsMTIuNjIxNjIxNiA5LjMzNzgzNzg0LDEyLjI4MTA4MTEgOS44NzgzNzgzOCwxMi4yODEwODExIEMxMC40Mjk3Mjk3LDEyLjI4MTA4MTEgMTAuNzc1Njc1NywxMi42MjE2MjE2IDEwLjc3NTY3NTcsMTMuMTQ1OTQ1OSBDMTAuNzc1Njc1NywxMy42NjQ4NjQ5IDEwLjQyOTcyOTcsMTQuMDA1NDA1NCA5Ljg3ODM3ODM4LDE0LjAwNTQwNTQgWiIgaWQ9Ij8iIGZpbGw9IiM5OTk5OTkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
                  alt="questionIcon"
                  class="css-1aynuae eegrh1g0"
                />
              </div>
              <div class="css-mubs8e e1wlxftg0">
                <span>장바구니, 마이컬리에서 배송지를 변경할 수 있어요.</span>
              </div>
            </div>
          </div>
          <div class="css-5d6nlw e17yjk9v4">
            <div class="css-1gshg9u e150alo82">
              <span class="css-ln1csn e150alo81">배송지</span>
              <div v-if="defaultAddress" class="css-82a6rk e150alo80">
                <span class="css-3uygi7 e17yjk9v3">기본배송지</span>
                <p class="css-36j4vu e17yjk9v2">
                  ({{ defaultAddress.zipcode }}) {{ defaultAddress.address }}
                  {{ defaultAddress.addressDetail }}
                </p>
                <div class="css-rqc9f e14u1xpe0">
                  {{ defaultAddress.phoneNum }}
                </div>
                <div class="css-iqoq9n e17yjk9v0">
                  <button
                    class="css-1xky6jf e4nu7ef3"
                    type="button"
                    @click="confirmChangeAddr"
                    width="60"
                    height="30"
                    radius="3"
                  >
                    <span class="css-nytqmg e4nu7ef1">변경</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div class="css-4c6dm7 epvroj93">
          <div class="css-134fy6p epvroj92">
            <div id="payment-methods">
              <div class="css-12aowi2 edbbr7c2">
                <h3 class="css-1ddzp0m edbbr7c1">결제 수단</h3>
              </div>
              <div class="css-1gshg9u e150alo82">
                <span class="css-ln1csn e150alo81">결제 수단</span>
                <div class="css-82a6rk e150alo80">
                  <div class="css-gd125q e4nb37r1">
                    <div>
                      <div class="css-18dvwsu ef0cmoa0">
                        <button
                          type="button"
                          class="css-1fecctx ehlmjxl0"
                          data-testid="kakao-pay-button"
                          color="#f6e500"
                          disabled
                          style="cursor: default"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="20"
                            viewBox="0 0 50 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.51492 2C3.3647 2 0 4.64484 0 7.90661C0 9.84455 1.18731 11.5641 3.02104 12.6413C2.83002 13.4093 2.33737 15.3834 2.27107 15.5978C2.1884 15.8644 2.1678 16.6436 2.97307 16.1105C3.60651 15.6909 5.4518 14.4102 6.54233 13.7625C6.86117 13.795 7.18536 13.8132 7.51492 13.8132C11.6654 13.8132 15.0298 11.1689 15.0298 7.90661C15.0298 4.64484 11.6654 2 7.51492 2Z"
                              fill="#000"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.0479 3.31241C22.5654 1.99952 24.5165 1.805 25.9411 2.72772C27.6478 3.83348 28.1089 5.48104 28.1089 7.61911C28.1089 10.0187 26.9941 11.5878 26.4673 12.08C25.9411 12.5722 24.7941 13.3718 23.5862 13.3718H21.4198V17.1558H18.5085V2.48163H20.6146C20.6146 2.48163 20.8753 3.02988 21.0479 3.31241ZM21.4661 11.2476H22.6043C23.1618 11.2476 25.1513 10.7406 25.1513 7.86423C25.1513 7.18761 25.0604 6.47931 24.8728 5.96441C24.5164 4.98787 23.6262 4.46484 22.999 4.46484C22.3024 4.46484 21.8456 4.64199 21.4661 4.94162V11.2476Z"
                              fill="#000"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M29.7965 3.32774C29.7965 3.32774 31.2934 2.24609 33.8173 2.24609C35.9024 2.24609 36.759 2.96392 37.2649 3.59963C37.746 4.20422 38.1269 5.09667 38.1269 6.39891V13.08H35.8663V12.1261C35.8663 12.1261 35.4244 12.5457 34.4882 12.9569C33.5075 13.3875 31.8351 13.8337 30.4469 12.7725C29.0497 11.7043 29.2461 9.30134 29.5954 8.61911C30.0753 7.68097 30.9579 6.65033 33.3114 6.65033H35.3398V5.74303C35.3398 5.18917 34.7566 4.63531 33.6107 4.63531C32.3295 4.63531 31.7764 4.82815 30.7926 5.27101L29.7965 3.32774ZM31.9178 9.97264C31.9178 11.2553 33.0078 11.2334 33.3655 11.2034C34.4546 11.1118 35.3037 10.4085 35.3037 10.4085L35.2935 8.49606H33.8791C33.2803 8.49606 31.9178 8.71133 31.9178 9.97264Z"
                              fill="#000"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M47.0614 2.24609L44.7697 10.3572L42.2303 2.24609L39.3811 3.06651C39.3811 3.06651 42.8807 12.4493 43.0045 12.8493C43.1284 13.2493 42.9995 13.7078 42.7258 14.172C42.3539 14.8027 40.8985 16.2024 40.8985 16.2024L42.7771 17.8651C42.7771 17.8651 43.6343 17.1767 44.522 16.1102C45.2646 15.218 46.1576 13.279 46.4601 12.5328C47.319 10.4141 49.8793 3.06651 49.8793 3.06651L47.0614 2.24609Z"
                              fill="#000"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="css-p04ye2 eqgsbpy1"></div>
                  </div>
                </div>
              </div>
              <ul class="css-wx42bm e4nb37r0">
                <li>
                  ※ 카카오페이 결제 시, 결제하신 수단으로만 환불되는 점
                  양해부탁드립니다.
                </li>
              </ul>
            </div>
            <div class="css-12aowi2 edbbr7c2">
              <h3 class="css-1ddzp0m edbbr7c1">개인정보 및 결제 동의</h3>
            </div>
            <div class="css-37px7p eh5sxvr5">
              <div class="css-vtybye eh5sxvr2">
                <span class="css-0 eh5sxvr1"
                  >개인정보 수집∙이용 및 처리 동의</span
                >
              </div>
              <strong class="css-87vide eh5sxvr4"
                >위 내용을 확인 하였으며 결제에 동의합니다.</strong
              >
            </div>
            <p class="css-1tak4sl eh5sxvr3">
              주문완료 상태일 경우에만 주문 취소가 가능하며, 상품 미배송 시
              결제하신 수단으로 환불됩니다.
            </p>
            <p class="css-1tak4sl eh5sxvr3">
              컬리 내 개별 판매자가 등록한 오픈마켓 상품의 경우 컬리는
              통신판매중개자로서 주문, 품질, 교환/환불 등 의무와 책임을 부담하지
              않습니다.
            </p>
            <div class="css-1azakc el0c5j40">
              <button
                @click="payment"
                class="css-1lha8en e4nu7ef3"
                type="button"
                width="240"
                height="56"
                radius="3"
              >
                <span class="css-nytqmg e4nu7ef1"
                  >{{ selectedTotalCost }}원 결제하기</span
                >
              </button>
            </div>
          </div>
          <div class="css-1rz7w0y epvroj91">
            <div class="css-9i9om4 epvroj90">
              <div class="css-6hge48 edbbr7c2">
                <h3 class="css-1ddzp0m edbbr7c1">결제 금액</h3>
              </div>
              <div class="css-hdnk73 e12lli9y0">
                <div class="css-1hvttuk eahaaoi12">
                  <div class="css-1rmc3ba eahaaoi11">주문금액</div>
                  <div>
                    <span class="css-2pg1ps eahaaoi10"
                      ><span class="css-rfpchb eahaaoi3"></span
                      >{{ selectedTotalCost }}</span
                    ><span class="css-158icaa eahaaoi8">원</span>
                  </div>
                </div>
                <div class="css-sk644d eahaaoi9">
                  <div class="css-zjik7 eahaaoi0">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 5H0V10V11H1H6V10H1V5Z"
                        fill="#ddd"
                      ></path>
                    </svg>
                    <div class="css-1rmc3ba eahaaoi11">상품금액</div>
                  </div>
                  <div>
                    <span class="css-2pg1ps eahaaoi10"
                      ><span class="css-rfpchb eahaaoi3"></span
                      >{{ originalPriceTotal }}</span
                    ><span class="css-158icaa eahaaoi8">원</span>
                  </div>
                </div>
                <div class="css-sk644d eahaaoi9">
                  <div class="css-zjik7 eahaaoi0">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 5H0V10V11H1H6V10H1V5Z"
                        fill="#ddd"
                      ></path>
                    </svg>
                    <div class="css-1rmc3ba eahaaoi11">상품할인금액</div>
                  </div>
                  <div>
                    <span class="css-2pg1ps eahaaoi10"
                      ><span class="css-rfpchb eahaaoi3">-</span
                      >{{ originalPriceTotal - selectedTotalCost }}</span
                    ><span class="css-158icaa eahaaoi8">원</span>
                  </div>
                </div>
                <div class="css-1hgn7mh eahaaoi7">
                  <div class="css-1rmc3ba eahaaoi11">최종결제금액</div>
                  <div>
                    <span class="css-2pg1ps eahaaoi10"
                      ><span class="css-rfpchb eahaaoi3"></span
                      >{{ selectedTotalCost }}</span
                    ><span class="css-158icaa eahaaoi8">원</span>
                  </div>
                </div>
                <div class="css-1ujngs9 eahaaoi1">
                  결제는 카카오페이 결제만 가능합니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/useCartStore";
import { useUserInfoStore } from "@/stores/useUserInfoStore";
import { useUserStore } from "@/stores/useUserStore";
import { computed } from "vue";
import { mapStores } from "pinia";
import axios from "axios";

export default {
  name: "OrderComponent",
  data() {
    return {
      addresses: [], // 주소를 배열로 선언
      name: null,
      email: null,
    };
  },
  setup() {
    const cartStore = useCartStore();

    const originalPriceTotal = computed(() => {
      return cartStore.selectedItems.reduce((total, item) => {
        return total + item.originalPrice * item.quantity;
      }, 0);
    });

    return {
      selectedItems: cartStore.selectedItems,
      selectedTotalCost: cartStore.selectedTotalCost,
      originalPriceTotal,
    };
  },
  computed: {
    ...mapStores(useUserInfoStore),
    ...mapStores(useUserStore),
    defaultAddress() {
      // 기본 주소가 있을 경우 반환, 없으면 null 반환
      return this.addresses.length > 0 ? this.addresses[0] : null;
    },
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        const response = await this.userInfoListStore.getUserInfo();
        this.name = response.name;
        this.email = response.email;
        this.addresses = response.addresses.filter((addr) => addr.defaultAddr); // 기본 주소만 필터링하여 배열에 저장
        console.log(this.response);
      } catch (error) {
        this.userStore.logout();
        this.$router.push("/");
      }
    },
    confirmChangeAddr() {
      if (confirm("배송지 변경을 위해 마이페이지로 이동하시겠습니까?")) {
        this.$router.push({ path: `/mypage/address` });
      }
    },
    payment() {
      const IMP = window.IMP;
      // IMP 인스턴스 초기화
      IMP.init("imp74464581");

      const defaultAddr = this.defaultAddress;
      const orderId = `${this.email}_${Date.now()}`;

      const customDataList = this.selectedItems.map((item) => {
        return {
          [item.itemId]: item.quantity,
        };
      });

      // 결제 요청
      IMP.request_pay(
        {
          pg: "kakaopay.TC0ONETIME",
          merchant_uid: "order_no" + orderId,
          name: "order_test",
          amount: this.selectedTotalCost,
          buyer_email: this.email,
          buyer_name: this.name,
          buyer_tel: defaultAddr.phoneNum,
          buyer_addr: defaultAddr.address + " " + defaultAddr.addressDetail,
          buyer_postcode: defaultAddr.zipcode,
          custom_data: { list: customDataList },
        },
        async (rsp) => {
          if (rsp.success) {
            try {
              const response = await axios.get(
                `http://localhost:8080/orders/kakaoPay/${rsp.imp_uid}`,
                {
                  withCredentials: true,
                }
              );
              if (response.data.code === 5100) {
                alert("결제가 완료되었습니다.");
                this.deleteSelectedItems();
                this.$router.push({ path: `/mypage/order` });
              } else {
                alert("결제가 실패하였습니다.");
              }
            } catch (error) {
              if (error.response.status === 401) {
                this.userStore.logout();
                this.$router.push("/");
              }
              console.error("결제 처리 중 오류 발생:", error);
              alert("결제 처리 중 오류가 발생했습니다.");
            }
          } else {
            alert(rsp.error_msg);
          }
        }
      );
    },
    deleteSelectedItems() {
      const selectedIds = this.selectedItems.map((item) => item.itemId);
      console.log("selectedIds" + selectedIds);

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
          this.userStore.logout();
          this.$router.push("/");
          console.error("Error deleting selected items:", error);
        });
    },
  },
};
</script>

<style scoped>
.css-1ykiyus > div {
  padding-top: 50px;
}

.css-1uom1od {
  width: 1050px;
  padding: 60px 0px;
  margin: 0px auto;
}

.css-1ykiyus h2 {
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.5px;
}

.css-10owlr {
  padding-bottom: 48px;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
}

.css-ixlb9s {
  letter-spacing: -0.5px;
}

.css-zo1i6f {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(51, 51, 51);
}

.css-1ddzp0m {
  padding: 16px 0px;
  font-weight: 500;
  font-size: 20px;
  color: rgb(51, 51, 51);
  line-height: 29px;
}

svg:not(:root) {
  overflow: hidden;
}

.css-12aowi2 {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid rgb(51, 51, 51);
}

.css-shoa2s {
  padding: 10px 0px;
}

.css-yazyg9 {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 8px 0px;
}

.css-yazyg9 > span {
  line-height: 24px;
}

.css-ln1csn {
  display: inline-block;
  width: 160px;
  margin-right: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.32px;
  vertical-align: top;
}

.css-82a6rk {
  flex: 1 1 0%;
}

.css-t6o2y8 {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 24px;
}

.css-1r0yqr6 {
  margin-top: 10px;
}

.css-i7dt79 {
  font-size: 12px;
  line-height: 21px;
  color: rgb(102, 102, 102);
}

.css-1te1vur {
  position: relative;
  cursor: pointer;
}

.css-1he5996 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  color: rgb(153, 153, 153);
  font-weight: 600;
  line-height: 20px;
}

.css-1aynuae {
  width: 20px;
  height: 20px;
}

.css-mubs8e {
  position: absolute;
  right: 0px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(51, 51, 51);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: rgb(102, 102, 102);
  white-space: nowrap;
  z-index: 3;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  border-radius: 3px;
  padding: 14px;
  margin-top: 11px;
}

.css-5d6nlw {
  border-bottom: 1px solid rgb(244, 244, 244);
  padding-bottom: 20px;
}

.css-1gshg9u {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 20px;
}

.css-5d6nlw > div > span:first-of-type {
  line-height: 24px;
}

.css-3uygi7 {
  display: inline-block;
  height: 22px;
  padding: 0px 8px;
  margin-bottom: 8px;
  border-radius: 11px;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: rgb(102, 102, 102);
  background-color: rgb(247, 247, 247);
  vertical-align: top;
}

.css-36j4vu {
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: rgb(51, 51, 51);
}

.css-iqoq9n {
  margin-top: 20px;
}

.css-1xky6jf {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
}

.css-1xky6jf > span {
  font-size: 12px;
  line-height: 28px;
  font-weight: 500;
}

.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}

.css-4c6dm7 {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-134fy6p {
  width: 742px;
}

.css-134fy6p > div:first-of-type {
  margin-top: 40px;
}

.css-gd125q {
  width: 414px;
}

.css-18dvwsu {
  display: flex;
}

.css-1fecctx {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 48px;
  border: 1px solid rgb(246, 229, 0);
  font-size: 14px;
  color: rgb(255, 255, 255);
  background: rgb(246, 229, 0);
  font-weight: 500;
  border-radius: 3px;
}

svg:not(:root) {
  overflow: hidden;
}

.css-wx42bm {
  margin-top: 20px;
  border-top: 1px solid rgb(244, 244, 244);
  padding-top: 20px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(102, 102, 102);
}

.css-wx42bm li + li {
  padding-top: 4px;
}

.css-37px7p {
  padding: 20px 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
}

.css-vtybye {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}

.css-1q6jmiw {
  color: rgb(153, 153, 153);
  text-decoration: underline;
}

.css-vtybye + div {
  padding-top: 12px;
}

.css-1q6jmiw {
  color: rgb(153, 153, 153);
  text-decoration: underline;
}

.css-vtybye + strong {
  padding-top: 20px;
}

.css-87vide {
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: rgb(51, 51, 51);
}

.css-1tak4sl {
  padding-left: 16px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(102, 102, 102);
}

.css-1tak4sl::before {
  display: inline-block;
  width: 16px;
  margin-left: -16px;
  content: "※";
}

.css-1tak4sl + p {
  padding-top: 4px;
}

.css-1tak4sl::before {
  display: inline-block;
  width: 16px;
  margin-left: -16px;
  content: "※";
}

.css-1azakc {
  text-align: center;
}

.css-1lha8en {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  margin: 40px auto 30px;
  font-weight: 500;
}

.css-1rz7w0y {
  position: relative;
  width: 284px;
}

.css-6hge48 {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 40px;
}

.css-hdnk73 {
  width: 100%;
  padding: 17px 16px 18px 18px;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(242, 242, 242);
}

.css-1hvttuk:first-of-type {
  margin-top: 0px;
}

.css-1hvttuk {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 16px;
  color: rgb(51, 51, 51);
  padding-bottom: 4px;
}

.css-1rmc3ba {
  min-width: 96px;
}

.css-2pg1ps {
  font-size: 18px;
}

.css-rfpchb {
  display: inline-block;
  margin-right: 4px;
}

.css-158icaa {
  margin-left: 4px;
}

.css-sk644d {
  display: flex;
  margin-top: 8px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  color: rgb(153, 153, 153);
}

.css-zjik7 {
  display: flex;
}

.css-sk644d .eahaaoi10 {
  font-size: 14px;
}

.css-158icaa {
  margin-left: 4px;
}

.css-1hgn7mh {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px 0px 1px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 16px;
  color: rgb(76, 76, 76);
}

.css-1hgn7mh .eahaaoi11 {
  display: flex;
  flex-shrink: 0;
  font-weight: 400;
}

.css-1hgn7mh .eahaaoi10 {
  font-size: 22px;
  font-weight: bold;
}

.css-1ujngs9 {
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: rgb(141, 76, 196);
}

.css-1y0xj4c > div > span:first-of-type {
  line-height: 24px;
}

.css-11y0tcn {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(51, 51, 51);
}

.css-11y0tcn > span {
  color: rgb(95, 0, 128);
}

.css-1m5hyg0 {
  word-break: break-all;
}

.css-rqc9f {
  margin-top: 8px;
  font-size: 14px;
  color: rgb(102, 102, 102);
  line-height: 24px;
}

.css-87vide {
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: rgb(51, 51, 51);
}

.css-bd9p1l {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.css-17jyui4 {
  width: 60px;
  height: 78px;
  cursor: pointer;
  background-color: rgb(245, 245, 245);
}
.css-10nl60h {
  overflow: hidden;
  width: 720px;
  padding: 0px 20px;
  flex: 1 1 0%;
}
.css-9j7jhp {
  max-height: 48px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.css-1efb5i1 {
  width: 100px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.css-1j31gob {
  width: 126px;
  text-align: right;
}
.css-jnogx7 {
  display: block;
  font-weight: 700;
  font-size: 16px;
  color: rgb(51, 51, 51);
  line-height: 22px;
  word-break: break-all;
}

.css-vtybye + strong {
  font-weight: bolder;
  padding-top: 20px;
}
</style>
