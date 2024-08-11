<template>
    <li class="item">
        <div class="img-div">
                <img :src="item.imageUrl" alt="" class="item-img">
        </div>
        <div class="item-div">
            <div class="item-value">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="item-company">{{ item.companyName }}</div>
                    <div class="item-price">
                        <span class="original-price">{{ item.price }}원</span>
                        <span class="discount-price">{{ item.discountPrice }}원</span>
                    </div>
            </div>
        </div>
        <button class="check-btn" @click="toggleCheck(item.id)">
            <img :src="isChecked ? checkedIcon : uncheckedIcon" alt="check icon" class="check-icon">
        </button>
    </li>
</template>

<script>
export default {
    props: {
        item: Object,
        isChecked: Boolean
    },
    data() {
        return {
            checkedIcon: 'https://dayun2024-s3.s3.ap-northeast-2.amazonaws.com/summernote/20240808/859d26c3-9682-4114-afe6-83fdf40e280f_free-icon-check-mark-5299035.png',
            uncheckedIcon: 'https://dayun2024-s3.s3.ap-northeast-2.amazonaws.com/summernote/20240808/f8959ba7-eb3e-4084-9b00-3957a7b8cc60_free-icon-check-mark-5206035.png'
        };
    },
    methods: {
        toggleCheck(id) {
            this.$emit('toggle-check', id);
        }
    }
};
</script>

<style scoped>
.item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    align-items: center;
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
}

.item-name {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
}

.item-company {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
}

.item-price {
    font-size: 14px;
    color: #999;
}

.original-price {
    text-decoration: line-through;
    margin-right: 5px;
}

.discount-price {
    color: rgb(102, 153, 51);
    font-weight: bold;
}

.check-btn {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    align-self: center;
    margin-right: 20px;
}

.check-icon {
    width: 100%;
    height: 100%;
}
</style>