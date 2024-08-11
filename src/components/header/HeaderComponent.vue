<template>
  <div>
    <div class="css-t79vuj e15sbxqa2">
      <div class="css-1xfyvd1 eo7pjfk4">
        <a class="css-oyffzd eo7pjfk2">
          <div v-if="!isLoggedIn">
            <router-link to="/login">로그인</router-link>
          </div>
          <!-- 로그인한 경우 -->
          <div v-else>
            <button @click="handleLogout" style="font-size: 12px">
              로그아웃
            </button>
          </div>
        </a>
        <div class="css-1qgm48u eo7pjfk0"></div>
        <div v-if="!isLoggedIn">
          <router-link to="/signup" class="css-xygizb eo7pjfk2">회원가입</router-link>
        </div>
        <div v-else>
          <div class="css-1qolcqm eo7pjfk3">
            <a class="css-oyffzd eo7pjfk2">마이페이지<span class="css-1lrerrk eo4j3y50"></span></a>
            <div class="menu css-1ho29iy ecncdj41">
              <div class="css-12olpw6 ecncdj40">
                <router-link :to="orderPageUrl" class="css-12olpw6 ecncdj40">주문 내역</router-link>
              </div>
              <router-link to="/mypage/address" v-show="isUser" class="css-12olpw6 ecncdj40">배송지 관리</router-link>
              <router-link to="/mypage/keyword" v-show="isUser" class="css-12olpw6 ecncdj40">나의 키워드</router-link>
            </div>
          </div>
        </div>
        <!-- <div class="css-1qgm48u eo7pjfk0"></div> -->
        <!-- <div class="css-1qolcqm eo7pjfk3">
          <a class="css-oyffzd eo7pjfk2"
            >고객센터<span class="css-1lrerrk eo4j3y50"></span
          ></a>
          <div class="menu css-1ho29iy ecncdj41">
            <div class="css-12olpw6 ecncdj40">공지사항</div>
            <div class="css-12olpw6 ecncdj40">자주하는 질문</div>
            <div class="css-12olpw6 ecncdj40">1:1 문의</div>
          </div>
        </div> -->
      </div>
      <div class="css-r7wmjj e15sbxqa3">
        <div class="css-boc80u ekdqe1a1">
          <router-link :to="{ path: '/' }"><img
              src="/image/logo.PNG"
              alt="로고"
              class="css-17mnrrx e1s3pt0j0"
          /></router-link>
          <button class="active css-mxd3pm ekdqe1a0" control-id="ControlID-2">
            <router-link :to="{ path: `/item/list/${currentPage}` }"
            >상품</router-link
            >
          </button>
          <button class="css-mxd3pm ekdqe1a0" control-id="ControlID-3">
            <router-link :to="{ path: `/recipe/list/${currentPage}` }"
            >레시피</router-link
            >
          </button>
        </div>
        <div class="css-pqw0uk e1493ofl4">
          <div class="css-w444a2 e1493ofl1">
            <input
                id="gnb_search"
                placeholder="검색어를 입력해주세요"
                required=""
                class="css-11ntk83 e1493ofl3"
                value=""
                control-id="ControlID-4"
                v-model="searchWord"
            />
            <button
                id="submit"
                aria-label="submit"
                class="css-ywxmlw e1493ofl0"
                control-id="ControlID-5"
                @click="submitSearch"
            ></button>
          </div>
        </div>
        <div v-show="isUser" class="css-pqw0uk e15sbxqa1">
          <div class="css-c4pbxv e15sbxqa0">
            <router-link to="/mypage/address" class="css-14vnom0 e1n3mt0d1"></router-link>
            <!-- <button
              class="css-231fw3 etxxzpc0"
              aria-label="찜하기"
              type="button"
              control-id="ControlID-6"
            ></button> -->
            <div class="css-ff2aah e14oy6dx2">
              <router-link to="/cart"
              ><button
                  class="css-g25h97 e14oy6dx1"
                  control-id="ControlID-7"
              ></button
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="header" class="navibar">
      <div class="navibar-box">
        <div class="css-0 e17w4cfr3">
          <CategoryComponent />
        </div>
        <div class="livecommerce">
          <div class="livecommerce-div" @click="showAlert">
            <span class="livecommerce-title">라이브커머스</span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
import CategoryComponent from "./CategoryComponent.vue";
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchWord: "",
      currentPage: 1,
    };
  },
  components: {
    CategoryComponent,
  },
  computed: {
    ...mapStores(useUserStore),
    isLoggedIn() {
      return this.userStore.isLoggedIn;
    },
    userType() {
      return this.userStore.userType;
    },
    orderPageUrl() {
      return this.userType === "company"
          ? "/company/order"
          : "/mypage/order";
    },
    isUser() {
      return this.userType === "user";
    },
  },
  methods: {
    handleLogout() {
      // 로그아웃 메서드 호출
      this.userStore.logout();

      // 홈 페이지로 리다이렉트
      this.$router.push("/");
    },
    submitSearch() {
      this.$router.push({
        path: "/item/search",
        query: { word: this.searchWord },
      });
    },
    showAlert() {
      alert('준비 중입니다!');
    }
  },
};
</script>

<style scoped>
.css-t79vuj {
  position: relative;
  width: 1050px;
  height: 100px;
  margin: 0px auto;
  letter-spacing: -0.3px;
}

.css-xygizb {
  display: block;
  color: rgb(102, 153, 51);
  cursor: pointer;
}

.css-1qgm48u {
  width: 1px;
  height: 13px;
  margin: 0px 12px;
  background-color: rgb(217, 217, 217);
}

.css-oyffzd {
  display: block;
  cursor: pointer;
}

.css-1qolcqm {
  line-height: 35px;
  position: relative;
}

.css-1lrerrk {
  width: 8px;
  height: 5px;
  background-image: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png);
  background-size: cover;
  background-position: center center;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 1px;
}

.css-1qolcqm:hover .menu {
  display: block;
}

.css-1qolcqm .menu {
  display: none;
}

.css-1ho29iy {
  position: absolute;
  right: 0px;
  top: 34px;
  width: 130px;
  padding: 3px 9px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
}

.css-12olpw6 {
  display: block;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
}

.css-1xfyvd1 {
  position: absolute;
  right: 0px;
  top: 15px;
  z-index: 320;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 12px;
}

.css-r7wmjj {
  height: 100px;
  padding-top: 36px;
}

.css-boc80u {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 63px;
}

.css-17mnrrx {
  flex: 0 0 82px;
  width: 120px;
  height: 60px;
}

.css-mxd3pm.active,
.css-mxd3pm:hover {
  font-weight: 500;
  color: rgb(102, 153, 51);
}

.css-mxd3pm {
  flex-shrink: 0;
  margin-left: 20px;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgb(181, 181, 181);
  cursor: pointer;
}

.css-mxd3pm:not(:last-of-type)::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 14px;
  margin-top: 5px;
  margin-left: 11px;
  background-color: rgb(226, 226, 226);
}

.css-mxd3pm:last-of-type {
  margin-left: 22px;
}

.css-pqw0uk {
  position: relative;
  width: 1050px;
  margin: 0px auto;
}

.css-w444a2 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: absolute;
  left: 325px;
  top: -55px;
  width: 400px;
  height: 48px;
  padding-left: 14px;
  border: 1px solid rgb(102, 153, 51);
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
}

.css-11ntk83 {
  width: 300px;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: -0.33px;
}

.css-ywxmlw {
  position: relative;
  width: 32px;
  height: 32px;
  margin: 10px;
  background: url(https://dayun2024-s3.s3.ap-northeast-2.amazonaws.com/summernote/20240811/d599f0ce-d138-49a7-b1aa-3b8779d6bbba_magnifier.png)
  0px 0px no-repeat;
}

.css-c4pbxv {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  right: -6px;
  top: -49px;
}

.css-14vnom0 {
  width: 36px;
  height: 36px;
  /* margin-right: 20px; */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
  cursor: pointer;
}

.css-231fw3 {
  width: 36px;
  height: 36px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
  50% 50% no-repeat;
}

.css-ff2aah {
  position: relative;
  margin-left: 20px;
}

.css-g25h97 {
  display: block;
  width: 36px;
  height: 36px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
  cursor: pointer;
}

.navibar {
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: rgb(255, 255, 255);
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
  width: 100%;
  z-index: 300;
}

.navibar-box {
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
}

.navibar-menu {
  display: flex;
  margin-left: 30px;
}

.menu-detail {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 150px;
  height: 55px;
  padding-top: 18px;
  line-height: 20px;
  text-align: center;
}

.menu-detail-title {
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  cursor: pointer;
}

.menu-detail-title:hover {
  color: rgb(102, 153, 51);
  border-bottom: 1px solid rgb(102, 153, 51);
}

.livecommerce {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.livecommerce-div {
  height: 32px;
  padding: 6px 16px;
  border-radius: 18px;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(102, 102, 102);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.32px;

  &:hover {
    cursor: pointer;
  }
}

.livecommerce-title {
  font-weight: 500;
  color: rgb(102, 153, 51);
}
</style>
