<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              height="180px"
              :src="
                'https://cdn.awave.se/wp-content/uploads/sites/3/2019/02/case_greenfood_1new.jpg'
              "
            ></v-img>
            <v-card-text>
              <v-container>
                <form @click="onSignUp">
                  <!-- <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="id"
                        label="Id"
                        id="id"
                        v-model="id"
                        type="number"
                        color="#43A047"
                        required
                      >
                        {{ id }}
                      </v-text-field>
                    </v-flex>
                  </v-layout> -->

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="name"
                        type="text"
                        color="#43A047"
                        required
                      >
                        {{ name }}
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
                        type="text"
                        color="#43A047"
                        required
                      >
                        {{ email }}
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
                        color="#43A047"
                        required
                      >
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-btn class="green darken-1 color">
                        Sign up
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      // id: "",
      name: "",
      email: "",
      password: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        // this.id !== "" &&
        this.name !== "" &&
        this.email !== "" &&
        this.password !== ""
      );
    }
  },
  methods: {
    ...mapActions([
      'asyncCreateUser'
    ]),
      onSignUp() {
      if (!this.formIsValid) {
        return;
      }
      const signup = {
        // id:this.id,
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(signup);

  this.$store.dispatch('asyncCreateUser',signup)
      // this.$store.commit("asyncCreateUser", signup);
      const stringifiedData = JSON.stringify(signup);
      //   console.log("S: ", stringifiedData);
      localStorage.setItem("signup", stringifiedData);
      console.log("We got : ", JSON.parse(localStorage.getItem("signup")));
    },
  },
};
</script>

<style scoped>
.color {
  color: #fafafa;
}
</style>
