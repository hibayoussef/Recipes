<template>
  <v-container>
    <v-layout row wrap>
      <v-flex x12>
        <v-card>
          <v-card-title>
            <h4 class="btn-style"> 
              {{recipe.title}} 
            </h4> 
          </v-card-title> 
          <v-img 
            height="500px" 
            :src="recipe.imageUrl"
          ></v-img>
          <v-card-text>
            <div class="btn-style">
              <!-- * Arabic food -->
              {{recipe.date}}
            </div>
            <div>
              orchards where you can go cherry picking each year. But the season
              always seems so fleetingly short to me, so I don’t hold back from
              purchasing an outrageous quantity and eating them as quickly as
              possible. I’m making sure to use every last one of mine and this
              recipe is just the start of a beautiful cherry-obsessed season
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn class="green darken-1  color">
                  Register
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    props:['id'],
    computed:{
        recipe(){
            return this.$store.getters.loadedRecipe(this.id)
        }
    }    
}

</script>
<style scoped>
.btn-style {
  color: #43a047;
}
.color{
    color: #FAFAFA;
}
</style>

