import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: null,
  }),
  actions: {
    async getSubs(main) {
      const response = await axios.get("/api/category/search", {
        params: { main },
      });

      this.categories = response.data.result;

      return response.data.result;
    },
  },
});
