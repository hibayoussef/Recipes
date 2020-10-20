
<template>
  <v-container>
    <v-layout row wrap >
      <v-flex x12>
        <v-card>
          <!-- <v-card-title> -->
                      <v-card-text>
                        <h4 class="btn-style mt-4 mb-4 font">
              {{ loadedRecipe.title }}
            </h4>
         
          <v-img height="530px" :src="loadedRecipe.imageUrl" class="mb-4"></v-img>

            <div class="btn-style">
              {{ loadedRecipe.description }}
            </div>
            <div>
              {{ loadedingredient.Name }} {{ loadedingredient.Quantity }}
            </div>
            
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
             <!-- <v-flex xs5 sm4 md2> -->
                    <v-btn class=" mb-4 mr-4">
                      <v-icon left class=" pl-4 ">
                        mdi-pen
                      </v-icon>
                      <!-- </v-btn> -->
                    </v-btn>
                  <!-- </v-flex> -->
            <v-btn class="green darken-1  color mb-4 mr-2">
              Add to my Shopping List
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ["id"],
  computed: {
    ...mapGetters([
      'loadedRecipe',
      'loadedingredient'
    ]),
  },
  methods:{
      recipe() {
      return this.$store.dispatch('loadedRecipe')
    },
     ingredient() {
      return this.$store.dispatch('loadedingredient')
    },
  }
};
</script>
<style scoped>
.btn-style {
  color: #43a047;
}
.color {
  color: #fafafa;
}
.deleteColorIcon {
  color: #e53935;
}
.font{
  font-size: 30px;
}
</style>
