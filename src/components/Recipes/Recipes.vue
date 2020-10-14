<template>
  <v-container>
    <v-layout row wrap v-for="recipe in Recipes" :key="recipe.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-4">
          <v-container fluid>
              <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-img
                height="130px"
                :src="recipe.imageUrl"
              ></v-img>
            </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h5 class="color mb-0">{{recipe.title}}</h5>
                  <div>
                    <!-- JULY 12, 2019 GRILLED CHICKEN WITH FRESH CHERRY SALSA This
                    is a sponsored post written by me on behalf of Draper Valley.
                     -->
                     {{recipe.date}}
                  </div>
                </div>
              </v-card-title>
                 <v-card-actions>
              <v-btn text left :to="'/recipe/'+ recipe.id" class="color">
                  <!-- <v-icon left light class="color"> eco</v-icon> -->
                View Recipe
              </v-btn>
            </v-card-actions>
            </v-flex>
              </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    computed:{
        Recipes(){
            return this .$store.getters.loadedRecipes
        }
    }
}
</script>

<style scoped>
.color{
    color: #43A047;
}
</style>