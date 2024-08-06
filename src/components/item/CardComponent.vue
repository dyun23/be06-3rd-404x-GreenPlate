<template>
  <router-link
    :to="{ path: `/item/list/details/${card.id}` }"
    class="css-product-item-href"
  >
    <div class="css-product-item-box2">
      <div class="css-product-item-box3">
        <div class="css-product-item-box4" style="padding-bottom: 128.514%">
          <div class="css-product-item-box5">
            <span>
              <img
                sizes="100vw"
                srcset="
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg  640w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg  750w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg  828w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg 1080w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg 1200w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg 1920w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg 2048w,
                  https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg 3840w
                "
                src="https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1c4433e5-6404-442b-8dcb-73ddfb3bd86a.jpg"
                decoding="async"
                data-nimg="fill"
                class="css-product-item-img"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="css-product-items-title-box">
      <span class="css-product-items-company-span">
        <span class="css-product-items-company-span2">{{
          card.companyName
        }}</span>
      </span>
      <span class="css-product-items-title-span">{{ card.name }}</span>
      <p class="css-product-items-title-p">{{ card.calorie }}kcal</p>
      <div class="css-product-items-price">
        <div>
          <span class="dimmed-price css-18tpqqq ei5rudb1">
            <span class="price-number">{{ card.price }}</span
            ><span class="won">원</span>
          </span>
        </div>
      </div>
      <!-- <div class="review-count css-review e1c07x482"> -->
      <!-- <span class="css-review-span e1c07x481">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1513_17755" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"
              ></path>
            </mask>
            <path
              fill="#999"
              d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z"
              mask="url(#path-1-inside-1_1513_17755)"
            ></path>
            <circle fill="#999" cx="4.34998" cy="6.17871" r="0.75"></circle>
            <circle fill="#999" cx="6.75" cy="6.17871" r="0.75"></circle>
            <circle fill="#999" cx="9.15002" cy="6.17871" r="0.75"></circle>
          </svg>
        </span> -->
      <!-- <span class="review-number css-l610kl e1c07x480">13</span> -->
      <!-- </div> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {};
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@charset "utf-8";

.css-product-item-img {
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

.span {
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
}

.price-number {
  font-size: 14px;
  font-weight: bold;
}
.css-product-item-href {
  display: flex;
  flex-direction: column;
  min-height: 573px;
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.css-product-item-href > div:first-of-type {
  flex-shrink: 0;
}

.css-product-item-box2 {
  overflow: hidden;
  border-radius: 4px;
}

.css-product-item-box4 {
  position: relative;
  width: 100%;
}

.css-product-item-box5 {
  position: absolute;
  inset: 0px;
}

.css-product-item-img {
  user-select: none;
  -webkit-user-drag: none;
}

.css-product-item-href .button-wrapper {
  width: 100%;
  height: 36px;
  margin-top: 6px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.css-product-item-href .button-wrapper > button {
  height: 36px;
  font-size: 16px;
  line-height: 19px;
}

.css-product-item-button {
  color: rgb(51, 51, 51);
  width: 100%;
  height: 32px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.css-product-item-href .button-wrapper > button > svg {
  margin-right: 4px;
  width: 22px;
  height: 22px;
}

.css-product-item-button > svg {
  pointer-events: none;
}

.css-product-items-title-box {
  padding: 8px 10px 0px 0px;
}

.css-product-items-company-span {
  display: block;
  padding-bottom: 2px;
}

.css-product-items-company-span2 {
  font-size: 14px;
  color: rgb(153, 153, 153);
  line-height: 19px;
  letter-spacing: -0.5px;
}

.css-product-items-title-span {
  max-height: 58px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.css-product-items-title-p {
  padding-top: 4px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  line-height: 18px;
  letter-spacing: normal;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.css-bwx2kz .dimmed-price {
  font-size: 18px;
  font-weight: bold;
}

.css-review {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 8px;
  font-weight: 500;
  font-size: 13px;
  color: rgb(153, 153, 153);
  line-height: 17px;
}

.css-review-span {
  width: 15px;
  height: 15px;
  margin: 1px -1px 0px 0px;
}

.css-l610kl {
  padding-left: 3px;
  font-weight: 400;
}

.css-rdz8z7 {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 36px;
}

.css-1d20dg7:first-of-type {
  border-left: 1px solid rgb(221, 221, 221);
}

.css-1d20dg7 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-top: 1px solid rgb(221, 221, 221);
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  border-image: initial;
  border-left: none;
  cursor: pointer;
}

.css-19yo1fh {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-top: 1px solid rgb(221, 221, 221);
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  border-image: initial;
  border-left: none;
  cursor: pointer;
  background-color: rgb(247, 247, 247);
  color: rgb(95, 0, 128);
}

:not(svg) {
  transform-origin: 0px 0px;
}

a {
  background-color: transparent;
}

a:-webkit-any-link {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

a.css-product-left-category-href {
  background-color: transparent;
  text-decoration: none !important;
  color: inherit !important;
}

*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

img {
  border-style: none;
}
</style>
