import Vue from 'vue'
import Vuex from 'vuex'
import image1 from '../assets/img/image4.jpg'
import image2 from '../assets/img/image2.jpg'
import image3 from '../assets/img/image3.jpg'
import image4 from '../assets/img/image5.jpg'
Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
        loadedRecipes:[
            {imageUrl:image3,id:'3' , title:'Rice',date:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..'},
            {imageUrl:image1,id:'1' , title:'Chicken',date:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..'},
            {imageUrl:image4,id:'4' , title:'Zuchini',date:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..'},
            {imageUrl:image2,id:'2' , title:'Fish',date:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'}
    
          ],
          user:{
              id:'nvdcjavdah',
              registeredRecipes:['jhvjhvmnbvhj']
          }
    },
    mutations:{
        createRecipe(state,payload){
            state.loadedRecipes.push(payload)
        }
    },
    actions:{
        createRecipe({commit},payload){
            const recipe = {
                title : payload.title,
                imageUrl: payload.imageUrl,
                description:payload.description,
                ingredients:payload.ingredients,
                date:payload.date,
                id:'hgxckjh'
            }
            // Reach out Firbase and store it
            commit('createRecipe',recipe)
        }
    },
    getters:{
        loadedRecipes(state){
            return state.loadedRecipes.sort((RecipeA,RecipeB)=>{
                return RecipeA.date >RecipeB.date
            })
        },
        featuredRecipes(state,getters){
            return getters.loadedRecipes.slice(0,5)
        },
        loadedRecipe(state){
            return (recipeId)=>{
                return state.loadedRecipes.find((recipe)=>{
                    return recipe.id === recipeId
                })
            }
        }
    }
})