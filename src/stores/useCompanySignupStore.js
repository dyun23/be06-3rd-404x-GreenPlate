// stores/useUserSignupStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCompanySignupStore = defineStore('companySignup', {
  state: () => ({
    company: {
        email: '',
        password: '',
        colNum: '',
        name: '',
        address: '',
        telNum: ''
    },
    message: ''
  }),
  actions: {
    async signup(company) {
      // 실제 API 호출을 하는 곳입니다
      try {
        // 예: await axios.post('/signup', { user, userType });
        const response = await axios.post('http://localhost:8080/company/signup', company);
        this.message = response.data.message;
        return true; // 성공
      } catch (error) {
        console.error('CompanySignup error:', error);
        return false; // 실패
      }
    }
  },
});

