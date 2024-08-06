<template>
  <div id="main">
        <div id="content">
            <div class="page_aticle">
                <div id="lnbMenu" class="lnb_menu">
                    <div class="inner_lnb">
                        <div class="ico_cate">
                            <span class="tit">레시피</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layout-wrapper">
                <RecipeItemComponent></RecipeItemComponent>
            </div>
        </div>
  </div>
</template>

<script>
import RecipeItemComponent from "../components/recipe/RecipeItemComponent.vue";

export default {
  components: {
    RecipeItemComponent
  },
  name: "RecipePage",
  methods: {
  }
};
</script>

<style scoped>
@import '../styles/RecipeCss.css';

</style>
