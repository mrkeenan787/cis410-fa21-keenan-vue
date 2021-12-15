import { createStore } from "vuex";
import axios from "axios";

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
  },
  actions: {
    getSkis() {
      axios.get("/skis").then((aResponse) => {
        console.log("repsonse skis", aResponse);
        this.commit("storeSkis", aResponse.data);
      });
    },
  },
});
