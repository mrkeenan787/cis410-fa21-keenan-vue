<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create a Post</h4>
            <form id="review-form" @submit.prevent="submitPost">
              <div class="mb-3">
                <label for="rating-input" class="form-label">Price</label
                ><input
                  type="number"
                  class="form-control"
                  id="rating-input"
                  required=""
                  min="1"
                  max="5000"
                  v-model="price"
                />
              </div>
              <div class="mb-3">
                <label for="summary-input" class="form-label">Location</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="summary-input"
                  required=""
                  v-model="location"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit Post</button
              ><button
                v-on:click="cancelReview"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      price: "",
      location: "",
      errorMessage: null,
    };
  },
  methods: {
    submitPost() {
      let myPost = {
        price: this.Price,
        location: this.Location,
        skiFK: this.$route.params.pk,
        contactFK: this.contactFK,
      };

      axios
        .post("Post", myPost, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage = "Unable to Create Review";
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
