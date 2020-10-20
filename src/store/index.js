import Vue from 'vue'
import Vuex from 'vuex'
import ingredient from './modules/ingredient'
import recipe from './modules/recipe'
import user from './modules/user'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
     
          
          
    },
    // like setters
   mutations:{
     
       
       
         
    },
    actions,
    getters:{
       
       
     
        isLoggedIn: state => {
            return state.isLoggedIn
           }
    },
    modules:{
        ingredient,
        recipe,
        user
    }
})