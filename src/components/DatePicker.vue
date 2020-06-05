<template>
  <div>
    <label :for="data.name" style="user-">{{data.label}}</label>
    <input
      @change="$emit('updateValue', FieldValue)"
      v-model="FieldValue"
      type="date"
      :id="data.name"
      :name="data.name"
    />
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: ["data"],
  data() {
    return { FieldValue: this.data.value };
  },
  methods: {},
  async mounted() {
    if (this.data.value) {
      FieldValue = this.data.value;
    } else if (this.data.value) {
      this.FieldValue = this.data.value;
    } else {
      this.FieldValue = "";
    }
  }
};
</script>

<style>
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 100%;
  opacity: 0;
}
</style>