import image1 from '../../assets/img/image2.jpg'
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'
import image4 from '../../assets/img/insta2.jpg'

const state = {
     loadedingredients:[
        {id:'1',Name:'Sugar',Quantity:'5kg'},
        {id:'2',Name:'Sugar',Quantity:'5kg'},
        {id:'3',Name:'Sugar',Quantity:'5kg'}
      ],
    loadedRecipes:[
        {imageUrl:image3,
            id:'3' , title:'Homemade Burger',
            description:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..',
            // loadedingredients
        },
        {imageUrl:image1,
            id:'1' , title:'Cake',
            description:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..',
            // loadedingredients
        },
        {imageUrl:image4,
            id:'4' , title:'Salad',
            description:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating..',
            // loadedingredients
        },
        {imageUrl:image2,id:'2' ,
         title:'Kabseh',description:'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        //  loadedingredients
        }

      ]
      
};

const mutations = {
    createRecipe(state,payload){
        // Vue.set(state, 'loadedRecipes', [...state.loadedRecipes, payload])
        state.loadedRecipes.push(payload)
    },
    delete_recipe(state, payload){
        let index = state.loadedRecipes.findIndex(recipe => recipe.payload == payload)
        state.loadedRecipes.splice(index, 1)
        console.log('Deleted Successfully')
       }
};

const actions = {
    createRecipe:({commit},payload)=>{
        commit('createRecipe',payload)
    },
    delete_recipe:({commit})=>{
        commit('delete_recipe')
    },
    asyncCreateRecipe:({commit},payload)=>{
        setTimeout(()=>{
            commit('createRecipe',payload)
        },1000)
    },
    asyncDeleteRecipe:({commit},payload)=>{
        setTimeout(()=>{
            commit('delete_recipe',payload)
        },1000)
    },
};

const getters = {
    loadedRecipes:state=>{
        return state.loadedRecipes.sort((RecipeA,RecipeB)=>{
            return RecipeA.id > RecipeB.id
        })
    },
    featuredRecipes:getters=>{
        return getters.loadedRecipes.slice(0,5)
    },
    loadedRecipe:state=>{
        return (recipeId)=>{
            return state.loadedRecipes.find((recipe)=>{
                return recipe.id === recipeId
            })
        }
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}