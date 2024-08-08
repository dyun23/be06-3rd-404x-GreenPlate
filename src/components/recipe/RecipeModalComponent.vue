<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="page-title">
                <h2 class="page-text">상품 선택</h2>
            </div>
            <div class="search-container">
                <input type="text" v-model="searchQuery" placeholder="검색어를 입력하세요" />
                <button @click="searchItems">검색</button>
            </div>
            <div class="item-list-container" v-if="itemList.length">
                <ul>
                    <ModalItemComponent v-for="(item, index) in itemList" :key="index" :item="item"
                        :isChecked="selectedItems.includes(item.id)" @toggle-check="toggleCheck" />
                </ul>
            </div>
            <div v-else>
                <p>검색 결과가 없습니다.</p>
            </div>
            <div class="modal-btn">
                <button @click="confirmSelection" class="btn">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalItemComponent from './ModalItemComponent.vue';

    export default {
        components: {
            ModalItemComponent
        },
        data() {
            return {
                itemList: [],
                searchQuery: '',
                selectedItems: []
            };
        },
        methods: {
            searchItems() {
                if (this.searchQuery.trim() === '') {
                    alert('검색어를 입력하세요');
                    return;
                }
                axios
                    .get(`http://localhost:8080/item/list/${this.searchQuery}`)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.success) {
                            this.itemList = response.data.result || [];
                        } else {
                            this.errorMessage = response.data.message || '상품 데이터를 불러오는 데 실패했습니다.';
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching items:", error);
                        this.errorMessage = '상품 데이터를 불러오는 데 실패했습니다.';
                    });
            },
            toggleCheck(itemId) {
                const index = this.selectedItems.indexOf(itemId);
                if (index === -1) {
                    this.selectedItems.push(itemId);
                } else {
                    this.selectedItems.splice(index, 1);
                }
            },
            confirmSelection() {
                this.$emit('selected-items', this.selectedItems);
                this.$emit('close');
            }
        }
    };
</script>

<style scoped>
    .page-text {
        padding: 20px 0 30px;
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
        text-align: center;
    }

    .modal-wrap {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 400;
    }

    .modal-container {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 80%;
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
    }

    .search-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .search-container input {
        width: 70%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
    }

    .search-container button {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #5f0080;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .item-list-container {
        max-height: 60%;
        overflow-y: auto;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .img-div {
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin-right: 10px;
    }

    .item-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .item-name {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        text-align: center;
    }

    .item-company {
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
        text-align: center;
    }

    .item-price {
        font-size: 14px;
        color: #999;
        text-align: center;
    }

    .original-price {
        text-decoration: line-through;
        margin-right: 5px;
    }

    .discount-price {
        color: #ff0000;
        font-weight: bold;
    }

    .check-btn {
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        cursor: pointer;
        align-self: center;
    }

    .check-icon {
        width: 100%;
        height: 100%;
    }

    .modal-btn {
        text-align: center;
        margin-top: 20px;
    }

    .btn {
        padding: 10px 20px;
        font-size: 16px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
        border-radius: 3px;
        cursor: pointer;
    }

    .btn:hover {
        color: rgb(144, 14, 188);
        border: 1px solid rgb(144, 14, 188);
    }
</style>