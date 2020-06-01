<template>
  <div @click="SetLocation" style="width: 100%;display: grid;">
    <label for="lat">Latitude</label>
    <input disabled name="lat" v-model="lat" />

    <label for="long">Longitude</label>
    <input disabled name="long" v-model="long" />
  </div>
</template>

<script>
import GetLocation from "../Helpers/GetLocation";
export default {
  name: "coordinates",
  data() {
    return { lat: "", long: "" };
  },
  methods: {
    SetLocation: async function() {
      const location = await GetLocation();
      this.lat = location.coords.latitude;
      this.long = location.coords.longitude;
      console.log();
    }
  }
};
</script>

<style>
</style>