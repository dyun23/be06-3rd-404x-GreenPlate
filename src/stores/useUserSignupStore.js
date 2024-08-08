// stores/useUserSignupStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserSignupStore = defineStore('userSignup', {
  state: () => ({
    user: {
        email: '',
        password: '',
        name: '',
        nickname: '',
        birthday: ''
    },
    message: ''
  }),
  actions: {
    async signup(user) {
      // 실제 API 호출을 하는 곳입니다
      try {
        // 예: await axios.post('/signup', { user, userType });
        const response = await axios.post('/signup', user);
        this.message = response.data.message;
        return true; // 성공
      } catch (error) {
        console.error('Signup error:', error);
        return false; // 실패
      }
    }
  },
});

