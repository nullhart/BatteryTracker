<template>
  <div class="settings-container">
    <div></div>
    <button class="reset-button" @click="ResetDB">delete Local DB 💣</button>
  </div>
</template>

<script>
import WipeLocalDB from "../Helpers/WipeLocalDB";
export default {
  methods: {
    ResetDB: async function() {
      this.$store.state.spinner = true;

      await WipeLocalDB();
      setTimeout(() => {
        this.$store.state.spinner = false;
      }, 1000);
    }
  }
};
</script>

<style>
.settings-container {
  display: grid;
  margin-top: 50px;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  grid-template-rows: 1fr 60px;
  background-color: #1b2431;
}

.reset-button {
  margin: 0px;
  border-radius: 0px;
}
</style>
