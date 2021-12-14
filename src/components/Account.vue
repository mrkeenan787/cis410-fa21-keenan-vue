<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Skis</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <table v-if="skisByUser" class="table">
      <thead>
        <th>Skis</th>
        <th>Price</th>
        <th>Location</th>
      </thead>
      <tbody>
        <tr v-for="thisPost in skisByUser" :key="thisPost.PostPK">
          <th>
            <router-link :to="`/skis/${thisPost.skiFK}`">{{
              thisPost.Price
            }}</router-link>
          </th>
          <th>{{ thisPost.Location }}</th>
          <th>{{ thisPost.SkiFk }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      skisByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
  },
  created() {
    axios
      .get("/Post/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.reviewsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
