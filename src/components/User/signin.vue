<template>
   <v-container>
       <v-layout row>
           <v-flex xs12 sm6 offset-sm3>
               <v-card>
                   <v-card-text>
                       <v-container>
                           <form>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="name"
                                       label="Name"
                                       id="name"
                                       v-model="name"
                                       type="name"
                                       color=#43A047
                                       required
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>

                                <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="email"
                                       label="Email"
                                       id="email"
                                       v-model="email"
                                       type="email"
                                       color=#43A047
                                       required
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>

                                <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="password"
                                       label="Password"
                                       id="password"
                                       v-model="password"
                                       type="password"
                                       color=#43A047
                                       required
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>

                               
                                <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="confirmpassword"
                                       label="ConfirmPassword"
                                       id="confirmpassword"
                                       v-model="confirmpassword"
                                       type="password"
                                       color=#43A047
                                       required
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>

                               <v-layout row>
                                   <v-flex xs12>
                                       <v-btn  class="green darken-1 color" type="submit">
                                           Sign in
                                       </v-btn>
                                   </v-flex>
                               </v-layout>
                           </form>
                       </v-container>
                   </v-card-text>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>


<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        onSignin(){

        }
    }
}
</script>

<style scoped>
.color{
   color: #FAFAFA;
}
</style>