<template>
  <div>
    <form @submit.prevent="signup">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div class="css-pculus e1ovi4141">
        <div class="css-o5dw7d e1ovi4140">회원가입</div>
        <div class="css-mhmtvt e15so55l1">
          <div class="css-rb0i47 e1yyjjij1">
            <span class="css-qq9ke6 e1yyjjij0">*</span> 필수입력사항
          </div>
          <div class="css-y8aj3r eo6ykj40">
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  이메일<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="email"
                      name="email"
                      placeholder="이메일을 입력해주세요"
                      type="text"
                      v-model="form.email"
                      required
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>
              </div>
              <div class="css-1w0ksfz e744wfw2">
                <button class="css-ufulao e4nu7ef3" type="button">
                  <span class="css-nytqmg e4nu7ef1">중복확인</span>
                </button>
              </div>
            </div>
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  비밀번호<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="password"
                      name="password"
                      placeholder="비밀번호를 입력해주세요"
                      type="password"
                      v-model="form.password"
                      autocomplete="off"
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>

              </div>
              <div class="css-1w0ksfz e744wfw2"></div>
            </div>
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  회사명<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="name"
                      name="name"
                      placeholder="이름을 입력해 주세요"
                      type="text"
                      v-model="form.name"
                      required
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>
              </div>
              <div class="css-1w0ksfz e744wfw2"></div>
            </div>
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  주소<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="address"
                      name="address"
                      placeholder="주소를 입력해 주세요"
                      type="text"
                      v-model="form.address"
                      required
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>
              </div>
              <div class="css-1w0ksfz e744wfw2"></div>
            </div>
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  회사 전화 번호<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="telNum"
                      name="telNum"
                      placeholder="회사전화번호를 입력해 주세요"
                      type="text"
                      v-model="form.telNum"
                      required
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>
              </div>
              <div class="css-1w0ksfz e744wfw2"></div>
            </div>
            <div class="css-1pjgd36 e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  회사 번호<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              <div class="css-82a6rk e744wfw3">
                <div class="css-jmalg e1uzxhvi6">
                  <div class="css-176lya2 e1uzxhvi3">
                    <input
                      data-testid="input-box"
                      id="conNumConfirm"
                      name="conNumConfirm"
                      placeholder="회사 번호를 입력해주세요"
                      type="text"
                      v-model="form.comNum"
                      autocomplete="off"
                      class="css-u52dqk e1uzxhvi2"
                    />
                  </div>
                </div>
              </div>
              <div class="css-1w0ksfz e744wfw2"></div>
            </div>
          </div>
          <div class="css-1eo0fey e1j7jtti0"></div>
          <div class="css-y8aj3r e1k9oeg10">
            <div class="css-2yzr8b e744wfw6">
              <div class="css-1y8737n e744wfw5">
                <label class="css-1obgjqh e744wfw4">
                  이용약관동의<span class="css-qq9ke6 e744wfw0">*</span>
                </label>
              </div>
              
            </div>
          </div>

          <div class="checkbox-section">
            
            <div class="checkbox-item">
              <label class="css-msja7w e1dcessg3" for="TermsAgreeAll">
                <input
                  id="TermsAgreeAll"
                  type="checkbox"
                  class="css-agvwxo e1dcessg2"
                  v-model="termsAgreeAll"
                  @change="toggleAllCheckboxes"
                />
                <div class="css-79hxr7 e1dcessg1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                      :stroke="termsAgreeAll ? '#5f0080' : '#ddd'"
                      :fill="termsAgreeAll ? '#5f0080' : '#fff'"
                    ></path>
                    <path
                      d="M7 12.6667L10.3846 16L18 8.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span>전체 동의합니다.</span>
              </label>
            </div>
            <div class="checkbox-item">
              <label class="css-msja7w e1dcessg3" for="RequiredTermsCondition">
                <input
                  id="RequiredTermsCondition"
                  type="checkbox"
                  class="css-agvwxo e1dcessg2"
                  v-model="requiredTermsCondition"
                  @change="checkAllAgree"
                />
                <div class="css-79hxr7 e1dcessg1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                      :stroke="requiredTermsCondition ? '#5f0080' : '#ddd'"
                      :fill="requiredTermsCondition ? '#5f0080' : '#fff'"
                    ></path>
                    <path
                      d="M7 12.6667L10.3846 16L18 8.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span>이용약관 동의</span>
              </label>
            </div>
            <div class="checkbox-item">
              <label class="css-msja7w e1dcessg3" for="RequiredPrivacyPolicy">
                <input
                  id="RequiredPrivacyPolicy"
                  type="checkbox"
                  class="css-agvwxo e1dcessg2"
                  v-model="requiredPrivacyPolicy"
                  @change="checkAllAgree"
                />
                <div class="css-79hxr7 e1dcessg1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                      :stroke="requiredPrivacyPolicy ? '#5f0080' : '#ddd'"
                      :fill="requiredPrivacyPolicy ? '#5f0080' : '#fff'"
                    ></path>
                    <path
                      d="M7 12.6667L10.3846 16L18 8.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span>개인정보처리방침 동의</span>
              </label>
            </div>
          </div>
          <div class="css-1e59shx e15so55l2">
            <button
              type="submit"
              class="css-1uyc7w1 e1y20peb0"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="isPopupVisible" class="message-popup">
      <div class="message-content">
        <p>{{ message }}</p>
        <button @click="closePopup">
          <router-link to="/login">Close</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CompanySignupPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
        comNum: "",
        name: "",
        address: "",
        telNum: ""
      },
      termsAgreeAll: false,
      requiredTermsCondition: false,
      requiredPrivacyPolicy: false,
      isPopupVisible: false, // 팝업 표시 여부
      message: "",

    };
  },
  methods: {
    toggleAllCheckboxes() {
      const isChecked = this.termsAgreeAll;
      this.requiredTermsCondition = isChecked;
      this.requiredPrivacyPolicy = isChecked;
    },
    checkAllAgree() {
      this.termsAgreeAll = this.requiredTermsCondition && this.requiredPrivacyPolicy;
    }, 
    validateEmail(email){
      // 이메일 형식이 @gmial.com 으로 끝나는지 확인
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email) && email.endsWith('@gmail.com');
    },
    validatePassword(password) {
      // 비밀번호 길이 검사
      return password.length >= 8 && password.length <= 25;
    },
    async signup() {
      if (this.requiredTermsCondition && this.requiredPrivacyPolicy) {
        if (this.validateEmail(this.form.email)) {
          if (this.validatePassword(this.form.password)) {
            try {
              await axios.post('http://localhost:8080/company/signup', this.form, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              alert('회원가입이 성공했습니다');
              
            } catch (error) {
              console.error('CompanySignup error:', error);
              alert('회원가입 중 오류가 발생했습니다. 다시 시도해 주세요');
            }
          } else {
              alert('비밀번호는 8글자 이상 25글자 이하로 입력해 주세요'); // 비밀번호 길이 오류 메시지
              this.passwordError = true;
                
            } 
          } else {
              alert(this.popupMessage = '이메일 형식으로 입력해주세요 (예: example@gmail.com)') // 이메일 형식 오류 시 팝업 표시
              this.emailError = true;
              this.isPopupVisible = false;
            } 
          } else {
            alert('필수 약관에 동의하셔야 합니다.');
            this.isPopupVisible = false; // 약관 동의 오류 시 팝업 표시
      }
    }, 
    closePopup() {
      this.isPopupVisible = false;
    }
  }
};

</script>
<style scoped>
.css-pculus {
    min-width: 1050px;
    margin-top: 50px;
    margin-bottom: 60px;
    background-color: #fff;
}
.css-o5dw7d {
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
    color: #333;
}
.css-mhmtvt {
    width: 640px;
    margin: 0px auto;
}
.css-rb0i47 {
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(51, 51, 51);
    font-size: 12px;
    color: rgb(102, 102, 102);
    line-height: 17px;
    text-align: right;
}
.css-qq9ke6 {
    color: rgb(238, 106, 123);
}
.css-y8aj3r {
    padding: 0px;
}
.css-1pjgd36 {
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;
}
.css-1y8737n {
    width: 139px;
    padding-top: 12px;
}
.css-1obgjqh {
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
}
.css-82a6rk {
    flex: 1 1 0%;
}
.css-jmalg {
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
.css-y8aj3r {
    padding: 0px;
}
.css-2yzr8b {
    display: inline-flex;
    width: 100%;
    padding: 10px 0px 10px 20px;
}
.css-1y8737n {
    width: 139px;
    padding-top: 12px;
}
.css-1obgjqh {
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
}
.css-82a6rk {
    flex: 1 1 0%;
}
.css-ov2xfu:first-of-type {
    align-items: flex-start;
    flex-direction: column;
    padding-top: 12px;
}

.css-ov2xfu {
    display: flex;
    padding: 8px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.css-msja7w {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    line-height: normal;
    color: rgb(51, 51, 51);
    padding: 0px;
    font-weight: 500;
    font-size: 18px;
}
.css-agvwxo {
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
}
.css-79hxr7 {
    margin-right: 12px;
}
.css-79hxr7 svg {
    vertical-align: middle;
}
svg:not(:root) {
    overflow: hidden;
}
.css-1pjgd36 {
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;
}
.css-82a6rk {
    flex: 1 1 0%;
}
.css-18n8lnw {
    height: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
    padding: 0px 15px;
}
.css-1dkwuq4 {
    padding-bottom: 0px;
}
.css-xsmgyi {
    position: relative;
    height: 40px;
}
.css-1dkwuq4 input {
    text-align: center;
    font-size: 14px;
    border: none;
}
.css-151eme7 {
    width: 100%;
    height: 40px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
}
.css-5lnvt6 {
    height: 100%;
}
.css-5lnvt6::after {
    content: "/";
    font-size: 14px;
    color: rgb(204, 204, 204);
    text-align: center;
    line-height: 40px;
}
.css-1eo0fey {
    padding: 10px 0px;
    border-bottom: 1px solid rgb(51, 51, 51);
}
.css-y8aj3r {
    padding: 0px;
}
.css-2yzr8b {
    display: inline-flex;
    width: 100%;
    padding: 10px 0px 10px 20px;
}
.css-1y8737n {
    width: 139px;
    padding-top: 12px;
}
.css-1obgjqh {
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
}
.css-82a6rk {
    flex: 1 1 0%;
}
.css-ov2xfu:first-of-type {
    align-items: flex-start;
    flex-direction: column;
    padding-top: 12px;
}
.css-ov2xfu {
    display: flex;
    padding: 8px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.css-msja7w {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    line-height: normal;
    color: rgb(51, 51, 51);
    padding: 0px;
    font-weight: 500;
    font-size: 18px;
}
.css-agvwxo {
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
}
.css-79hxr7 {
    margin-right: 12px;
}
.css-79hxr7 svg {
    vertical-align: middle;
}
svg:not(:root) {
    overflow: hidden;
}
.css-nygcgj {
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding-top: 4px;
    padding-left: 36px;
}
.css-64z8en {
    padding-left: 5px;
    color: rgb(153, 153, 153);
    word-break: keep-all;
}
.css-ud3rkg {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    border-top: 1px solid rgb(247, 247, 247);
    padding: 40px 0px;
}
.css-18m884r {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 240px;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
}
.css-nytqmg {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
}
.css-1w0ksfz {
    width: 120px;
    margin-left: 8px;
}
.css-ufulao:disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
}
.css-1w0ksfz > button {
    height: 44px;
    border-radius: 3px;
}
.css-1w0ksfz > button > span {
    font-weight: 500;
    font-size: 14px;
}
.css-nytqmg {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
}
.css-1schgvv {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
}
.css-1schgvv > span {
    font-size: 14px;
    font-weight: 500;
}
.css-nytqmg {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
}
.css-1m3kac1 {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    vertical-align: middle;
}
.css-1m3kac1 {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    vertical-align: middle;
}
.css-ufulao {
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 52px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
}
.css-nytqmg {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}
.css-1w0ksfz > button[data-v-37b9581f] {
    height: 44px;
    border-radius: 3px;
}
.message-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 중앙에 위치 */
  background-color: #ffffff; /* 배경색 흰색 */
  color: #333; /* 텍스트 색상 */
  padding: 20px;
  border: 2px solid #5f0080; /* 보라색 테두리 */
  border-radius: 8px; /* 테두리 둥글게 */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensure popup is on top */
  width: 400px; /* 가로 길이 */
  min-height: 200px; /* 세로 길이 늘리기 */
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: space-between; /* 공간을 적절히 나누어줍니다 */
}

.message-content {
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  flex: 1; /* 메시지 부분이 남는 공간을 차지하도록 설정 */
}

.message-popup p {
  margin: 0 0 30px 0; /* 메시지 아래쪽 마진 추가 */
}

.message-popup button:hover {
  background-color: #5a2d8c; /* 호버 시 색상 변경 */
}
.css-agvwxo {
  position: relative;
  cursor: pointer;
}

.css-79hxr7 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.css-1obgjqh {
  font-size: 14px;
  font-weight: 400;
}

.css-qq9ke6 {
  color: red;
}

.css-82a6rk {
  display: flex;
  align-items: center;
}

.css-mhmtvt {
  margin-bottom: 20px;
}

.css-y8aj3r {
  margin-bottom: 20px;
}

.css-2yzr8b {
  margin-bottom: 10px;
}

.css-1y8737n {
  margin-bottom: 5px;
}

.css-ov2xfu {
  margin-bottom: 10px;
}

.css-msja7w {
  font-size: 14px;
  font-weight: 400;
}

.css-5lnvt6 {
  margin-right: 10px;
}

.css-1w0ksfz {
  display: flex;
  justify-content: flex-end;
}

.css-1e59shx {
  margin-top: 20px;
}

.css-pculus, .css-mhmtvt, .css-rb0i47, .css-1eo0fey {
  font-size: 16px;
}

.css-u52dqk {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
}

.css-jmalg {
  display: flex;
  align-items: center;
}

.css-176lya2 {
  width: 100%;
}

.css-151eme7 {
  width: 100%;
}

.css-xsmgyi {
  margin-right: 5px;
}

.css-1uyc7w1 {
  background-color: #5f0080;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.css-1uyc7w1:hover {
  background-color: #4a0075;
}
/* 입력 상자들에 고정 너비 설정 */
.css-u52dqk, .css-151eme7 {
  width: 100%; /* 전체 너비로 설정하여 부모 컨테이너에 맞춰서 너비를 조정 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 조정 */
}

/* 입력 상자의 고정 너비 설정 예시 */
input[type="text"], input[type="password"] {
  width: 320px; /* 원하는 너비 값으로 설정 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 조정 */
}
.checkbox-section {
  display: flex;
  flex-direction: column;
  gap: 10px; /* 체크박스들 간의 간격 */
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 10px; /* 체크박스와 레이블 간의 간격 */
}

.css-agvwxo {
  margin: 0;
}
.checkbox-section {
  display: flex;
  flex-direction: column;
}

.checkbox-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.checkbox-item label {
  display: flex;
  align-items: center;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 8px;
}

.css-pculus, .css-o5dw7d, .css-mhmtvt, .css-rb0i47, .css-y8aj3r, .css-1eo0fey, .css-1e59shx {
  /* 기존 CSS 클래스들이 있는 부분은 그대로 유지 */
}

.css-1pjgd36, .css-1y8737n, .css-82a6rk, .css-jmalg, .css-176lya2, .css-u52dqk, .css-1w0ksfz, .css-ov2xfu, .css-msja7w, .css-79hxr7 {
  /* 기존 CSS 클래스들이 있는 부분은 그대로 유지 */
}
/* 회원가입 버튼 스타일 수정 */
.css-1e59shx {
  text-align: center;
}

.css-1uyc7w1 {
  display: inline-block;
  padding: 14px 80px; /* 버튼의 상하/좌우 패딩 조정 */
  font-size: 18px; /* 버튼 텍스트 크기 조정 */
  line-height: 1.5; /* 텍스트 줄 높이 조정 */
  border-radius: 4px; /* 버튼의 모서리 둥글기 조정 */
  background-color: #5f0080; /* 버튼 배경색 조정 */
  color: #ffffff; /* 버튼 텍스트 색상 조정 */
  border: none; /* 버튼 테두리 제거 */
  cursor: pointer; /* 버튼 클릭 시 커서 스타일 조정 */
  transition: background-color 0.3s ease; /* 버튼 배경색 변경에 애니메이션 추가 */
}

.css-1uyc7w1:hover {
  background-color: #3e0060; /* 버튼 호버 시 배경색 조정 */
}

.message-popup button {
  background-color: #5f0080; /* 버튼 배경색 보라색 */
  color: #fff;
  border: none;
  padding: 10px 20px; /* 패딩 증가 */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 텍스트 크기 증가 */
  margin: 0; /* 버튼과 메시지 사이의 여백 제거 */
}
.message-popup a {
  color: #fff; /* 메시지 아래쪽 마진 추가 */
}
</style>