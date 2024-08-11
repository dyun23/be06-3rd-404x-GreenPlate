<template>
  <div v-if="item">
  <div id="description" class="css-18eozqj el27cq0">
    <!-- <div class="css-1d3w5wq e1d86arr0">
      <div class="css-1lyi66c">
        <div class="goods_wrap">
          <div class="goods_desc">
            <div class="context">
              <div class="pic">
                <img
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20240718/gv10000943438_1.jpg"
                />
              </div>
              <p class="words">
                <strong class="sub_tit">01~02. 세척 수세미</strong>
                <b>・ 선택 가이드</b> : ①3개입, ②6개입 중 선택하세요. \<br />
                <b>・ 특징</b> : 전면이 폴리우레탄 소재로 만들어진 수세미예요.
                코팅 팬은 물론 식기구에 눌어붙은 음식물이나 찌든 때를 제거할 때
                사용하기 좋아요.
              </p>
            </div>
            <div class="context">
              <div class="pic">
                <img
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20240718/gv40000943440_1.jpg"
                />
              </div>
              <p class="words">
                <strong class="sub_tit">03. 먼지 청소 / 댐프 더스터</strong>
                <b>・ 개수 </b>: 1개<br />
                <b>・ 사이즈</b> : 가로 6 X 세로 13 X 높이 4cm<br />
                <b>・ 특징</b> : 가구와 가전 제품에 쌓인 먼지부터 청소가 어려운
                좁은 틈새를 청소할 때 쓰기 좋은 스펀지입니다.
              </p>
              <p class="words">
                <strong class="sub_tit">04. 스펀지 거치대 / 캐디</strong>
                <b>・ 개수</b> : 1개<br />
                <b>・ 사이즈</b> : 가로 13 X 세로 10 X 높이 5cm<br />
                <b>・ 특징</b> : 세척 수세미를 거치할 수 있는 거치대예요. 통풍이
                잘될 수 있도록 설계되어 수세미를 더욱 위생적으로 쓸 수 있어요.
              </p>
            </div>
            <div class="context last">
              <div class="pic">
                <img
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20240718/gv40000943460_1.jpg"
                />
              </div>
              <p class="words"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="page-title">
        <h2 class="page-text">상품 상세</h2>
    </div>
    <hr>
    <div class="item-contents" v-html="item.contents"></div>
    <div class="css-8k5a6c ezy1ugy1"></div>
  </div>
</div>
</template>

<script>
  export default {
    name: "ItemDetailContentsComponent",
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    }
  }
</script>

<style scoped>
  .css-18eozqj:first-of-type {
    padding-top: 40px;
  }

  .css-18eozqj {
    position: relative;
    width: 1010px;
    padding-bottom: 100px;
  }

  .css-1d3w5wq {
    width: 100%;
  }

  .css-1lyi66c .goods_wrap {
    width: 1010px;
    margin: 0px auto;
    font-family: "Noto Sans KR";
    font-weight: 300;
    letter-spacing: 0px;
  }

  .css-1lyi66c .goods_wrap .context {
    margin-bottom: 130px;
  }

  .css-1lyi66c .goods_wrap .pic {
    text-align: center;
  }

  .css-1lyi66c .goods_wrap .context .words {
    margin-top: 55px;
    font-size: 18px;
    line-height: 32px;
    color: rgb(55, 55, 55);
  }

  .css-1lyi66c .goods_wrap .context h3,
  .css-1lyi66c .goods_wrap .context strong,
  .css-1lyi66c .goods_wrap .context b {
    font-weight: 500;
  }

  .css-1lyi66c .goods_wrap .sub_tit {
    display: block;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 38px;
  }

  .css-1lyi66c .goods_wrap .context {
    margin-bottom: 130px;
  }

  .css-1lyi66c .goods_wrap .pic {
    text-align: center;
  }

  .css-1lyi66c .goods_wrap .context .words {
    margin-top: 55px;
    font-size: 18px;
    line-height: 32px;
    color: rgb(55, 55, 55);
  }

  .css-1lyi66c .goods_wrap .goods_desc .context .words+.words {
    margin-top: 40px;
  }

  .css-1lyi66c .goods_wrap .context .words {
    margin-top: 55px;
    font-size: 18px;
    line-height: 32px;
    color: rgb(55, 55, 55);
  }

  .css-1lyi66c .goods_wrap .context.last {
    margin-bottom: 170px;
  }

  .css-1lyi66c .goods_wrap .context {
    margin-bottom: 130px;
  }

  .css-8k5a6c {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1010px;
    padding: 0px 10px;
    margin: 0px auto;
  }
  .page-text {
    padding: 40px 0 30px;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
}

hr {
  width: 70%;
  border-top: 0.5px solid #669933;
  margin: 10px auto;
}

.item-contents .page-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.item-contents {
  margin: 50px;
}
.item-contents hr {
  border: none;
  border-top: 1px solid #ccc;
  margin-bottom: 20px;
}

.item-contents .content-wrapper {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.item-contents .context {
  margin-bottom: 20px;
}

.item-contents .pic img {
  max-width: 100%;
  border-radius: 8px;
}

.item-contents .words {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.item-contents .words .sub_tit {
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
}

.item-contents .words b {
  font-weight: 600;
  color: #444;
}

.item-contents .last {
  margin-bottom: 0;
}
</style>