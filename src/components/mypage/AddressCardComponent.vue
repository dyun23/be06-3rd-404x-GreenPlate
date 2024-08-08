<template>
  <div class="css-jxzkyr enjmmt32">
    <div class="css-1nt6ns3 enjmmt31">
      <label class="css-1xdhyk6 e1dcessg3" for="address-1">
        <input
          id="address-1"
          type="radio"
          name="address"
          class="css-agvwxo e1dcessg2"
          value="15944794"
          checked
        />
        <div class="css-79hxr7"></div>
      </label>
    </div>
    <div data-testid="address-area" class="css-upe1zs e77s2kj4">
      <!-- <div class="css-2n86z e77s2kj1">기본 배송지</div> -->
      <p class="css-12stxlh e77s2kj2">
        [{{ address.zipcode }}] {{ address.address }}
        {{ address.addressDetail }}
      </p>
      <div class="css-1fujs4g e77s2kj3">
        {{ name }} <span class="css-tspkik e77s2kj0"></span>
      </div>
    </div>
    <div data-testid="update-address-button" class="css-d1hkno enjmmt30"></div>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
    address: {
      type: String, // 또는 필요한 타입
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.css-heioij {
  overflow: hidden;
  width: 650px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
}
.css-oc8mjz {
  display: flex;
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
  display: block;
  padding-left: 8px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: rgb(153, 153, 153);
  margin-block-end: 1.4em;
}
.css-1y56l81 {
  display: flex;
  align-items: center;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
}
.css-1y56l81 > svg {
  margin-right: 6px;
}
.css-ehagcz {
  padding: 0px 20px;
}
.css-jxzkyr {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.css-1nt6ns3 {
  flex-basis: 36px;
  display: flex;
  align-items: center;
}
.css-upe1zs {
  flex: 1 1 0%;
}
.css-12stxlh {
  font-size: 16px;
  line-height: 20px;
  color: rgb(51, 51, 51);
  word-break: break-all;
}
.css-k8l2op {
  padding-top: 10px;
  font-weight: 500;
}
.css-k8l2op > span {
  font-size: 12px;
}
.css-z4mca9 {
  color: rgb(95, 0, 128);
  font-size: 14px;
}

.css-79hxr7 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-right: 8px;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + .css-79hxr7 {
  border-color: #5f0080;
  background-color: #5f0080;
}
input[type="radio"]:checked + .css-79hxr7 svg {
  display: block;
}
input[type="radio"]:not(:checked) + .css-79hxr7 svg {
  display: none;
}
svg {
  display: block;
}
button {
  overflow: visible;
  background-color: transparent;
  border: none;
}

/* 숨겨진 라디오 버튼 */
input[type="radio"] {
  display: none;
}

/* 라디오 버튼이 선택된 상태 */
input[type="radio"]:checked + .css-79hxr7 {
  border-color: #5f0080; /* 선택된 경우 테두리 색상 */
  background-color: #5f0080; /* 선택된 경우 배경 색상 */
}

/* 기본 동그라미 스타일 */
.css-79hxr7 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid #ddd; /* 기본 테두리 색상 */
  border-radius: 50%;
  margin-right: 8px;
  transition: background-color 0.3s, border-color 0.3s; /* 부드러운 색상 전환 */
}

/* 체크 표시를 숨기기 위해 사용 */
input[type="radio"]:checked + .css-79hxr7 svg {
  display: block;
}

/* 체크되지 않은 상태의 체크 표시 */
input[type="radio"]:not(:checked) + .css-79hxr7 svg {
  display: none;
}

/* 체크 표시 SVG 기본 스타일 */
svg {
  display: block;
}
</style>
