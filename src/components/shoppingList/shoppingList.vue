<template>
  <div>
    <v-container class="mb-30">
         
        <v-flex class="floating-right">

            <v-btn large 
                   router 
                   to="/CreateNewIngrediets" 
                   class="green darken-1  btn-style margine mr-50">
                <v-icon class="green darken-1 ">mdi-plus</v-icon>
            </v-btn>
        </v-flex>
    
<v-container>

      <v-layout
        row
        wrap
        v-for="ingredient in loadedingredients"
        :key="ingredient.id"
        class="mb-3 mt-4"
      >
        <v-flex xs6 sm8 md4 offset-sm1 offset-md2>
          <v-card class="grey lighten-4 pl-3 ">
            <v-container fluid>
              <v-layout row class="pl-14">
                <v-flex xs7 sm8 md9>
                  <v-card-title primary-title>
                    <v-flex xs7 sm8 md9>
                      <div>
                        {{ ingredient.Name }}
                      </div>
                    </v-flex>

                    <v-flex xs7 sm8 md9>
                      <div>
                        {{ ingredient.Quantity }}
                      </div>
                    </v-flex>
                    <v-flex xs5 sm4 md2>
                      <v-btn class="deleteColorIcon">
                        <v-icon
                          left
                          class=" pl-4"
                          @click="asyncDeleteIngredient(ingredient.id)"
                        >
                          mdi-delete
                        </v-icon>
                        <!-- </v-btn> -->
                      </v-btn>
                    </v-flex>
                  </v-card-title>
                </v-flex>
              </v-layout>
              
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      id: "",
      Name: "",
      Quantity: "",
    };
  },
  actions:{
     ...mapActions([
      'asyncDeleteIngredient'
    ])
  },
  computed: {
       ...mapGetters([
      'loadedingredients'
    ])
    },
  methods: {
        ...mapActions([
      'asyncCreateIngredients'
    ]),
      asyncDeleteIngredient() {
      return this.$store.dispatch('asyncDeleteIngredient',this.id)
    },
    onAddIngredient() {
      const ingredientData = {
        id: this.id,
        Name: this.Name,
        Quantity: this.Quantity,
      };

      this.$store.dispatch("asyncCreateIngredients", ingredientData);

      const stringifiedData = JSON.stringify(ingredientData);
      // console.log("S: ", stringifiedData);
      localStorage.setItem("ingredient", stringifiedData);
      console.log("We got : ", JSON.parse(localStorage.getItem("ingredient")));
    }
  },
};
</script>

<style scoped>
.color {
  color: #43a047;
}
.deleteColorIcon {
  color: #e53935;
}
</style>
