import { defineStore } from "pinia";
import axios from "axios";

export const useAddressStore = defineStore("address", {
  state: () => ({
    isOpen: false,
    info: null,
  }),
  actions: {
    enable() {
      this.isOpen = true;
      return this.isOpen;
    },
    disable() {
      this.isOpen = false;
      return this.isOpen;
    },
    async getInfo() {
      const response = await axios.get("http://localhost:8080/user/details", {
        withCredentials: true,
      });
      this.info = response;
    },
  },
});
