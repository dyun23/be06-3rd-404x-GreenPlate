<template>
    <div class="page-title">
        <h2 class="page-text">상품 등록</h2>
    </div>
    <div class="container">
        <div class="div row">
            <div class="col">
                <label class="title">상품 이름</label>
                <input v-model="item.name" name="name" type="text" class="form-text" id="exampleFormControlInput1"
                    placeholder="상품 이름을 입력해주세요">
            </div>
            <div class="col">
                <label class="title">상태</label>
                <select v-model="item.state" name="state" class="form-text">
                    <option value="판매중">판매중</option>
                    <option value="품절">품절</option>
                    <option value="판매 중단">판매 중단</option>
                </select>
            </div>
        </div>
        <div class="div">
            <label class="title">상품 가격</label>
            <div class="price-inputs">
                <div class="price-input">
                    <label class="price-label">정가:</label>
                    <input v-model="item.price" name="originalPrice" type="text" class="form-text"
                        placeholder="정가를 입력해주세요" min="0" step="0.01">
                </div>
                <div class="price-input">
                    <label class="price-label">할인가:</label>
                    <input v-model="item.discountPrice" name="discountPrice" type="text" class="form-text"
                        placeholder="할인가를 입력해주세요" min="0" step="0.01">
                </div>
            </div>
        </div>
        <div class="div row">
            <div class="col">
                <label class="title">재고</label>
                <input v-model="item.stock" name="stock" type="number" class="form-text" placeholder="재고를 입력해주세요"
                    min="0">
            </div>
            <div class="col">
                <label class="title">칼로리</label>
                <input v-model="item.calorie" name="calorie" type="number" class="form-text" placeholder="칼로리를 입력해주세요"
                    min="0">
            </div>
        </div>
        <div class="div row">
            <div class="col">
                <label class="title">메인 카테고리</label>
                <select v-model="item.mainCategory" @change="fetchSubCategories" class="form-text">
                    <option v-for="category in categories" :key="category.main" :value="category.main">
                        {{ category.main }}</option>
                </select>
            </div>
            <div class="col">
                <label class="title">하위 카테고리</label>
                <select v-model="item.subCategory" class="form-text">
                    <option v-for="subCategory in subCategories" :key="subCategory" :value="subCategory">
                        {{ subCategory }}</option>
                </select>
            </div>
        </div>
        <div class="div">
            <label class="title">상품 대표 이미지</label><br>
            <input type="file" name="image" @change="onFileChange">
        </div>
        <div class="div">
            <label class="title">상품 상세 설명</label>
            <textarea name="contents" id="summernote"></textarea>
        </div>
        <div style="text-align: center;">
            <button @click="send" class="btn">저장</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                image: null,
                categories: [],
                subCategories: [],
                item: {
                    name: "",
                    contents: "",
                    price: 0,
                    discountPrice: 0,
                    stock: 0,
                    calorie: 0,
                    state: "판매중",
                    mainCategory: "",
                    subCategory: ""
                }
            }
        },
        async mounted() {
            await this.fetchCategories();
            this.$loadScript("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js").then(
                () => {
                    window.$('#summernote').summernote({
                        placeholder: '상품 상세 정보를 입력해주세요',
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
        methods: {
            async fetchCategories() {
                try {
                    console.log('Fetching categories from /category/list');
                    const response = await axios.get('http://localhost:8080/category/list');
                    console.log('Response:', response.data);
                    this.categories = response.data.result;
                } catch (error) {
                    console.error("Failed to fetch categories:", error);
                }
            },
            fetchSubCategories() {
                const selectedCategory = this.categories.find(category => category.main === this.item.mainCategory);
                if (selectedCategory) {
                    this.subCategories = selectedCategory.subList;
                } else {
                    this.subCategories = [];
                }
            },
            async send() {
                console.log("제출된 데이터:", this.item);
                this.item.contents = window.$('#summernote').summernote('code');
                const formData = new FormData();
                const jsonBlob = new Blob([JSON.stringify(this.item)], {
                    type: 'application/json'
                });
                console.log(this.item, this.image);
                formData.append('request', jsonBlob);

                // 이미지 파일이 없을 때 빈 파일을 추가하여 백엔드에서 처리할 수 있게 합니다.
                if (this.image) {
                    formData.append('file', this.image);
                } else {
                    formData.append('file', new Blob());
                }

                try {
                    await axios.post("http://localhost:8080/item/create", formData, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    alert("상품 등록에 성공했습니다!"); 
                    this.$router.push("/company/product");
                } catch (error) {
                    console.error("요청 실패:", error.response ? error.response.data : error.message);
                    alert("상품 등록에 실패했습니다.");
                }
            },
            onFileChange(event) {
                this.image = event.target.files[0];
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

    .row {
        display: flex;
        gap: 2rem;
    }

    .col {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .price-inputs {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: space-around;
    }

    .price-input {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .price-label {
        font-size: 16px;
        font-weight: 700;
        width: 75px;
    }

    .btn {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 240px;
        height: 56px;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(102, 153, 51);
        border: 0px none;
        margin: 40px auto 30px;
        font-size: 16px;
        font-weight: 500;
    }

    .btn:hover {
        background-color: rgb(62, 116, 36);
    }
</style>