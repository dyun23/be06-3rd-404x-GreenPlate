<template>
  <div class="login-container">
    <div class="css-login">로그인</div>
    <div class="css-login-container">
      <form @submit.prevent="login">
        <div class="css-login-box">
          <div class="css-login-box-type">
            <div class="css-login-box-type-item"></div>
            <label class="css-login-box-type-label">
              <input type="radio" name="user-type" value="user" class="css-login-box-type-input" v-model="userType"
                checked />
              유저
            </label>
            <div class="css-login-box-type-item"></div>
            <label class="css-login-box-type-label">
              <input type="radio" name="user-type" value="company" class="css-login-box-type-input"
                v-model="userType" />
              사업자
            </label>
            <div class="css-login-box-type-item"></div>
          </div>
          <div class="css-login-box-id">
            <div class="css-login-box-id-detail">
              <input data-testid="input-box" name="id" placeholder="아이디를 입력해주세요" type="text"
                class="input-login-box-id-detail" value="" v-model="user.email" />
            </div>
          </div>
          <div class="css-login-box-password">
            <div class="css-login-box-password-detail">
              <input data-testid="input-box" name="password" placeholder="비밀번호를 입력해주세요" type="password"
                autocomplete="off" class="input-login-box-password-detail" value="" v-model="user.password" />
            </div>
          </div>
        </div>
        <div class="css-find-box">
          <a class="css-find-box-id">아이디 찾기</a>
          <span class="css-find-box-span"></span>
          <a class="css-find-box-password">비밀번호 찾기</a>
        </div>
        <div class="css-button">
          <button class="css-login-button" type="submit" height="54" radius="3">
            <span class="css-login-span">로그인</span>
          </button>
          <button class="css-signup-button" type="button" height="54" radius="3">
            <span class="css-signup-span">회원가입</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    mapStores
  } from "pinia";
  import {
    useUserStore
  } from "@/stores/useUserStore";

  export default {
    components: {},
    name: "LoginPage",
    data() {
      return {
        user: {
          email: null,
          password: null,
        },
        userType: "user",
      };
    },
    computed: {
      ...mapStores(useUserStore),
    },
    methods: {
      async login() {
        if (!this.user.email || !this.user.password) {
          alert("이메일과 비밀번호를 입력해 주세요.");
          return;
        }

        const result = await this.userStore.login(this.user, this.userType);
        if (result) {
          this.$router.push("/");
        } else {
          alert("입력한 정보가 틀렸거나 없는 회원 정보입니다.");
        }
      },
    },
  };
</script>

<style scoped>
  .login-container {
    min-width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: #fff;
  }

  .css-login {
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .css-login-container {
    width: 340px;
    margin: 0 auto;
    letter-spacing: -0.6px;
  }

  .css-login-box {
    margin-top: 30px;
  }

  .css-login-box-type {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .css-login-box-type-item {
    flex-grow: 1;
  }

  .css-login-box-type-label {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    margin: 0 10px;
  }

  .css-login-box-type-input {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: 0;
  }

  .css-login-box-type-input:checked {
    background-color: rgb(102, 153, 51);
    border-color: rgb(102, 153, 51);
  }

  .css-login-box-id:first-of-type {
    margin-bottom: 5px;
  }

  .css-login-box-id {
    padding-bottom: 12px;
  }

  .css-login-box-id input {
    height: 54px;
    font-size: 14px;
  }

  .css-login-box-id-detail {
    position: relative;
    height: 48px;
  }

  .input-login-box-id-detail {
    width: 100%;
    height: 46px;
    padding: 0 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    outline: 0;
    box-sizing: border-box;
  }

  .css-login-box-password {
    padding-bottom: 12px;
  }

  .css-login-box-password-detail {
    position: relative;
    height: 48px;
  }

  .css-login-box-password input {
    height: 54px;
    font-size: 14px;
  }

  .input-login-box-password-detail {
    width: 100%;
    height: 46px;
    padding: 0 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    outline: 0;
    box-sizing: border-box;
  }

  .css-find-box {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 13px;
  }

  .css-find-box-id {
    color: #333;
    cursor: pointer;
  }

  .css-find-box-span {
    width: 1px;
    height: 10px;
    margin: 3px 6px 0;
    background-color: #333;
  }

  .css-find-box-password {
    color: #333;
    cursor: pointer;
  }

  .css-button {
    margin-top: 28px;
  }

  .css-login-button {
    display: block;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    color: #fff;
    background-color: rgb(102, 153, 51);
    border: 0 none;
  }

  .css-login-span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }

  .css-button button:last-of-type {
    margin-top: 10px;
  }

  .css-signup-button {
    display: block;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    color: rgb(102, 153, 51);
    background-color: #fff;
    border: 1px solid rgb(102, 153, 51);
  }

  .css-signup-span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }

  a {
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
  }

  *,
  :after,
  :before {
    padding: 0;
  }

  div {
    display: block;
    unicode-bidi: isolate;
  }

  body,
  button,
  input {
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

  button,
  html,
  input {
    font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
  }

  *,
  :after,
  :before {
    padding: 0;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
  }

  *,
  :after,
  :before {
    padding: 0;
  }
</style>