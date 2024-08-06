<template>
    <div class="page-title">
        <h2 class="page-text">레시피 등록</h2>
    </div>
    <div class="container">
        <div class="div">
            <label class="title">레시피 제목</label>
            <input v-model="recipe.title" name="title" type="text" class="form-text" id="exampleFormControlInput1"
                placeholder="제목을 입력해주세요">
        </div>
        <div class="div">
            <label class="title">대표 이미지</label><br>
            <input type="file" name="image" @change="onFileChange">
        </div>
        <div class="div">
            <label class="title">본문</label>
            <textarea name="contents" id="summernote"></textarea>
        </div>
        <div class="div">
            <label class="title">상품 목록</label><br>
            <button @click="changePopState()" class="btn">상품 불러오기</button>
            <ModalComponent v-if="popState" @close="changePopState()" v-bind:modalData="this.modalData" />
        </div>
        <div class="div">
            <fieldset>
                <legend style="margin: 0.4rem; font-size: 18px;">키워드를 선택해주세요:</legend>
                <div class="keywords-container">
                    <div v-for="(keyword, index) in keywordList" :key="index" class="keyword-item">
                        <input type="checkbox" class="keyword" :name="keyword" :id="keyword" :value="keyword"
                            v-model="selectedKeywords" />
                        <label class="keyword" :for="keyword">{{ keyword }}</label>
                    </div>
                </div>
            </fieldset>
        </div>
        <div style="text-align: center;">
            <button @click="send" class="btn">저장</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import ModalComponent from './RecipeItemModalComponent.vue';

    export default {
        components: {
            ModalComponent
        },
        methods: {
            changePopState() {
                this.popState = !this.popState;
            },
            onFileChange(event) {
                this.image = event.target.files[0];
            },
            async send() {
                console.log(window.$('#summernote').summernote('code'));
                this.recipe.contents = window.$('#summernote').summernote('code');
                this.recipe.keywordList = this.selectedKeywords;
                const formData = new FormData();
                const jsonBlob = new Blob([JSON.stringify(this.recipe)], {
                    type: 'application/json'
                })
                console.log(this.recipe, this.image)
                formData.append('request', jsonBlob);
                formData.append('file', this.image);
                await axios.post("http://localhost:8080/recipe/create", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
        },
        data() {
            return {
                popState: false,
                keywordList: [],
                selectedKeywords: [],
                image: null,
                recipe: {
                    title: "",
                    contents: "",
                    itemList: [1],
                    keywordList: []
                }
            }
        },
        async mounted() {
            try {
                const response = await axios.get("http://localhost:8080/keyword/list");
                this.keywordList = response.data;
            } catch (error) {
                console.error("키워드 불러오기 오류 :", error);
            }
            this.$loadScript("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js").then(
                () => {
                    window.$('#summernote').summernote({
                        placeholder: '레시피를 입력해주세요',
                        tabsize: 2,
                        height: 500,
                        toolbar: [
                            ['insert', ['picture', 'link']],
                            ['color', ['color']],
                            ['font', ['bold', 'underline', 'clear']],
                            ['para', ['ul', 'ol', 'paragraph']]
                        ],
                        callbacks: {
                            onImageUpload: async function (files) {
                                const formData = new FormData();
                                formData.append('image', files[0]);
                                try {
                                    let response = await axios.post(
                                        "http://localhost:8080/image/upload", formData, {
                                            headers: {
                                                'Content-Type': 'multipart/form-data'
                                            }
                                        });
                                    console.log(response);
                                    let imgTag = window.$("<img>").attr('src', response.data
                                        .result);
                                    imgTag.attr('class', "img-fluid");
                                    window.$("#summernote").summernote("insertNode", imgTag[0]);
                                } catch (error) {
                                    console.error("Failed to upload image:", error);
                                }
                            }
                        }
                    });
                }).catch(() => {
                console.log('summernote error');
            });
        },
        watch: {
            popState: function () {
                const html = document.querySelector('html');
                if (html) {
                    if (this.popState === true) {
                        html.style.overflow = 'hidden';
                    } else {
                        html.style.overflow = 'auto';
                    }
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .page-text {
        padding: 40px 0 30px;
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
        text-align: center;
    }

    .container {
        width: 70%;
        margin: 20px auto 150px;
    }

    .div {
        margin-bottom: 25px;
        display: block;
        unicode-bidi: isolate;
    }

    .title {
        margin-bottom: .5rem;
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
    }

    .form-text {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-color: #dee2e6;
        background-clip: padding-box;
        border: 1px solid #dee2e6;
        border-radius: 0.375rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    .keywords-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .keyword-item {
        margin: 0.5rem;
    }

    .keyword {
        margin: 0.4rem;
        font-size: 15px;
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