import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: "",
    pseudo: "",
    tirage: "",
    mot: "",
    partie: "",
  },
  mutations: {
    INITIALIZE_SOCK(state, payload) {
      state.socket = payload;
    },
    INITIALIZE_PSEUDO(state, payload) {
      state.pseudo = payload;
    },
    INITIALIZE_TIRAGE(state, payload) {
      state.tirage = payload;
    },
    CHANGE_MOT(state, payload) {
      state.mot = payload;
    },
    INITIALIZE_PARTIE(state, payload) {
      state.partie = payload;
    },
  },
  actions: {
    initializeSock({ commit }, payload) {
      commit("INITIALIZE_SOCK", payload);
    },
    initializePseudo({ commit }, payload) {
      commit("INITIALIZE_PSEUDO", payload);
    },
    initializeTirage({ commit }, payload) {
      commit("INITIALIZE_TIRAGE", payload);
    },
    changeMot({ commit }, payload) {
      commit("CHANGE_MOT", payload);
    },
    initializePartie({ commit }, payload) {
      commit("INITIALIZE_PARTIE", payload);
    },
  },
  getters: {
    isAuthentified: (state) => {
      if (state.pseudo == "") {
        return false;
      } else return true;
    },
  },
  modules: {},
});
