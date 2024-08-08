import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
  state: () => ({
    isOpen: false,
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
  },
});
