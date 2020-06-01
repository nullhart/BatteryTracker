<template>
  <div>
    <!-- Load Form Definition -->
    <div class="section" v-for="(section,index) in SelectedForm.form_sections" :key="index">
      <div style=" background-color: red;display: flex;">
        <h2 style="margin: auto; padding: 0px;" @click="CollectFormData">{{section.section_label}}</h2>
      </div>
      <div class="field-container">
        <component
          class="fields"
          @updateValue="field.value = $event"
          v-for="(field,i) in section.fields"
          :key="i"
          :data="field"
          v-bind:is="field.type"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../components/DropDown";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import NumBox from "../components/NumBox";

export default {
  name: "Dynamic",
  components: { DropDown, TextBox, TextArea, NumBox },
  data() {
    return {
      SelectedForm: {
        form_name: "Example Form",
        form_label: "Example Form",
        description: "This is an example form description",
        created: "2020-05-31T18:07:56.215Z",
        owner: "bmastrud",
        modified: "2020-05-31T18:07:56.215Z",
        modified_By: "bmastrud",
        form_sections: [
          {
            section_name: "First Section",
            section_label: "First Section",
            section_type: "location",
            order: 1,
            fields: [
              {
                name: "Example Dropdown",
                label: "Example Dropdown Label",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "4" }
                ],
                required: false
              },
              {
                name: "Example TextBox",
                label: "Example TextBox Label",
                type: "TextBox",
                default_value: "",
                hint: "Type Text...",
                value: "",
                required: false
              },
              {
                name: "Example TextArea",
                label: "Example TextArea Label",
                type: "TextArea",
                default_value: "",
                hint: "Type Comment...",
                value: "",
                required: false
              },
              {
                name: "Example NumBox",
                label: "Example NumBox Label",
                type: "NumBox",
                default_value: "",
                hint: "Type Number...",
                value: "",
                required: false
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    CollectFormData: function() {
      alert(JSON.stringify(this.SelectedForm));
    }
  },
  created() {}
};
</script>

<style lang="scss">
.section {
  display: grid;
  width: 100vw;
  height: 90vh;
  overflow-y: scroll;
  margin: auto;
  max-width: 600px;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
}

.fields {
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
.section:nth-child(odd) {
  background-color: lightgrey;
}
</style>