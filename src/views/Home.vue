<template>
  <div class="home-container">
    <div class="list-container">
      <div class="list-item" v-for="(form,i) in SavedForms" :key="i">
        <div class="form-name">{{form.form_name}}</div>
        <div class="status-text">
          {{form.form_status}}
          <span
            :class="form.form_status == 'Completed' ? 'complete': 'in-progress'"
            class="circle"
          ></span>
        </div>
        <span class="subtext">{{form.location}}</span>
        <span class="date">{{FormatDate(form.created)}}</span>
      </div>
    </div>

    <div class="action-button-group">
      <span @click="SubmitCompletedForms" class="action-button">
        <font-awesome-icon style="margin: auto;color:white;" icon="sync" size="2x" />
      </span>
      <span @click="NewForm" class="action-button">
        <font-awesome-icon style="margin: auto;color:white;" icon="plus" size="2x" />
      </span>
    </div>
  </div>
</template>

<script>
import GetCreatedForms from "../Helpers/GetCreatedForms";

export default {
  name: "Home",
  components: {},
  data() {
    return { SavedForms: [] };
  },
  methods: {
    SubmitCompletedForms: async function() {
      console.log("Submitted Forms");
    },
    NewForm: async function() {
      console.log("New Form Started");
      this.$router.push("NewForm");
    },
    FormatDate: date => {
      return new Date(date).toLocaleDateString();
    }
  },
  computed: {},

  async mounted() {
    this.SavedForms = await GetCreatedForms();
  }
};
</script>

<style>
.in-progress {
  background-color: #ffaf5f;
}

.complete {
  background-color: #2ecc71;
}
.form-name {
  margin-top: auto;
  margin-bottom: auto;
}
.circle {
  display: grid;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;

  top: 0;
  left: 0;
  pointer-events: none;
}

.date {
  grid-area: 3 / 1;
  font-size: 0.8em;
  margin-top: auto;
  margin-bottom: auto;
  color: hsla(0, 0%, 100%, 0.75);
}
.subtext {
  /* color: rgba(255, 255, 255, 0.492); */
  grid-row: 2;
  font-size: 0.8em;
  color: hsla(0, 0%, 100%, 0.75);
  margin-top: auto;
  margin-bottom: auto;
}

.status-text {
  /* color: rgba(255, 255, 255, 0.492); */
  grid-area: 2 / 2;
  margin: auto;
  display: grid;
  grid-template-columns: 100px 20px;
}

.action-button-group {
  position: fixed;
  bottom: 0px;
  display: grid;
  width: 100%;
  height: 60px;
  max-width: 900px;
  filter: contrast(110%);
  background-color: #1b2431;

  grid-template-columns: 1fr 1fr;
}

.action-button {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  border-radius: 0px;
  z-index: 1;
  transition: 0;
  user-select: none;
}

.action-button:hover {
  cursor: pointer;
}

.action-button:active {
  filter: contrast(110%);
  background-color: #1b2431;
}

.list-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.list-item {
  display: grid;
  width: 100%;
  height: 80px;
  background-color: #1b2431;
  border-bottom: solid #424242 1px;
  color: white;
  padding: 5px;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 120px;
}

.list-item:hover {
  filter: contrast(80%);
  transition: 0.2s;
}

.home-container {
  display: grid;
  margin-top: 50px;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  grid-template-rows: 1fr 60px;
}
</style>