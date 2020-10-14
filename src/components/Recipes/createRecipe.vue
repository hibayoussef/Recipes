<template>
   <v-app>
        <v-container>
           <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                 <h2 class="btn-style">Create Recipe</h2>
              </v-flex>
           </v-layout>
           <v-layout row>
              <v-flex xs12>
                 <form @submit.prevent="onCreateRecipe">
                    <v-layout>
                       <v-flex xs12 sm6 offset-sm3>
                          <v-text-field
                          name="title"
                             label = "Title"
                             id="title"
                             v-model="title"
                             color=#43A047
                             required
                          >
                          </v-text-field>
                       </v-flex>
                    </v-layout>
                    <v-layout>
                       <v-flex xs12 sm6 offset-sm3>
                          <v-text-field
                             name="imageUrl"
                             label = "ImageUrl"
                             id="imageUrl"
                             v-model="imageUrl"
                             color=#43A047
                             required
                          >
                          </v-text-field>
                       </v-flex>
                    </v-layout>
                     <v-layout>
                       <v-flex xs12 sm6 offset-sm3>                   
                             <img :src="imageUrl" height="300px">
                       </v-flex>
                    </v-layout>
                    <v-layout>
                       <v-flex xs12 sm6 offset-sm3>
                          <v-text-field
                             name="description"
                             label = "Description"
                             id="description"
                             v-model="description"
                             color=#43A047
                             multi-line
                             required
                          >                             
                          </v-text-field>
                       </v-flex>
                    </v-layout>
                      <v-layout>
                       <v-flex xs12 sm6 offset-sm3>
                          <v-text-field
                          name="ingredients"
                             label = "Ingredients"
                             id="ingredients"
                               v-model="ingredients"
                               color=#43A047
                             multi-line
                             required
                          >
                          </v-text-field>
                       </v-flex>
                    </v-layout>
                    <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                          <v-btn class="green darken-1 color" :disabled="!formIsValid" type="submit">
                             Create Redcipe
                          </v-btn>
                       </v-flex>
                    </v-layout>
                 </form>
              </v-flex>
           </v-layout>
        </v-container>
   </v-app>
</template>

<script>
export default {
   data(){
      return{
         title:'',
         imageUrl:'',
         description:'',
         ingredients:''

      }
   },
   computed:{
      formIsValid(){
         return this.title !== '' &&
                this.description !== '' &&
                 this.imageUrl !== '' &&
                  this.ingredients !=''
      }
   },
   methods:{
      onCreateRecipe(){
         if(!this.formIsValid){
            return
         }
         const recipeData = {
            title:this.title,
            description:this.description,
            imageUrl:this.imageUrl,
            ingredients:this.ingredients,
            date:new Date()
         }
         this.$store.dispatch('createRecipe',recipeData)
         this.router.push('/Recipes')
      }
   }
}
</script>

<style scoped>
.btn-style{
   color:#43A047;
}

.color{
   color: #FAFAFA;
}
</style>