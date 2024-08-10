import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        selectedItems: []
    }),
    actions: {
        setItems(items) {
            this.items = items;
        },
        setSelectedItems(selectedItems) {
            this.selectedItems = selectedItems;
        }
    },
    getters: {
        totalCost() {
            return this.items.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
        },
        selectedTotalCost() {
            return this.selectedItems.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
        }
    }
});