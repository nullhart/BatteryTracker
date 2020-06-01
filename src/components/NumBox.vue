<template>
  <div>
    <label for="NumBox">{{data.label}}</label>
    <input
      type="number"
      @change="$emit('updateValue', FieldValue)"
      v-model="FieldValue"
      :placeholder="data.hint"
    />
  </div>
</template>

<script>
export default {
  name: "NumBox",
  props: ["data"],
  data() {
    return {
      FieldValue: ""
    };
  },
  computed: {},
  methods: {},
  async mounted() {
    if (this.data.value) {
      FieldValue = this.data.value;
    } else if (this.data.default_value) {
      this.FieldValue = this.data.default_value;
    } else {
      this.FieldValue = "";
    }
  }
};
</script>

<style lang="scss">
</style>