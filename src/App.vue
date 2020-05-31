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
    <router-view />
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

button {
  outline: none;
}
</style>
