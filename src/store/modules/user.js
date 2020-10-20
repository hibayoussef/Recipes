const state = {
  user: [
    {
      name: "Hiba",
      email: "Hiba69@gmail.com",
      password: "123442321325",
    },
  ],
};

const mutations = {
  createUser(state, payload) {
    state.user.push(payload);
  },
 
};

const actions = {
   asyncCreateUser: ({ commit },payload) => {
    setTimeout(() => {
      commit("createUser",payload);
    }, 1000);
  }
};

const getters = {
  loadedUsers: (state) => {
    return state.user.sort((userA, userB) => {
      return userA.id > userB.id;
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
