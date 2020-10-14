<template>
  <v-app>
    <div>
      <v-app-bar class="green darken-1">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          fab
          color="grey lighten-5"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="myfont font color size"
          ><router-link to="/" tag="span">Bakerita</router-link></v-toolbar-title
        >

        <v-spacer></v-spacer>
        
  <v-list-tile v-for="itemH in headerIconMenue" :key="itemH.title"  
            router
            :to="itemH.link">
        <v-btn icon>
          <v-icon>{{itemH.icon}}</v-icon>
        </v-btn>
        {{itemH.title}}
        </v-list-tile>

      </v-app-bar>
<!-- Side Bar -->
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
 <v-list rounded>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
      color="green darken-1"
      >
        <v-list-item
          v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

      </v-navigation-drawer>
      <!-- End Side Bar -->
    </div>
     <main>
       <router-view></router-view>
     </main>
  </v-app>
 
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
       { icon: ' mdi-home', title: 'Home', link: '/home' },
          { icon: 'mdi-call-split', title: 'View Recipes', link: '/Recipes' },
          { icon: 'mdi-call-split', title: 'create Recipes', link: '/recipe/new' },
           { icon: 'mdi-call-split', title: 'full Recipe', link: '/recipe/:id' },
          { icon: 'mdi-call-split', title: 'Sign Up', link: '/signup' },
          { icon: 'mdi-call-split', title: 'Log in', link: '/login' }
      ],
      headerIconMenue:[
          { icon: 'mdi-email', title: 'Sign up', link: '/signup' },
          { icon: 'mdi-call-split', title: 'Sign in', link: '/signin' }
      ]
    };
  },
};
</script>

<style scoped>
.font {
  font-size: 23pt;
}
.myfont {
  font-family: "Mansalva", cursive;
}
.color {
  /* color: rgb(233, 4, 119) */
  color: #FAFAFA;
}
.size {
  font-weight: bold;
}
</style>