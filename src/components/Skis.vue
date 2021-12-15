<template>
  <div>
    <h1>Skis</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Brand</th>
          <th>Year</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aSki in theSkis" :key="aSki.SkiPK">
          <th>{{ aSki.ModelName }}</th>
          <th>{{ aSki.BrandName }}</th>
          <th>{{ aSki.ModelYear }}</th>
          <th>{{ aSki.SkiLength }}</th>
          <th>
            <router-link :to="`/skis/${aSki.SkiPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theSkis() {
      return this.$store.state.skis;
    },
  },
};
</script>

<style></style>
