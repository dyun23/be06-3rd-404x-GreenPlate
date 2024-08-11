<template>
<div class="goods-add-product">
    <h3 class="goods-add-product-title">RECIPE ITEMS</h3>
    <div class="goods-add-product-wrapper __slide-wrapper" data-slide-item="5">
        <button
            class="goods-add-product-move goods-add-product-move-left __slide-go-left">왼쪽으로
            슬라이드 이동</button>
        <button
            class="goods-add-product-move goods-add-product-move-right __slide-go-right">오른쪽으로
            슬라이드 이동</button>
        <div class="goods-add-product-list-wrapper" style="height:310px">
            <ul class="goods-add-product-list __slide-mover">
                <li  v-for="(item, index) in itemList" :key="index"  class="goods-add-product-item __slide-item">
                    <div class="goods-add-product-item-figure">
                        <a
                            href="/shop/goods/goods_view.php?&amp;goodsno=1000167890">
                            <img :src="item.itemUrl"
                                alt="" class="goods-add-product-item-image">
                        </a> 
                        <button class="btn_cart" @click="addToCart(item.itemId)">이 상품을 장바구니에 담기</button>
                    </div>
                    <div class="goods-add-product-item-content">
                        <div class="goods-add-product-item-content-wrapper">
                            <a
                                href="/shop/goods/goods_view.php?&amp;goodsno=1000167890">
                                <div class="goods-add-product-item-name">{{item.name}}</div>
                                <div class="goods-add-product-item-price"> {{item.discountPrice}}원</div>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: "RecipeDetailsItemComponent",
  props: {
    itemList: {
      type: Array,
      required: true
    }
  },
  methods: {
    async addToCart(itemId) {
      const params = {
        itemId: itemId,
        quantity: 1
      };
      const response = await axios.post('/api/cart/add', params, {
          withCredentials: true
      });
      alert(response.data.message);
      console.log(response);
    }
  }
};
</script>

<style scoped>
@import '../../styles/RecipeDetailCss.css';

#qnb {
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 70px;
  width: 80px;
  font: normal 12px/16px "Noto Sans";
  color: #333;
  letter-spacing: -0.3px;
  transition: top 0.2s;
}

.bnr_qnb {
  padding-bottom: 7px;
}

.thumb {
  width: 80px;
  height: 120px;
  vertical-align: top;
}

.side_menu {
  width: 80px;
  border: 1px solid #ddd;
  border-top: 0 none;
  background-color: #fff;
}

.link_menu {
  display: block;
  height: 29px;
  padding-top: 5px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.link_menu:hover,
.link_menu.on {
  color: #5f0080;
}

@media all and (max-width: 1250px) {
  #qnb {
    display: none;
  }
}

.goods-add-product-item-price {
  left: 35%;
}

.goods-add-product-title {
  text-align: left;
}

.goods-add-product {
  margin-bottom: 50px;
}

.goods-add-product-move {
  height: 35px !important;
}

.goods-add-product-item-name {
  overflow: hidden;
  width: 100%;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-align: center;
}

.goods-add-product .btn_cart {
  display: block;
  overflow: hidden;
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 45px;
  height: 45px;
  margin-top: 15px;
  border: 0 none;
  background: url(https://res.kurly.com/pc/service/common/1908/ico_list_add_cart.png) no-repeat 50% 50%;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}
</style>