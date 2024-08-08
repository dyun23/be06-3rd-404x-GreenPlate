// stores/useUserInfoStore.js

import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserInfoStore = defineStore('userInfoList', {
  state: () => ({
    userInfoList: [],
    name: '',
  }),
  actions: {
    async getUserInfo() {
      try {
        const response = await axios.get('/api/user/details', {
          withCredentials: true,
        });
        console.log('response.data.result:', JSON.stringify(response.data.result, null, 2));
        this.name = response.data.result.name;
        return response.data.result;
      } catch (error) {
        console.error('Failed to fetch user info:', error); // 에러 메시지 수정
      }
    },
  },
});
