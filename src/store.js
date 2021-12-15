import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    skis: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeSkis(state, skis) {
      state.skis = skis;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getSkis() {
      axios.get("/skis").then((aResponse) => {
        console.log("repsonse skis", aResponse);
        this.commit("storeSkis", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/contacts/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
