// stores/useUserInfoStore.js

import { defineStore } from "pinia";
import axios from "axios";

export const useUserInfoStore = defineStore("userInfoList", {
  state: () => ({
    userInfoList: null,
    name: "",
  }),
  getters: {
    getInfo() {
      return this.userInfoList;
    },
  },
  actions: {
    async getUserInfo() {
      const response = await axios.get("/api/user/details", {
        withCredentials: true,
      });
      this.name = response.data.result.name;
      this.userInfoList = response.data.result;

      return response.data.result;
    },
  },
});
