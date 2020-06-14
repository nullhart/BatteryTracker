<template>
  <div>
    <label class="date-picker-label">{{data.label}}</label>
    <input @change="$emit('updateValue', FieldValue)" v-model="FieldValue" type="date" />
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
.date-picker-label {
  display: block;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 3px;
}

input[type="date"] {
  display: block;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  min-height: 1.2em;
  outline-color: #ccc;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
}

[type="date"]::-webkit-datetime-edit {
  user-select: none;
  background: #f6f6f6;
}

[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 100%;
  left: 0px;
  opacity: 0;
}
</style>
