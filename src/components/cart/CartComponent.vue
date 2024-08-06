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
                                    <input type="checkbox" class="total-input">
                                    <div class="total-check">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                                                stroke="#ddd" fill="#fff"></path>
                                            <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <span>전체선택 (1/2)</span>
                                </label>
                                <span class="total-middle"></span>
                                <button>선택삭제</button>
                            </div>
                        </div>
                    </div>
                    <div class="cart-items">
                        <div>
                            <ul>
                                <li class="item">
                                    <label class="item-label">
                                        <input type="checkbox" class="item-checkbox" checked="">
                                        <div class="item-div">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                    fill="#5f0080"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <span></span>
                                    </label>
                                    <a class="item-aimg">
                                        <span class="item-img"></span>
                                    </a>
                                    <div class="item-title-div">
                                        <a class="item-title">
                                            <p class="item-title-p">[다노] 통밀 어니언 베이글 (5개입)</p>
                                        </a>
                                        <div class="item-bottom"></div>
                                    </div>
                                    <div class="item-count-div">
                                        <button type="button" aria-label="수량내리기" disabled="" class="item-down"></button>
                                        <div class="item-count">1</div>
                                        <button type="button" aria-label="수량올리기" class="item-up"></button>
                                    </div>
                                    <div class="item-price-div">
                                        <span aria-label="할인 가격" data-testid="product-price"
                                            class="item-discount">9,520원</span>
                                        <span aria-label="판매 가격" data-testid="selling-price"
                                            class="item-price">11,200원</span>
                                    </div>
                                    <button class="item-delete-btn" type="button" data-testid="delete">
                                        <span class="item-delete"></span>
                                    </button>
                                </li>
                                <li class="item">
                                    <label class="item-label">
                                        <input type="checkbox" class="item-checkbox" checked="">
                                        <div class="item-div">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                                                    stroke="#ddd" fill="#fff"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <span></span>
                                    </label>
                                    <a class="item-aimg">
                                        <span class="item-img"></span>
                                    </a>
                                    <div class="item-title-div">
                                        <a class="item-title">
                                            <p class="item-title-p">[다노] 통밀 오트 베이글 (5개입)</p>
                                        </a>
                                        <div class="item-bottom"></div>
                                    </div>
                                    <div class="item-count-div">
                                        <button type="button" aria-label="수량내리기" disabled="" class="item-down"></button>
                                        <div class="item-count">1</div>
                                        <button type="button" aria-label="수량올리기" class="item-up"></button>
                                    </div>
                                    <div class="item-price-div">
                                        <span aria-label="할인 가격" data-testid="product-price"
                                            class="item-discount">7,990원</span>
                                        <span aria-label="판매 가격" data-testid="selling-price"
                                            class="item-price">9,400원</span>
                                    </div>
                                    <button class="item-delete-btn" type="button" data-testid="delete">
                                        <span class="item-delete"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cart-right">
                    <div class="cart-right-div">
                        <div class="addr-div">
                            <h3 class="addr-title">배송지</h3>
                            <div class="addr">
                                <p class="addr-text">경기 하남시 대청로116번길 30 (은행뉴서울아파트) 104동 602호</p>
                                <button class="addr-change-btn" type="button" height="36" radius="3">
                                    <span class="addr-change-text">배송지 변경</span>
                                </button>
                            </div>
                        </div>
                        <div class="cart-cost-div">
                            <div class="css-8jmoub ea1mry77">
                                <span class="css-vmo0an ea1mry76">상품금액</span>
                                <span class="cost-text">9,520
                                    <span class="css-hfgifi ea1mry72">원</span>
                                </span>
                            </div>
                        </div>
                        <div class="order-div">
                            <button class="order-btn" type="button" height="56">
                                <span class="order-text">주문하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartComponent"
    }
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

    .addr-div {
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

    .order-btn>div {
        display: inline-block;
        position: relative;
    }

    .order-btn>div>div:first-of-type {
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

.item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 20px 0px;
}
.item-margin {
    margin-left: 2px;
}
.item-checkbox {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
}
.item-div {
    margin-right: 12px;
}
.item-div svg {
    vertical-align: middle;
}
.item-aimg {
    display: inline-block;
    width: 60px;
    height: 78px;
    margin-right: 20px;
    background: url(https://res.kurly.com/v/2.12.45/_next/static/images/noimg-150x195-2c819ff….svg) center center no-repeat rgb(245, 245, 245);
}
.item-img {
    display: block;
    height: 100%;
    background-image: url(https://product-image.kurly.com/hdims/resize/%5E%3E120x%3E156/cropcenter/120x156/quality/85/src/product/image/7047567e-27a1-440a-b12b-521812ad841a.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.item-title-div {
    display: flex;
    flex-direction: column;
    width: 345px;
    margin-right: 20px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
}
.item-title {
    cursor: pointer;
}
.item-title-p {
    max-height: 54px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-box-orient: vertical;
}
.item-bottom{
    display: flex;
    margin-top: 10px;
}
.item-count-div {
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    width: 88px;
    border-radius: 3px;
}
.item-count-div > div {
    font-weight: 400;
    color: rgb(51, 51, 51);
}

.item-down {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=");
    vertical-align: top;
}

.item-count {
    display: inline-flex;
    overflow: hidden;
    white-space: nowrap;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(51, 51, 51);
    text-align: center;
    width: 31px;
    height: 28px;
    line-height: 28px;
}
.item-up {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K");
    vertical-align: top;
}
.item-price-div {
    display: flex;
    flex-direction: column;
    width: 127px;
    text-align: right;
    word-break: break-all;
}
.item-discount {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: rgb(51, 51, 51);
}
.item-price {
    font-size: 14px;
    line-height: 24px;
    color: rgb(181, 181, 181);
    text-decoration: line-through;
    padding-top: 4px;
}
.item-delete-btn {
    width: 30px;
    height: 30px;
    margin-left: 9px;
}
.item-delete {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==");
    background-size: cover;
    background-position: center center;
}

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
    background: url("https://res.kurly.com/pc/service/cart/2007/ico_location.svg") 0px 50% / 20px 20px no-repeat;
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