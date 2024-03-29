import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Skis from "./components/Skis.vue";
import SkisDetail from "./components/SkisDetail.vue";
import Tune from "./components/Tune.vue";
import Account from "./components/Account.vue";
import Signup from "./components/Signup.vue";
import NotFound from "./components/NotFound.vue";
import PostCreate from "./components/PostCreate.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    // {path: "/account/:pk", component: postMessage, children: [{path:"post", component: PostCreate}]},
    { path: "/login", component: Login },
    { path: "/skis", component: Skis },
    {
      path: "/skis/:pk",
      component: SkisDetail,
      children: [{ path: "post", component: PostCreate }],
    },
    { path: "/tune", component: Tune },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
