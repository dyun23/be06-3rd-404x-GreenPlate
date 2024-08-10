<template>
    <li class="item">
        <label class="item-label">
            <input type="checkbox" class="item-checkbox" v-model="localChecked" @change="emitChecked">
            <div class="item-div">
                <svg v-if="localChecked" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                        fill="#5f0080"></path>
                    <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                        stroke="#ddd" fill="#fff"></path>
                    <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            <span></span>
        </label>
        <a class="item-aimg">
            <span class="item-img" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"></span>
        </a>
        <div class="item-title-div">
            <a class="item-title">
                <p class="item-title-p">{{ item.title }}</p>
            </a>
            <div class="item-bottom"></div>
        </div>
        <div class="item-count-div">
            <button type="button" aria-label="수량내리기" :disabled="item.quantity === 1" class="item-down"
                @click="updateCount(item.quantity - 1)" :class="{'item-down-active': item.quantity > 1}"></button>
            <div class="item-count">{{ item.quantity }}</div>
            <button type="button" aria-label="수량올리기" class="item-up" @click="updateCount(item.quantity + 1)"></button>
        </div>
        <div class="item-price-div">
            <span aria-label="할인 가격" data-testid="product-price" class="item-discount">{{ item.discountPrice * item.quantity }}원</span>
            <span aria-label="판매 가격" data-testid="selling-price" class="item-price">{{ item.originalPrice * item.quantity }}원</span>
        </div>
        <button class="item-delete-btn" type="button" data-testid="delete" @click="deleteItem">
            <span class="item-delete"></span>
        </button>
    </li>
</template>

<script>
import axios from 'axios';

export default {
    name: "CartItemComponent",
    props: {
        item: Object,
    },
    data() {
        return {
            localChecked: this.item.checked
        }
    },
    methods: {
        emitChecked() {
            this.$emit('update-checked', this.item.id, this.localChecked);
        },
        updateCount(newCount) {
            if (newCount >= 1) {
                this.$emit('update-count', this.item.id, newCount);
                this.sendUpdateRequest(this.item.id, newCount);
            }
        },
        sendUpdateRequest(cartId, quantity) {
            axios.post('http://localhost:8080/cart/update', {
                cartId: cartId,
                quantity: quantity
            }, {
                withCredentials: true
            })
            .then(response => {
                console.log("Update successful:", response.data);
            })
            .catch(error => {
                console.error("Error updating cart item:", error);
            });
        },
        deleteItem() {
            axios.delete(`http://localhost:8080/cart/${this.item.id}/delete`, {
                withCredentials: true
            })
            .then(response => {
                console.log("Delete successful:", response.data);
                this.$emit('delete-item', this.item.id);
                window.location.reload();
            })
            .catch(error => {
                console.error("Error deleting cart item:", error);
            });
        }
    },
    watch: {
        item: {
            handler(newVal) {
                this.localChecked = newVal.checked;
            },
            deep: true
        }
    }
}
</script>
<style scoped>
    .item {
        display: flex;
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

    .item-bottom {
        display: flex;
        margin-top: 10px;
    }

    .item-count-div {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgb(221, 223, 225);
        width: 88px;
        border-radius: 3px;
    }

    .item-count-div>div {
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

    .item-down-active {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=");
    }

    .item-count {
        display: inline-flex;
        overflow: hidden;
        white-space: nowrap;
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
</style>