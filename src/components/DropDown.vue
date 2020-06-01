<template>
  <div>
    <label for="dropdown">{{data.label}}</label>

    <select
      v-model="FieldValue"
      @change="$emit('updateValue', FieldValue)"
      class="input"
      name="dropdown"
      id="dropdown"
    >
      <option
        :disabled="data.hint"
        :value="data.default_option.value ? data.default_option.value: ''"
      >{{data.default_option.value ? data.default_option.value: data.hint}}</option>
      <option v-for="(option,i) in data.options" :key="i" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ["data"],
  data() {
    return { FieldValue: this.data.default_option.value };
  },
  methods: {},
  async mounted() {
    if (this.data.value) {
      FieldValue = this.data.value;
    } else if (this.data.default_option.value) {
      this.FieldValue = this.data.default_option.value;
    } else {
      this.FieldValue = "";
    }
  }
};
</script>

<style lang="scss">
</style>