<template>
  <div>
    <!-- Load Form Definition -->
    <div class="section" v-for="(section,index) in SelectedForm.form_sections" :key="index">
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

    <button
      @click="save"
      style="font-size: 1.5em;    left: 50%;
    transform: translate(-50%, 0);margin: auto; height: 55px; position: fixed; bottom: 0px;border-radius: 0px; max-width: 900px; "
    >Save</button>
  </div>
</template>

<script>
import DropDown from "../components/DropDown";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";
import NumBox from "../components/NumBox";
import Coordinates from "../components/Coordinates";
import DatePicker from "../components/DatePicker";

import SaveForm from "../Helpers/SaveForm";

export default {
  name: "Dynamic",
  components: { DropDown, TextBox, TextArea, NumBox, Coordinates, DatePicker },
  data() {
    return {
      SelectedForm: {
        form_name: "Battery Tracker",
        form_label: "Battery Tracker",
        form_status: "Completed",
        description: "This is an example form description",
        location: "Ryan Gulch",
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
                name: "Site_Name",
                label: "Site Name",
                type: "TextBox",
                default_value: "",
                hint: "Site Name",
                value: "",
                required: false
              },

              {
                name: "Technician",
                label: "Technician",
                type: "TextBox",
                default_value: "",
                hint: "Technician",
                value: "",
                required: false
              },

              {
                name: "District",
                label: "District",
                type: "TextBox",
                default_value: "",
                hint: "District",
                value: "",
                required: false
              },

              {
                name: "Date_of_last_inspection",
                label: "Date Of Last Inspection",
                type: "DatePicker",
                default_value: "",
                hint: "MM/DD/YYYY",
                value: "",
                required: false
              },

              {
                name: "Power_Source",
                label: "Power Source",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Solar", value: "Solar" },
                  { label: "Utility", value: "Utility" },
                  { label: "TEG", value: "TEG" },
                  { label: "Pipeline", value: "Pipeline" }
                ],
                required: false
              },

              {
                name: "Electrical_cable_condition",
                label: "Electrical Cable Condition",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Good", value: "Good" },
                  { label: "Needs Replaced", value: "Needs Replaced" }
                ],
                required: false
              },

              {
                name: "Connectors",
                label: "Connectors",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Good", value: "Good" },
                  { label: "Needs Replaced", value: "Needs Replaced" }
                ],
                required: false
              },

              {
                name: "Battery_box",
                label: "Battery Box",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Good", value: "Good" },
                  { label: "Needs Paint", value: "Needs Paint" },
                  { label: "Needs Replaced", value: "Needs Replaced" },
                  { label: "Replaced", value: "Replaced" }
                ],
                required: false
              },

              {
                name: "Battery_terminal",
                label: "Battery Terminal",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Clean", value: "Clean" },
                  { label: "Corroded", value: "Corroded" }
                ],
                required: false
              },

              {
                name: "battery_type",
                label: "Battery Type",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "AGM", value: "AGM" },
                  { label: "Sealed", value: "Sealed" },
                  { label: "Unsealed", value: "Unsealed" }
                ],
                required: false
              },

              {
                name: "Number_of_batteries",
                label: "Number Of Batteries",
                type: "NumBox",
                default_value: "",
                hint: "Number Of Batteries",
                value: "",
                min: "",
                max: "",
                required: false
              },

              {
                name: "Bat_Labeled",
                label: "Batteries labeled with install date and number",
                type: "DropDown",
                default_option: {},
                hint: "Pick Option",
                value: "",
                options: [
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" }
                ],
                required: false
              },

              {
                name: "Bat_labeled_date",
                label: "Batteries labeled with install date and number",
                type: "DatePicker",
                default_value: "",
                hint: "MM/DD/YYYY",
                value: "",
                required: false
              },

              {
                name: "Bat_1_volt",
                label: "Battery 1 Voltage",
                type: "NumBox",
                default_value: "",
                hint: "Battery 1 Voltage",
                value: "",
                min: "",
                max: "",
                required: false
              },

              {
                name: "Bat_2_volt",
                label: "Battery 2 Voltage",
                type: "NumBox",
                default_value: "",
                hint: "Battery 2 Voltage",
                value: "",
                min: "",
                max: "",
                required: false
              },

              {
                name: "Bat_3_volt",
                label: "Battery 3 Voltage",
                type: "NumBox",
                default_value: "",
                hint: "Battery 3 Voltage",
                value: "",
                min: "",
                max: "",
                required: false
              },

              {
                name: "Bat_4_volt",
                label: "Battery 4 Voltage",
                type: "NumBox",
                default_value: "",
                hint: "Battery 4 Voltage",
                value: "",
                min: "",
                max: "",
                required: false
              },

              {
                name: "Coordinates",
                label: "Coordinates",
                type: "Coordinates",
                lat: "",
                long: "",
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
    },
    save: function() {
      SaveForm(JSON.parse(JSON.stringify(this.SelectedForm)));
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.section {
  display: grid;

  width: 100%;
  height: Calc(100% - 55px);
  overflow-y: scroll;
  margin: auto;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: #1b2431;
}

.fields {
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

.field-container {
  max-width: 900px;
  width: 100%;
  background-color: transparent;
}
.section:nth-child(odd) {
  // background-color: whitesmoke;
}
</style>
