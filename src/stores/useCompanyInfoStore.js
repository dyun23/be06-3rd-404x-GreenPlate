

import { defineStore } from 'pinia';
import axios from 'axios';

export const useCompanyInfoStore = defineStore('companyInfoList', {
  state: () => ({
    companyInfoList: [],
    name: '',
  }),
  actions: {
    async getCompanyInfo() {
      try {
        const response = await axios.get('http://localhost:8080/company/details', {
          withCredentials: true,
        });
        console.log('response.data.result:', JSON.stringify(response.data.result, null, 2));
        this.name = response.data.result.name;
        return response.data.result;
      } catch (error) {
        console.error('Failed to fetch company info:', error); // 에러 메시지 수정
      }
    },
  },
});