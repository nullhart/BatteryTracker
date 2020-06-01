<template>
  <div id="app">
    <!-- Only shows when update is available -->
    <div class="modal">
      <input id="modal_1" type="checkbox" :checked="$store.state.UpdateIsAvailable" />
      <label for="modal_1" class="overlay"></label>
      <article>
        <header style="text-align: center;">
          <h3 style="margin: 0">Update Available!</h3>
          <label for="modal_1" class="close">&times;</label>
        </header>
        <section
          style="text-align: center;"
          class="content"
        >Do you want to use the updated version now?</section>
        <footer>
          <a class="button" @click="reload()">Yes</a>
          <label for="modal_1" class="button dangerous">Cancel</label>
        </footer>
      </article>
    </div>

    <!-- Main Content -->
    <router-view class="main-container" />
  </div>
</template>

<script>
export default {
  methods: {
    reload: () => {
      location.reload(true);
    }
  },
  async mounted() {}
};
</script>

<style lang="scss">
@import "./assets/picnic.min.css";

::-webkit-scrollbar {
  display: none;
}
body {
  background-color: #121212;
}
.main-container {
  width: 100vw;
  height: 100vh;
}

button {
  outline: none;
  color: white;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

input,
select,
textarea {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
  border: none;
}

label {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
}

input,
textarea,
select {
  background-color: #424242 !important;
}

::placeholder,
::-webkit-resizer {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.553);
  background-color: #424242;
}
</style>
