<template>
  <div>
    <!-- Load Form Definition -->
    <div v-for="(field,index) in SelectedForm" :key="index">
      <component v-bind:is="field.type"></component>
    </div>
  </div>
</template>

<script>
import DropDown from "../components/DropDown";
export default {
  components: { DropDown },
  data() {
    return {
      SelectedForm: [{ name: "Test Dropdown", type: "DropDown" }],
      foods: ["Select One", "1", "2"]
    };
  },
  methods: {}
};
</script>

<style>
</style>