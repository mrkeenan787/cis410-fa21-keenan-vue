<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ ski.BrandName }}</h2>
        <h2 class="text-primary">{{ ski.ModelName }}</h2>
        <br />

        <p>
          Model Year: <br /><strong>{{ ski.ModelYear }}</strong>
        </p>
        <p>
          Gender: <br /><strong>{{ ski.SkiGender }}</strong>
        </p>
        <p>
          Length: <br /><strong>{{ ski.SkiLength }}</strong>
        </p>
        <p>
          Ski Type: <br /><strong>{{ ski.SkiType }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/skis/${this.$route.params.pk}/Post`"
      ><button class="btn btn-outline-success">Add a Post</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-success">
        Sign In to Add a Post
      </button></router-link
    >

    <br />
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    ski() {
      let allSkis = this.$store.state.skis;
      let thisSki = allSkis.find((aSki) => {
        return aSki.SkiPK == this.$route.params.pk;
      });

      return thisSki;
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
