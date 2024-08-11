import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    userType: "",
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async login(user, userType) {
      this.userType = userType;
      let url =
        backend + (userType === "company" ? "/company/login" : "/user/login");
      try {
        let response = await axios.post(url, user);
        // 로그인 성공 코드 확인
        if (
          (userType === "company" && response.data.code === 1050) ||
          (userType === "user" && response.data.code === 1070)
        ) {
          this.isLoggedIn = true;
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Login failed:", error);
        return false;
      }
    },
    async logout() {
      try {
        let url =
          backend +
          (this.userType === "company" ? "/company/logout" : "/user/logout");
        const response = await axios.get(url, {
          withCredentials: true,
        });
        console.log("로그아웃 ", response);
        this.isLoggedIn = false;
      } catch (error) {
        console.log("토큰 만료");
      }
      alert("로그아웃 되었습니다");
    },
  },
});
