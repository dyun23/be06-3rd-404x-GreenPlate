<template>
    <div class="css-heioij eug5r8l1">
        <div class="css-oc8mjz ed9qr673">
            <div class="css-eq7f8j ed9qr672">
                <h2 class="css-1lmd4kz ed9qr671">주문 내역</h2>
                <span class="css-1vbzf1d ed9qr670">
                최대 지난 1년간의 주문내역까지 확인할 수 있어요
                </span>
            </div>
        </div>
        <div class="css-1xdhyk6 eug5r8l0">
            <div class="css-0 e1tspwdg1">
                <div class="css-z7b9yl e1tspwdg2">
                    <button
                        :class="['css-8jchfv', 'e1hwl4uq0', { active: currentStatus === 'ready' }]"
                        @click="fetchOrders('ready')"
                    >
                      주문완료
                    </button>
                    <button
                        :class="['css-8jchfv', 'e1hwl4uq0', { active: currentStatus === 'shipped' }]"
                        @click="fetchOrders('shipped')"
                    >
                        배송중
                    </button>
                    <button
                        :class="['css-8jchfv', 'e1hwl4uq0', { active: currentStatus === 'completed' }]"
                        @click="fetchOrders('completed')"
                    >
                        배송완료
                    </button>
                </div>
                <div v-for="order in ordersList" :key="order.order_id" class="css-9hrkbf e88f0q51">
                <a class="css-h9u7nh e13d9bui8"> 
                    <div class="css-1prr1nv e13d9bui7">
                    <span class="css-mvcumu e13d9bui6">
                        {{ new Date(order.order_date).toLocaleString() }}
                    </span>
                    <span class="css-yi6epy e13d9bui5">주문 상세</span>
                    </div>
                    <div class="css-1e8mkxi e13d9bui4">
                        
                    <router-link :to="{ path: `/company/order/${order.order_id}`, query: { price: order.price } }">
                    <div class="left-column">
                        <dl class="css-oxiuin e13d9bui3">
                            <dt class="css-1qdgh9t e13d9bui2">상품명</dt>
                            <dd class="css-1iph3gc e13d9bui0">
                            {{ order.item_name }} 외 {{ order.cnt - 1 }}건
                            </dd>
                        </dl>
                        <dl class="css-oxiuin e13d9bui3">
                            <dt class="css-1qdgh9t e13d9bui2">주문 번호</dt>
                            <dd class="css-wstq91 e13d9bui1">{{ order.order_id }}</dd>
                        </dl>
                        <dl class="css-oxiuin e13d9bui3">
                            <dt class="css-1qdgh9t e13d9bui2">결제 방법</dt>
                            <dd class="css-wstq91 e13d9bui1">카카오페이</dd>
                        </dl>
                        <dl class="css-oxiuin e13d9bui3">
                            <dt class="css-1qdgh9t e13d9bui2">결제 금액</dt>
                            <dd class="css-wstq91 e13d9bui1">{{ order.price }}원</dd>
                        </dl>
                        <dl class="css-oxiuin e13d9bui3">
                            <dt class="css-1qdgh9t e13d9bui2">주문 상태</dt>
                            <dd class="css-wstq91 e13d9bui1">
                            {{ formatOrderState(order.order_state, order.refund_yn) }}
                            </dd>
                        </dl>
                    </div>
                    
                    </router-link>
                    <div v-if="order.order_state === 'ready'" class="button-container">
                        <div class="input-container">
                        <input v-model="order.invoiceNumber" type="text" placeholder="송장번호를 입력하세요" />
                        </div>
                        <button class="custom-button" @click="submitInvoiceNumber(order.order_id)">송장 입력</button>
                    </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
      name: "CompanyOrderComponent",
      data() {
        return {
            ordersList: [],
            currentPage: 0,
            pageSize: 5,
            isLoading: false,
            isLastPage: false,
            currentStatus: 'ready',
            showInputField: false,  // 입력 상자 표시 상태
            activeOrderId: null    // 현재 송장 입력 중인 주문 ID
        };
      },
      mounted() {
        window.addEventListener('scroll', this.scrollPagination);
        this.fetchOrders(this.currentStatus); 
      },
      methods: {
        async fetchOrders(status) {
            this.currentStatus = status;
            this.currentPage = 0;
            this.isLastPage = false;
            this.ordersList = []; 
            await this.getData();
        },
        async getData() {
          if (this.isLastPage || this.isLoading) return;
    
          this.isLoading = true;
    
          try {
            const params = {
              page: this.currentPage,
              size: this.pageSize,
              status: this.currentStatus
            };
    
            const response = await axios.get(`http://localhost:8080/orders/list/company`, {
              params,
              withCredentials: true
            });
            console.log('response.data.result:', response.data.result);
            const newData = response.data.result.content.map(item => ({ ...item, quantity: 1 }));
            if (newData.length < this.pageSize) {
              this.isLastPage = true;
            }
    
            this.ordersList = [...this.ordersList, ...newData];
          } catch (error) {
            console.error('Error fetching orders:', error);
          } finally {
            this.isLoading = false;
          }
        },
        showInput(orderId) {
          this.activeOrderId = orderId;
          this.showInputField = true;
        },
        async submitInvoiceNumber(orderId) {
            const order = this.ordersList.find(o => o.order_id === orderId);
            console.log('송장번호:', order.invoiceNumber, '주문ID:', orderId);
            this.postInvocie(orderId,order.invoiceNumber);
            // 서버에 송장 번호를 제출하는 로직을 추가합니다.
            this.showInputField = false; // 입력 상자 숨기기
            order.invoiceNumber = '';    // 입력 필드 초기화
        },
        async postInvocie(orderId,invoiceNumber) {
          try {
            const response = await axios.post(`http://localhost:8080/orders/invoice`, {
                orderId: orderId,
                invoiceNum: invoiceNumber
            }, {
                withCredentials: true
            });
            console.log(response.data.message);
            alert(response.data.message);
            window.location.reload();
          } catch (error) {
            console.error('Error fetching orders:', error);
          } finally {
            this.isLoading = false;
          }
        },
        scrollPagination() {
          const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 700;
          if (nearBottom && !this.isLastPage && !this.isLoading) {
            this.currentPage++;
            this.getData();
          }
        },
        formatOrderState(state, refundYn) {
          let refund = "";
          if (refundYn) {
            refund = ' (결제취소)';
          }
          switch (state) {
            case 'ready':
              return '주문완료' + refund;
            case 'shipped':
              return '배송중' + refund;
            case 'completed':
              return '배송완료' + refund;
            default:
              return '상태 미정' + refund;
          }
        }
      }
    };
    </script>
    
    
    
    
    
<style>
@import '../../styles/Mypage.css';
.css-heioij {
overflow: hidden;
width: 650px;
background-color: rgb(255, 255, 255);
border-radius: 16px;
}
.css-oc8mjz {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px 20px;
    padding: 25px 0px 20px;
    border-bottom: 2px solid rgb(51, 51, 51);
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
.css-1vbzf1d {
    padding-left: 8px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: rgb(153, 153, 153);
}
.css-z7b9yl {
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(255, 255, 255);
    transition: top 0.2s ease-in-out;
    padding: 20px;
}
.css-8jchfv {
    width: 100%;
    height: 40px;
    padding: 11px 12px 10px;
    margin-right: 6px;
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 0.5);
    background-color: rgb(255, 255, 255);
    text-align: center;
    color: rgb(102, 102, 102);
}
.css-h9u7nh {
    width: 100%;
    cursor: pointer;
}
.css-1prr1nv {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgb(244, 244, 244);
    margin: 0px 20px;
    padding: 15px 0px;
}
.css-mvcumu {
    color: rgb(51, 51, 51);
    font-weight: 600;
    font-size: 15px;
}
.css-yi6epy {
    align-self: center;
    padding-right: 14px;
    color: rgb(153, 153, 153);
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNyAzLjc1NyAxMS4yNDMgOCA3IDEyLjI0MyIvPgogICAgPC9nPgo8L3N2Zz4K) 100% 35% / 16px 16px no-repeat;
    font-weight: 600;
    font-size: 13px;
}
.css-1e8mkxi {
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.css-oxiuin {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
}
.css-1qdgh9t {
    width: 80px;
    margin-right: 10px;
    color: rgb(51, 51, 51);
}
.css-1iph3gc {
    flex: 1 1 0%;
    color: rgb(51, 51, 51);
    font-weight: 500;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.css-bx0kqw {
    width: 1px;
    height: 1px;
}
.css-z7b9yl {
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(255, 255, 255);
    transition: top 0.2s ease-in-out;
    padding: 20px;
}
.css-8jchfv {
    width: 100%;
    height: 40px;
    padding: 11px 12px 10px;
    margin-right: 6px;
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 0.5);
    background-color: rgb(255, 255, 255);
    text-align: center;
    color: rgb(102, 102, 102);
}
.css-z7b9yl button:last-of-type {
    margin-right: 0px;
}
.css-8jchfv.active {
    border: 1px solid rgb(95, 0, 128);
    color: rgb(95, 0, 128);
    font-weight: 500;
}
.css-1e8mkxi {
    position: relative;
}

.custom-button {
    padding: 10px 20px;
    background-color: white; /* 배경색 흰색 */
    color: rgb(95, 0, 128);   /* 글자색 보라색 */
    border: 1px solid rgb(95, 0, 128); /* 테두리 색상 보라색, 두께 2px */
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;  /* 기본 글자 크기 설정 (기존보다 2배는 아니지만, 강조를 위해 크기 조정) */
    font-weight: 600; /* 글자 굵기 600으로 설정 (기본보다 두 배 두꺼운 설정) */
    transition: background-color 0.3s, color 0.3s; /* 부드러운 색상 전환 */
    height: 36px; /* 버튼과 동일한 높이 설정 */
    margin-left: 10px; /* input과 버튼 사이에 20px 간격 추가 */
}

.custom-button:hover {
    background-color: rgb(95, 0, 128); /* 배경색 보라색 */
    color: white; /* 글자색 흰색 */
    border-color: rgb(95, 0, 128); /* 테두리 색상 보라색 */
}
.button-container {
    position: absolute;
    top: 0;       /* 상단 여백을 제거 */
    right: 0px;  /* 우측에서 20px 간격 */
    padding: 0px;
    display: flex;
    align-items: center; /* 버튼과 입력 상자가 수직으로 맞추어지도록 설정 */
    justify-content: flex-end; /* 우측 정렬 */
    position: relative; /* 버튼 컨테이너를 기준으로 위치 설정 */
}

.input-container {
    display: flex;
    align-items: center;
    border: 1px solid rgb(95, 0, 128); /* 테두리 보라색 */
    border-radius: 4px;
    background-color: white; /* 배경색 흰색 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    height: 36px; /* 버튼과 동일한 높이 설정 */
}


.input-container input {
    padding: 5px;
    border: none; /* 기본 테두리 제거 */
    border-radius: 4px;
    font-size: 14px;
    margin-right: 10px; /* 입력 필드와 버튼 간의 간격 */
    height: 30px; /* 버튼과 동일한 높이 설정 */
    outline: none; /* 포커스 시 기본 테두리 제거 */
}


.input-container button {
    padding: 5px 10px;
    background-color: white; /* 배경색 흰색 */
    color: rgb(95, 0, 128);   /* 글자색 보라색 */
    border: 1px solid rgb(95, 0, 128); /* 테두리 색상 보라색 */
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    height: 30px; /* 버튼 높이 설정 */
}
.input-container button:hover {
    background-color: rgb(95, 0, 128); /* 배경색 보라색 */
    color: white; /* 글자색 흰색 */
}
</style>
    