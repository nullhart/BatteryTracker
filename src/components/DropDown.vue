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
.input {
  width: 100%;
}
select {
  background: #fff
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgMiAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwTDEgMkwyIDBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)
    no-repeat scroll 95% center/10px 15px;
}
</style>