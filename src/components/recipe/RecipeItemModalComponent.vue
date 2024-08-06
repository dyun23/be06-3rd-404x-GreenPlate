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
        width: 100px;
        height: 30px;
        color: #fff;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5);
        outline: none;
        background: rgb(95, 0, 128);
        border: none;
    }

    .btn:hover {
        background: rgb(144, 14, 188);
    }
</style>