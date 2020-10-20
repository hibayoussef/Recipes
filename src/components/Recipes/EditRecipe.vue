<!--
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>
        mdi-pencil
      </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Recipe</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                       <v-col cols="12">
                <v-text-field
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Description*"
                  type="text"
                  multi-line
                  required
                ></v-text-field>
              </v-col>
                         </v-row>
                         <v-divider></v-divider>
                         <v-layout row wrap>
                             <v-flex xs12>
                                 <v-card-actions>
                                     <v-btn text class="blue--text">
                                         close
                                     </v-btn>
                                       <v-btn text class="blue--text">
                                         Save
                                     </v-btn>
                                 </v-card-actions>
                             </v-flex>
                         </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props:['recipe'],
    data(){
        return {
            editedTitle:this.recipe.title,
            editDescription:this.recipe.description
        }
    }
}
</script>
-->
