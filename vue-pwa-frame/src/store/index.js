import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
  state: {
    user: null,
    post: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    createpost(state, createpost) {
      state.post = createpost;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    logout({ commit }, credentials) {
      return axios.post("/auth/logout", credentials).then(() => {
        commit("setUserData", null);
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => {
      if (state.user && state.user.name) {
        return state.user.name;
      }
    },
    postTitle: (state) => {
      if(state.post && state.post.title) {
        return state.post.title
      }
    },
    postDescription: (state) => {
      if(state.post && state.post.description) {
        return state.post.description
      }
    }
  },
  plugins: [createPersistedState()],
});
