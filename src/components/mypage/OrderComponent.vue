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
            <div v-for="order in ordersList" :key="order.order_id" class="css-9hrkbf e88f0q51">
            <a class="css-h9u7nh e13d9bui8">
                <div class="css-1prr1nv e13d9bui7">
                <span class="css-mvcumu e13d9bui6">
                    {{ new Date(order.order_date).toLocaleString() }}
                </span>
                <span class="css-yi6epy e13d9bui5">주문 상세</span>
                </div>
                <div class="css-1e8mkxi e13d9bui4">
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
                    {{ formatOrderState(order.order_state) }}
                    </dd>
                </dl>
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
name: "OrderComponent",
data() {
return {
  ordersList: [],
  currentPage: 0, // 페이지 변수를 currentPage로 설정
  pageSize: 5,    // 페이지 크기를 pageSize로 설정
  isLoading: false,
  isLastPage: false // 마지막 페이지 여부를 확인하는 변수
};
},
mounted() {
window.addEventListener('scroll', this.scrollPagination);
this.getData();
},
methods: {
async getData() {
    // 마지막 페이지이거나 로딩 중이면 중단
    if (this.isLastPage || this.isLoading) return;

    this.isLoading = true;

    try {
        const params = {
            page: this.currentPage,
            size: this.pageSize
        };

        const response = await axios.get(`http://localhost:8080/orders/list/user`, {
            params,
            withCredentials: true
        });

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
scrollPagination() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 700;
    if (nearBottom && !this.isLastPage && !this.isLoading) {
        this.currentPage++;
        this.getData();
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
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oc8mjz {
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
margin: 0px 20px;
padding: 25px 0px 20px;
border-bottom: 2px solid rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-eq7f8j {
display: flex;
align-items: flex-end;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1lmd4kz {
font-weight: 500;
font-size: 20px;
letter-spacing: -0.5px;
line-height: 28px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
h2 {
display: block;
font-size: 1.5em;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1vbzf1d {
padding-left: 8px;
font-size: 13px;
line-height: 20px;
letter-spacing: -0.2px;
color: rgb(153, 153, 153);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-eq7f8j {
display: flex;
align-items: flex-end;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oc8mjz {
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
margin: 0px 20px;
padding: 25px 0px 20px;
border-bottom: 2px solid rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
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
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
[type=button], [type=reset], [type=submit], button {
-webkit-appearance: button;
}
button, select {
text-transform: none;
}
button, input {
overflow: visible;
}
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: 1.15;
margin: 0;
}
button {
border-radius: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
button, input[type=button], input[type=reset], input[type=submit] {
-webkit-appearance: button;
cursor: pointer;
}
button {
overflow: visible;
background-color: transparent;
border: none;
}
button, input, optgroup, select, textarea {
color: inherit;
font: inherit;
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
button {
appearance: auto;
text-rendering: auto;
color: buttontext;
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
cursor: default;
box-sizing: border-box;
background-color: buttonface;
margin: 0em;
padding-block: 1px;
padding-inline: 6px;
border-width: 2px;
border-style: outset;
border-color: buttonborder;
border-image: initial;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
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
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
[type=button], [type=reset], [type=submit], button {
-webkit-appearance: button;
}
button, select {
text-transform: none;
}
button, input {
overflow: visible;
}
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: 1.15;
margin: 0;
}
button {
border-radius: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
button, input[type=button], input[type=reset], input[type=submit] {
-webkit-appearance: button;
cursor: pointer;
}
button {
overflow: visible;
background-color: transparent;
border: none;
}
button, input, optgroup, select, textarea {
color: inherit;
font: inherit;
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
button {
appearance: auto;
text-rendering: auto;
color: buttontext;
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
cursor: default;
box-sizing: border-box;
background-color: buttonface;
margin: 0em;
padding-block: 1px;
padding-inline: 6px;
border-width: 2px;
border-style: outset;
border-color: buttonborder;
border-image: initial;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
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
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
[type=button], [type=reset], [type=submit], button {
-webkit-appearance: button;
}
button, select {
text-transform: none;
}
button, input {
overflow: visible;
}
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: 1.15;
margin: 0;
}
button {
border-radius: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
button, input[type=button], input[type=reset], input[type=submit] {
-webkit-appearance: button;
cursor: pointer;
}
button {
overflow: visible;
background-color: transparent;
border: none;
}
button, input, optgroup, select, textarea {
color: inherit;
font: inherit;
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
button {
appearance: auto;
text-rendering: auto;
color: buttontext;
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
cursor: default;
box-sizing: border-box;
background-color: buttonface;
margin: 0em;
padding-block: 1px;
padding-inline: 6px;
border-width: 2px;
border-style: outset;
border-color: buttonborder;
border-image: initial;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-z7b9yl button:last-of-type {
margin-right: 0px;
}
.css-8jchfv.active {
border: 1px solid rgb(95, 0, 128);
color: rgb(95, 0, 128);
font-weight: 500;
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
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
[type=button], [type=reset], [type=submit], button {
-webkit-appearance: button;
}
button, select {
text-transform: none;
}
button, input {
overflow: visible;
}
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: 1.15;
margin: 0;
}
button {
border-radius: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
button, input[type=button], input[type=reset], input[type=submit] {
-webkit-appearance: button;
cursor: pointer;
}
button {
overflow: visible;
background-color: transparent;
border: none;
}
button, input, optgroup, select, textarea {
color: inherit;
font: inherit;
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
button {
appearance: auto;
text-rendering: auto;
color: buttontext;
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
cursor: default;
box-sizing: border-box;
background-color: buttonface;
margin: 0em;
padding-block: 1px;
padding-inline: 6px;
border-width: 2px;
border-style: outset;
border-color: buttonborder;
border-image: initial;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
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
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-9hrkbf {
border-bottom: 8px solid rgb(244, 244, 244);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
background-color: transparent;
}
a {
text-decoration: none;
color: inherit;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1prr1nv {
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
border-bottom: 1px solid rgb(244, 244, 244);
margin: 0px 20px;
padding: 15px 0px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-mvcumu {
color: rgb(51, 51, 51);
font-weight: 600;
font-size: 15px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-yi6epy {
align-self: center;
padding-right: 14px;
color: rgb(153, 153, 153);
background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNyAzLjc1NyAxMS4yNDMgOCA3IDEyLjI0MyIvPgogICAgPC9nPgo8L3N2Zz4K) 100% 35% / 16px 16px no-repeat;
font-weight: 600;
font-size: 13px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1prr1nv {
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
border-bottom: 1px solid rgb(244, 244, 244);
margin: 0px 20px;
padding: 15px 0px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1e8mkxi {
display: flex;
flex-direction: column;
padding: 20px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1qdgh9t {
width: 80px;
margin-right: 10px;
color: rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dt {
display: block;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
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
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1qdgh9t {
width: 80px;
margin-right: 10px;
color: rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dt {
display: block;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-wstq91 {
flex: 1 1 0%;
color: rgb(51, 51, 51);
font-weight: 500;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1qdgh9t {
width: 80px;
margin-right: 10px;
color: rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dt {
display: block;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-wstq91 {
flex: 1 1 0%;
color: rgb(51, 51, 51);
font-weight: 500;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1qdgh9t {
width: 80px;
margin-right: 10px;
color: rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dt {
display: block;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-wstq91 {
flex: 1 1 0%;
color: rgb(51, 51, 51);
font-weight: 500;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-wstq91 {
flex: 1 1 0%;
color: rgb(51, 51, 51);
font-weight: 500;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1qdgh9t {
width: 80px;
margin-right: 10px;
color: rgb(51, 51, 51);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dt {
display: block;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-wstq91 {
flex: 1 1 0%;
color: rgb(51, 51, 51);
font-weight: 500;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dd {
display: block;
margin-inline-start: 40px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}
html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-oxiuin {
display: flex;
flex-direction: row;
margin-bottom: 8px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
dl {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-1e8mkxi {
display: flex;
flex-direction: column;
padding: 20px;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}

.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
text-decoration: none;
color: inherit;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-h9u7nh {
width: 100%;
cursor: pointer;
}
a {
background-color: transparent;
}
a {
text-decoration: none;
color: inherit;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
.css-9hrkbf {
border-bottom: 8px solid rgb(244, 244, 244);
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
user agent stylesheet
div {
display: block;
unicode-bidi: isolate;
}
body, button, input, select, textarea {
font-size: 14px;
color: #333;
}
body {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
-webkit-tap-highlight-color: transparent;
}
:root {
--swiper-theme-color: #007aff;
}

html, button, input, select, textarea {
font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
}
html {
line-height: 1.15;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-tap-highlight-color: transparent;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}
*, :after, :before {
box-sizing: border-box;
margin: 0;
}
*, :after, :before, legend, td, th {
padding: 0;
}


</style>
