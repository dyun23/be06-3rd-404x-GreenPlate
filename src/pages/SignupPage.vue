<template>
  <div class="container">
    <!-- 버튼을 추가하여 페이지 전환 기능을 구현 -->
    <div class="button-container">
      <button 
        :class="['signup-button', { active: !showCompanySignup }]" 
        @click="toggleSignup(false)"
      >
        User Signup
      </button>
      <button 
        :class="['signup-button', { active: showCompanySignup }]" 
        @click="toggleSignup(true)"
      >
        Company Signup
      </button>
    </div>

    <!-- 조건에 따라 컴포넌트를 렌더링 -->
    <CompanySignupComponent v-if="showCompanySignup" />
    <UserSignupComponent v-else />
  </div>
</template>

<script>
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import UserSignupComponent from "@/components/signup/UserSignupComponent.vue";

export default {
  components: {
    CompanySignupComponent,
    UserSignupComponent,
  },
  name: "SignupPage",
  data() {
    return {
      showCompanySignup: true, // 기본적으로 CompanySignupComponent를 표시
    };
  },
  methods: {
    toggleSignup(isCompanySignup) {
      this.showCompanySignup = isCompanySignup;
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center; /* 버튼과 내용 중앙 정렬 */
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: center; /* 버튼을 수평 중앙에 배치 */
  gap: 10px; /* 버튼 사이의 간격 */
  margin-bottom: 20px; /* 버튼과 컴포넌트 사이의 간격 */
}

.signup-button {
  padding: 10px 20px;
  border: 2px solid rgb(102, 153, 51); /* 버튼 테두리 색상 */
  border-radius: 5px; /* 버튼 모서리 둥글게 */
  background-color: #ffffff; /* 버튼 배경색 */
  color: rgb(102, 153, 51); /* 버튼 텍스트 색상 */
  font-size: 16px; /* 텍스트 크기 */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* 호버 시 색상 전환 애니메이션 */
}

.signup-button.active {
  background-color: rgb(102, 153, 51); /* 클릭된 버튼의 배경색 */
  color: #ffffff; /* 클릭된 버튼의 텍스트 색상 */
}

.signup-button:hover {
  background-color: rgb(102, 153, 51); /* 호버 시 버튼 배경색 */
  color: #ffffff; /* 호버 시 버튼 텍스트 색상 */
}
</style>
