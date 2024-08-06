import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async login(user, userType) {
      let url =
        backend + (userType === "company" ? "/company/login" : "/user/login");
      console.log(user);
      console.log(userType);
      try {
        let response = await axios.post(url, user);
        console.log(user);
        console.log(userType);

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
    logout() {
      this.isLoggedIn = false;
    },
  },
});
