<template>
  <div class="list-container">
    <div class="list-item" v-for="(form,i) in SavedForms" :key="i">{{form.form_name}}</div>
  </div>
</template>

<script>
import GetCreatedForms from "../Helpers/GetCreatedForms";
export default {
  name: "Home",
  data() {
    return { SavedForms: [] };
  },
  async mounted() {
    this.SavedForms = await GetCreatedForms();
  }
};
</script>

<style>
.list-container {
  width: 100vw;
  height: 100vh;
}

.list-item {
  width: 100vw;
  height: 50px;
  margin-bottom: 10px;
  background-color: lightGrey;
}
</style>