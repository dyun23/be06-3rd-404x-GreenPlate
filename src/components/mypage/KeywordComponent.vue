<template>
  <div class="css-heioij eug5r8l1">
    <div class="css-oc8mjz ed9qr673">
      <div class="css-eq7f8j ed9qr672">
        <h2 class="css-1lmd4kz ed9qr671">나의 키워드</h2>
        <span class="css-1vbzf1d ed9qr670"
          >나만의 취향이 담긴 프로필을 만들어 다양한 상품을 추천
          받아보세요!</span
        >
      </div>
    </div>
    <div class="css-ehagcz eug5r8l0">
      <div class="css-0 e1we1ngq0"></div>
      <button class="css-astzrz e11u9nz86">
        <img
          alt=""
          class="css-13y1qq5 e11u9nz85"
          src="https://gyu592-s3.s3.ap-northeast-2.amazonaws.com/food.png"
        />
        <div summary="keywordText" class="css-gef8uv e11u9nz84">키워드</div>
        <div class="css-vi8iv0 e11u9nz83">{{ keyword }}</div>
        <span class="css-175lw4b e11u9nz82"></span>
      </button>
      <div class="css-1cubl1w e11u9nz80">
        <div class="css-1pm162i eoi2cde1">
          <div class="css-1qcpyna ekkddii2">
            <div class="css-k5ec14 ekkddii1">
              요즘 관심이 있는 키워드는 무엇인가요?
            </div>
            <div class="css-a61lvk ekkddii0">
              관심있는 키워드를 선택해주세요.
            </div>
            <div class="css-17t6233 e1tuvmsf4">
              <label
                v-for="(keyword, index) in allKeywords"
                :key="index"
                for="S0001SEG0026"
                :class="{
                  'css-dtskoq': keywords.includes(keyword),
                  'css-143so60': keywords.includes(keyword),
                  'css-2n37t2': !keywords.includes(keyword), // 기본 스타일
                }"
              >
                <div
                  @click="selectKeyword(keyword)"
                  class="css-1xdhyk6 e1tuvmsf1"
                >
                  {{ keyword }}
                </div>
                <input
                  type="checkbox"
                  id="S0001SEG0026"
                  name="S0001C0005"
                  class="css-1pes2r6 e1tuvmsf3"
                  value="S0001SEG0026"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="css-f3896y e10azfkl0">
        <button
          class="css-1qirdbn e4nu7ef3"
          type="button"
          @click="submitKeywords"
        >
          <span class="css-nytqmg e4nu7ef1">완료</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      allKeywords: [],
      keywords: [],
      keyword: "",
    };
  },
  mounted() {
    this.getKeywords();
    this.getUserKeywords();
  },
  methods: {
    async getKeywords() {
      const response = await axios.get("http://localhost:8080/keyword/list");
      this.allKeywords = response.data;
    },
    async getUserKeywords() {
      const response = await axios.get(
        "http://localhost:8080/user/keyword/list",
        {
          withCredentials: true,
        }
      );
      this.keywords = response.data.result;
      this.makeKeywordText();
    },
    makeKeywordText() {
      let text = "";
      for (const keyword of this.keywords) {
        text += keyword + "/";
      }

      if (text.endsWith("/")) {
        text = text.slice(0, -1);
      }
      this.keyword = text;
      console.log(this.keyword);
    },
    selectKeyword(keyword) {
      const index = this.keywords.indexOf(keyword);
      if (index > -1) {
        this.keywords.splice(index, 1);
      } else {
        this.keywords.push(keyword);
      }
      this.makeKeywordText();
    },
    async submitKeywords() {
      const response = await axios.get("http://localhost:8080/user/create", {
        params: {
          keyword: this.keyword,
        },
        withCredentials: true,
      });
      if (response.data.success === true) {
        alert("저장되었습니다.");
      }
      console.log(response);
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

.css-ehagcz {
  padding: 0px 20px;
}

.css-mba6a6 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 48px;
  margin-top: 20px;
}

.css-p3gmrd {
  flex-shrink: 0;
  width: 205px;
  font-weight: 500;
}

.css-del1n2 {
  position: relative;
  width: 402px;
}

.css-1araon7 {
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-bottom: 0px;
}

.css-176lya2 {
  position: relative;
  height: 48px;
}

.css-u52dqk {
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
}

.css-wv25gp {
  position: absolute;
  top: 0px;
  right: 14px;
  line-height: 46px;
  font-size: 14px;
  color: rgb(37, 124, 216);
}

.css-m15hk5 {
  display: flex;
  height: 48px;
  margin-top: 42px;
  align-items: flex-start;
}

.css-p3gmrd {
  flex-shrink: 0;
  width: 205px;
  font-weight: 500;
}

.css-del1n2 {
  position: relative;
  width: 402px;
}

.css-1yr1i3a {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-1yr1i3a > label {
  -webkit-box-pack: center;
  justify-content: center;
  width: 197px;
  height: 48px;
  border-radius: 4px;
  text-align: center;
}

.css-1iuqtto {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 0px 9px;
  border: 1px solid rgb(221, 221, 221);
}

.css-1pes2r6 {
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0px, 0px, 0px, 0px);
}

.css-4x1a08 {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 0px 9px;
  color: rgb(102, 153, 51);
  border: 1px solid rgb(102, 153, 51);
}

.css-astzrz {
  width: 100%;
  display: grid;
  grid-template-columns: 108px 1fr 85px;
  place-items: center;
  -webkit-box-align: center;
  border: 1px solid rgb(238, 238, 238);
  padding: 30px 0px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 4px 10px 0px;
}

.css-13y1qq5 {
  grid-area: 1 / 1 / 3 / 2;
  width: 46px;
  height: 46px;
  margin: 0px 26px 0px 36px;
}

.css-gef8uv {
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  text-align: left;
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
}

.css-vi8iv0 {
  grid-area: 2 / 2 / 3 / 3;
  text-align: left;
  width: 100%;
  color: rgb(102, 153, 51);
}

.css-8tmcoy {
  grid-area: 1 / 3 / 3 / 3;
  display: block;
  right: 50px;
  width: 10px;
  height: 20px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg1MHY1MEgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI3IDMyLjA3MUwxOS45MjkgMjUgMjcgMTcuOTI5Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=)
    47% 50% / 50px 50px no-repeat;
  transform: rotate(90deg);
  transition: all 0.2s ease 0s;
}

.css-i4jerl {
  background-color: rgb(250, 250, 250);
  border-width: 0px 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  display: block;
}

.css-1pm162i {
  padding: 44px 36px 60px;
}

.css-1qcpyna + div {
  margin-top: 50px;
}

.css-k5ec14 {
  font-size: 20px;
  font-weight: 700;
}

.css-a61lvk {
  margin: 10px 0px 30px;
  color: rgb(153, 153, 153);
}

.css-17t6233 {
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  display: flex;
  flex-wrap: wrap;
}

.css-143so60 {
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: calc(25% - 10px);
  line-height: 1.25;
  border-radius: 4px;
  border: 1px solid rgb(102, 153, 51);
  font-weight: 500;
}

.css-143so60 > div {
  padding: 15px 10px;
}

.css-dtskoq {
  color: rgb(102, 153, 51);
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

.css-2n37t2 {
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: calc(25% - 10px);
  line-height: 1.25;
  border-radius: 4px;
}

.css-2n37t2 > div {
  padding: 15px 10px;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

.css-1pes2r6 {
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0px, 0px, 0px, 0px);
}

.css-1pes2r6 {
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0px, 0px, 0px, 0px);
}

.css-1yr1i3a > label span {
  margin: 0px;
}

.css-mgd87h {
  position: relative;
  font-size: 16px;
  margin-left: 12px;
}

.css-1qcpyna + div {
  margin-top: 50px;
}

.css-juyrza {
  width: 104px;
  margin: 50px auto 0px;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .css-vjcj3a {
    padding-bottom: calc(8px + env(safe-area-inset-bottom));
  }
}

.css-vjcj3a {
  left: 0px;
  bottom: 0px;
  width: 100%;
  display: flex;
  z-index: 10;
  position: relative;
  background: none;
  padding: 0px !important;
}

.css-59oqq1 {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  height: 36px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
}

.css-59oqq1 span {
  font-size: 13px;
}

.css-f3896y {
  width: 260px;
  margin: 0px auto 20px;
}

@media (min-width: 1050px) {
  .css-1qirdbn {
    height: 56px;
  }
}

.css-1qirdbn {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 52px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(102, 153, 51);
  border: 0px none;
}

.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}

.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}
</style>
