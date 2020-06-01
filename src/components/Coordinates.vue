<template>
  <div style="width: 100%;display: grid;">
    <label for="lat">Latitude</label>
    <input name="lat" v-model="lat" />

    <label for="long">Longitude</label>
    <input name="long" v-model="long" />
    <button style="margin: auto;margin-top: 10px;" @click="SetLocation">Get Location</button>
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