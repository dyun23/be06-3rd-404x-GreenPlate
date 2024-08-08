<template>
    <div class="modal-wrap">
        <div class="modal-container">
            <div class="page-title">
                <h2 class="page-text">상품 선택</h2>
            </div>
            <div class="modal-btn">
                <button @click="closePop()" class="btn">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['modalData'],
        methods: {
            closePop() {
                this.$emit('close');
            }

        }
    }
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
        width: 550px;
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
    }
    .modal-btn {
        text-align: center;
    }

    .btn {
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100px;
        height: 30px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
        font-size: 12px;
        line-height: 28px;
        font-weight: 500;
    }
    .btn:hover {
        color: rgb(144, 14, 188);
        border: 1px solid rgb(144, 14, 188);
    }
</style>