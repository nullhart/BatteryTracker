<template>
  <div>
    <label for="TextArea">{{data.label}}</label>
    <textarea
      @change="$emit('updateValue', FieldValue)"
      v-model="FieldValue"
      :placeholder="data.hint"
    />
  </div>
</template>

<script>
export default {
  name: "TextArea",
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