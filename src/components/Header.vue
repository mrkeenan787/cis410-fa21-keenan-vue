<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Keen Ski</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/skis"
              >Skis</router-link
            >
          </li>
          <li v-if="auth" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/account"
              >Account</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/Tune"
              >Tune</router-link
            >
          </li>
          <li v-if="!auth" class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/login"
              ><button class="btn btn-warning">Login</button>
            </router-link>
          </li>
          <li v-if="!auth" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/signup"
              ><button class="btn btn-outline-warning text-dark">
                Sign Up
              </button></router-link
            >
          </li>
          <li v-if="auth" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/signup"
              ><button class="btn btn-warning" @click="onLogout">
                Log Out
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.state.token;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.navbar-nav {
  align-items: center;
}
</style>
