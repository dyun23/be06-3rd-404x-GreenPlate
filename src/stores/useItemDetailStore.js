import { defineStore } from "pinia";
import axios from "axios";

export const useItemDetailStore = defineStore("itemDetail", {
  state: () => ({
    itemDetail: {
      id: 0,
      name: "",
      price: 0,
      calorie: 0,
      imageUrl: "",
      discountPrice: 0,
      stock: 0,
      contents: "",
      companyName: "",
    },
  }),
  actions: {
    async getItemDetail(id) {
      const response = await axios.get("/api/item/details", {
        params: { id },
      });

      this.itemDetail = response.data.result;

      console.log("store itemDetail:" + this.itemDetail);
      return response.data.result;
    },
  },
});
