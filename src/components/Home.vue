<template>
<v-container>
    <v-row>
        <v-flex class="text-center">

            <v-btn large 
                   router 
                   to="/Recipes" 
                   class="green darken-1  btn-style margine">
                Explore Recipes
            </v-btn>
        </v-flex>
        <v-flex class="text-center">
            <v-btn large 
                   router 
                   to="/recipes/new" 
                   class="green darken-1  btn-style ">
                Create Recipes
            </v-btn>
        </v-flex>
    </v-row>


    <v-layout row wrap>
      <v-col>
        <v-carousel style="cursor:pointer;">
          <v-carousel-item
            v-for="recipe in Recipes"
            :key="recipe.id"
            :src="recipe.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadRecipe(recipe.id)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
// import image1 from '../assets/img/image4.jpg'
// import image2 from '../assets/img/image2.jpg'
// import image3 from '../assets/img/image3.jpg'
// import image4 from '../assets/img/image5.jpg'

export default {
  computed:{
    Recipes(){
     return this.$store.getters.featuredRecipes
    }
  },
  // // data(){
  // //   return{
  // //     recipes:[
  // //       {imageUrl:image3,id:'3' , title:'picture3'},
  // //       {imageUrl:image1,id:'1' , title:'picture1'},
  // //       {imageUrl:image4,id:'4' , title:'picture5'},
  // //       {imageUrl:image2,id:'2' , title:'picture2'}

  // //     ]
  // //   }
  // },
    methods:{
    onLoadRecipe(id){
      this.$router.push('/recipe/'+id)
    }
  }
}
</script>
<style scoped>
.btn-style {
  color: #FAFAFA;
}
.margine{
  padding-left: 4px;
  padding-right: 4px;

}
</style>
