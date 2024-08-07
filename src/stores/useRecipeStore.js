import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipeList", {
  state: () => ({
    recipeList: [],
    totalPages: 0,
  }),
  actions: {
    async getRecipeList(page) {
      if (page >= 1) {
        page = page - 1;
      }
      const response = await axios.get("/api/recipe/list", {
        params: { page },
      });

      this.recipeList = response.data.result.content;
      this.totalPages = response.data.result.totalPages;

      return response.data.result;
    },
  },
});
