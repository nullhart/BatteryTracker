<template>
  <div class="home-container">
    <div class="list-container">
      <div class="list-item" v-for="(form,i) in SavedForms" :key="i">{{form.form_name}}</div>
    </div>

    <div class="action-button-group">
      <font-awesome-icon
        @click="SubmitCompletedForms"
        style="margin: auto;color:white;"
        icon="sync"
        size="2x"
      />
      <font-awesome-icon @click="NewForm" style="margin: auto;color:white;" icon="plus" size="2x" />
    </div>
  </div>
</template>

<script>
import GetCreatedForms from "../Helpers/GetCreatedForms";

import { SwipeList, SwipeOut } from "vue-swipe-actions";
export default {
  name: "Home",
  components: { SwipeOut, SwipeList },
  data() {
    return { SavedForms: [] };
  },
  methods: {
    SubmitCompletedForms: async function() {
      console.log("Submitted Forms");
    },
    NewForm: async function() {
      console.log("New Form Started");
      this.$router.push("NewForm");
    }
  },

  async mounted() {
    this.SavedForms = await GetCreatedForms();
  }
};
</script>

<style>
.action-button-group {
  position: fixed;
  bottom: 0px;
  display: grid;
  width: 100%;
  height: 60px;
  max-width: 900px;
  background-color: #424242;

  grid-template-columns: 1fr 1fr;
}
.list-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.list-item {
  width: 100%;
  height: 50px;

  margin-bottom: 10px;
  background-color: #02b8a2;
  color: white;
}

.home-container {
  display: grid;
  margin-top: 50px;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  grid-template-rows: 1fr 60px;
}
</style>