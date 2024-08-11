<template>
  <div id="recipe" class="wrap">
    <table width="100%">
      <tbody>
        <tr v-for="(card, index) in cardPairs" :key="index" class="recipe_tr">
          <td valign="top">
            <div>
              <ul>
                <li v-if="card[0]" class="recipe_item">
                  <a :href="`/recipe/details?${card[0].recipeId}`">
                    <img
                      :src="card[0].imageUrl"
                      width="480"
                      height="480"
                    />
                    <p class="tit_recipe">
                      {{ card[0].title }}
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </td>
          <td valign="top">
            <div>
              <ul>
                <li v-if="card[1]" class="recipe_item">
                  <a :href="`/recipe/details?${card[1].recipeId}`">
                    <img
                      :src="card[1].imageUrl"
                      width="480"
                      height="480"
                    />
                    <p class="tit_recipe">
                      {{ card[1].title }}
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RecipeItemComponent",
  props: ["currentPage", "cards"],
  computed: {
    cardPairs() {
      const cards = this.cards || [];
      const pairs = [];
      for (let i = 0; i < cards.length; i += 2) {
        pairs.push(cards.slice(i, i + 2));
      }
      return pairs;
    },
  },
};
</script>

<style scoped>
@import "../../styles/RecipeCss.css";
</style>
