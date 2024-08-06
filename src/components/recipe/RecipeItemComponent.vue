<template>
    <div id="recipe" class="wrap">
        <table width="100%" align="center">
            <tbody>
                <tr>
                    <td>
                        <form name="frmList" action="/shop/board/list.php?&amp;"
                            @submit.prevent="chkFormList">
                            <input type="hidden" name="id" value="recipe">
                                <table width="100%" id="recipe_table">
                                    <tbody>
                                    <tr v-for="index in Math.ceil(dataList.length / 2)" :key="index" class="recipe_tr">
                                        <td align="left" valign="top">
                                            <div>
                                                <ul>
                                                    <li v-if="dataList[(index - 1) * 2]" class="recipe_item">
                                                        <a :href="'/recipe/details?' + dataList[(index - 1) * 2].recipeId">
                                                            <img src="/image/recipe_img1.PNG"
                                                                width="480"
                                                                height="480"
                                                                @error="this.src='/shop/data/skin/designgj/board/gallery/img/noimg.gif'">
                                                            <p class="tit_recipe">{{dataList[(index - 1) * 2].title}}</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td v-if="dataList[(index - 1) * 2 + 1]" align="left" valign="top">
                                            <div>
                                                <ul>
                                                    <li class="recipe_item">
                                                        <a :href="'/recipe/details?' + dataList[(index - 1) * 2 + 1].recipeId">
                                                            <img src="/image/recipe_img1.PNG"
                                                                width="480"
                                                                height="480"
                                                                @error="this.src='/shop/data/skin/designgj/board/gallery/img/noimg.gif'">
                                                            <p class="tit_recipe">{{dataList[(index - 1) * 2 + 1].title}}</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            <div class="layout-pagination">
                                <div class="pagediv">
                                    <a href="/recipe/list/0?size=6&search=" class="layout-pagination-button layout-pagination-first-page">맨 처음 페이지로가기</a>
                                    <a href="list.php?id=recipe&amp;page=1" class="layout-pagination-button layout-pagination-prev-page">이전 페이지로가기</a>
                                    <a href="/recipe/list/0?size=6&search=" class="layout-pagination-button layout-pagination-number">1</a>
                                    <a href="/recipe/list/1?size=6&search=" class="layout-pagination-button layout-pagination-number">2</a>
                                    <a href="/recipe/list/2?size=6&search=" class="layout-pagination-button layout-pagination-number">3</a>
                                    <a href="/recipe/list/3?size=6&search=" class="layout-pagination-button layout-pagination-number">4</a>
                                    <a href="/recipe/list/4?size=6&search=" class="layout-pagination-button layout-pagination-number">5</a>
                                    <a href="/recipe/list/5?size=6&search=" class="layout-pagination-button layout-pagination-number">6</a>
                                    <a href="/recipe/list/6?size=6&search=" class="layout-pagination-button layout-pagination-number">7</a>
                                    <a href="/recipe/list/7?size=6&search=" class="layout-pagination-button layout-pagination-number">8</a>
                                    <a href="/recipe/list/8?size=6&search=" class="layout-pagination-button layout-pagination-number">9</a>
                                    <a href="/recipe/list/9?size=6&search=" class="layout-pagination-button layout-pagination-number">10</a>
                                    <a href="/recipe/list/10?size=6&search=" class="layout-pagination-button layout-pagination-next-page">다음 페이지로가기</a>
                                    <a href="list.php?id=recipe&amp;page=35" class="layout-pagination-button layout-pagination-last-page">맨 끝 페이지로가기</a>
                                </div>
                            </div>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td align="right">
                                            <table class="xans-board-search xans-board-search2">
                                                <tbody>
                                                    <tr>
                                                        <td class="input_txt"><img
                                                                src="/image/ico_function.PNG">검색어
                                                        </td>
                                                        <td class="stxt" style="text-align:left">
                                                            <input type="checkbox" name="search[name]">이름
                                                            <input type="checkbox" name="search[subject]">제목
                                                            <input type="checkbox" name="search[contents]">내용
                                                            <input type="checkbox" name="search[tag]">태그
                                                            &nbsp;
                                                        </td>
                                                        <td class="input_txt">&nbsp;</td>
                                                        <td>
                                                            <div class="search_bt">
                                                                <img src="/image/search.PNG"
                                                                    alt="검색" onclick="searchRecipe();">
                                                                <input type="text" name="search[word]" value=""
                                                                    required="">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "RecipeItemComponent",
  data() {
    return {
      dataList: [],
      isLoading: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        // pageId를 computed 속성에서 가져와서 사용합니다
        const response = await axios.get(`http://localhost:8080/recipe/list/${this.pageId}?size=6&search=`);
        console.log(response.data.result);
        this.dataList = response.data.result;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  computed: {
    pageId() {
      const path = this.$route.path;  // 현재 경로를 가져옵니다
      const match = path.match(/list\/([^/?]+)/);
      return match ? match[1] : 0;
    }
  }

};
</script>


<style scoped>
@import '../../styles/RecipeCss.css';
</style>
