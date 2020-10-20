const state = {
    loadedingredients:[
        {id:'1',Name:'Sugar',Quantity:'5kg'},
        {id:'2',Name:'Sugar',Quantity:'5kg'},
        {id:'3',Name:'Sugar',Quantity:'5kg'}
      ]
};

const mutations = {
    
    createIngredients(state,payload){
        // Vue.set(state, 'loadedRecipes', [...state.loadedRecipes, payload])
        state.loadedingredients.push(payload)
    },
    delete_ingredient(state, id){
        let index = state.loadedingredients.findIndex(ingredient => ingredient.id == id)
        state.loadedingredients.splice(index, 1)
        console.log('Deleted Successfully')
       }   
};

const actions = {
    createIngredients:({commit})=>{
        commit('createIngredients')
    },
    delete_ingredient:({commit})=>{
        commit('delete_ingredient')
    },
    asyncCreateIngredients:({commit},payload)=>{
        setTimeout(()=>{
            commit('createIngredients',payload)
        },1000)
    },
    asyncDeleteIngredient:({commit},payload)=>{
        setTimeout(()=>{
            commit('delete_ingredient',payload)
        },1000)
    }

};

const getters = {
    loadedingredients:state=>{
        return state.loadedingredients.sort((ingredientA,ingredientB)=>{
            return ingredientA.Quantity >ingredientB.Quantity
        })
    },
     
      loadedingredient:state=>{
        return (ingredientId)=>{
            return state.loadedRecipes.find((ingredient)=>{
                return ingredient.id === ingredientId
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