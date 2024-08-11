<template>
    <div class="navibar-category" @mouseover="showElements" @mouseleave="hideElements">
        <span class="category-span"></span>
        <span class="category-title">카테고리</span>
        <div class="category" v-show="isHovered">
            <MainCategoryComponent />
        </div>
    </div>
</template>

<script>
    import MainCategoryComponent from './MainCategoryComponent.vue';

    export default {
        name: "CategoryComponent",
        components: {
            MainCategoryComponent
        },
        data() {
            return {
                isHovered: false,
                width1: 249,
                width2: 0,
                hover: 268,
                isHovered2: false,
            }
        },
        methods: {
            showElements() {
                this.isHovered = true;
            },
            hideElements() {
                this.isHovered = false;
            },
            applyStyle() {
                this.isHovered2 = true;
            },
            removeStyle() {
                this.isHovered2 = false;
            }
        },
        computed: {
            divWidth() {
                return this.isHovered2 ? {
                    width: this.width1 + this.hover + 'px'
                } : {
                    width: this.width1 + 'px'
                };
            },
            liWidth() {
                return this.isHovered2 ? {
                    width: this.width2 + this.hover + 'px'
                } : {
                    width: this.width2 + 'px'
                };
            }
        },
    }
</script>

<style scoped>
    .navibar-category:hover {
        cursor: pointer;
    }

    .navibar-category {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;

        &:hover {
            .category {
                display: block;
            }

            .category-title {
                color: rgb(102, 153, 51);
            }
        }
    }

    .navibar-category:hover>span:first-of-type {
        background: url(https://dayun2024-s3.s3.ap-northeast-2.amazonaws.com/summernote/20240811/0ccda3db-0b22-41e7-bdd6-7497e9279a8c_hamburgerG.png) 0px 0px / 25px 25px no-repeat;
    }

    .category-span {
        width: 25px;
        height: 25px;
        margin-right: 14px;
        margin-bottom: 2px;
        background: url(https://dayun2024-s3.s3.ap-northeast-2.amazonaws.com/summernote/20240811/0a10f1cb-7fda-4552-b819-0fa71d08837c_hamburger.png) 0px 0px / 25px 25px no-repeat;
    }

    .category-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.3px;
        color: rgb(51, 51, 51);
    }

    .category {
        max-height: calc(-55px + 95vh);
        min-height: 200px;
        position: absolute;
        display: flex;
        top: 46px;
        padding-top: 10px;
    }

    .category-div {
        position: relative;
        z-index: 321;
        /* width: 517px; */
        width: 249px;
        border: 1px solid rgb(221, 221, 221);
        background-color: rgb(255, 255, 255);
        animation: 0.2s linear 0s 1 normal none running animation-w43n76;
    }

    .category-ul {
        overflow-y: auto;
        width: 247px;
        height: 100%;
        background-color: rgb(255, 255, 255);
        cursor: pointer;

        &:hover {
            .category-list-sub-ul {
                display: block;
            }

            .category-sub-back {
                display: block;
            }
        }
    }

    .category-list {
        padding: 7px 0px 9px 14px;
    }

    .category-list:hover {
        font-weight: 500;
        color: rgb(102, 153, 51);
        background-color: rgb(247, 247, 247);
    }

    .category-list-main {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    .category-list-main-img {
        flex: 0 1 0%;
        width: 24px;
        height: 24px;
    }

    .category-list-main-title {
        flex: 1 1 0%;
        padding: 1px 20px 0px 10px;
        color: rgb(51, 51, 51);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        &:hover {
            font-weight: 500;
            color: rgb(102, 153, 51)
        }
    }

    .category-list-sub-ul {
        border: 1px solid rgb(221, 221, 221);
        border-left: 0px;
        width: 266px;
        height: 100%;
        position: absolute;
        overflow: auto;
        top: -1px;
        left: 249px;
        z-index: 320;
        animation: 0.5s linear 0s 1 normal none running animation-plwpox;
    }

    .category-list-sub-li {
        cursor: pointer;
    }

    .category-list-sub-div {
        padding: 11px 20px 11px 18px;
        display: flex;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        color: rgb(51, 51, 51);
        line-height: 22px;
    }

    .category-list-sub-div :hover>span {
        box-shadow: rgb(102, 153, 51) 0px -1px 0px 0px inset;
        font-weight: 500;
        color: rgb(102, 153, 51);
    }

    .category-list-sub-title {
        line-height: 18px;
    }

    .category-list {
        padding: 7px 0px 9px 14px;
    }

    .category-sub-back {
        height: 100%;
        position: absolute;
        top: 0px;
        left: 247px;
        background-color: rgb(247, 247, 247);
        z-index: -1;
        animation: 0.2s linear 0s 1 normal none running animation-1rae3xd;
    }
</style>