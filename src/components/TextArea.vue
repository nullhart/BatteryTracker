<template>
  <div>
    <label for="TextArea">{{data.label}}</label>
    <textarea
      class="resize-ta"
      @change="$emit('updateValue', FieldValue)"
      @input.passive="resize($event)"
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
  methods: {
    resize: function(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight + 1}px`;
    }
  },
  async mounted() {
    if (this.data.value) {
      this.FieldValue = this.data.value;
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