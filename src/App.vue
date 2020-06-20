<template>
  <div id="app">
    <!-- Only shows when Atomic Operation -->

    <div v-show="$store.state.spinner" class="loader-container">
      <svg class="loader" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" />
      </svg>
    </div>

    <!-- Only shows when update is available -->
    <div id="dark" class="modal">
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

    <!-- TopBar -->
    <div class="top-bar">
      <div @click="NavAction" class="back-button">
        <font-awesome-icon style="margin: auto;cursor:pointer" :icon="NavIcon()" size="2x" />
      </div>

      <div class="header">
        <h2>{{this.$router.currentRoute.meta.label}}</h2>
      </div>
    </div>
    <!-- Main Content -->
    <transition name="fade" mode="out-in">
      <router-view class="main-container" />
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    reload: () => {
      location.reload(true);
    },
    NavAction: async function() {
      switch (this.$router.currentRoute.path) {
        case "/NewForm":
          this.$router.push("/");
          break;
        case "/":
          this.$router.push("/settings");
          break;
        case "/settings":
          this.$router.push("/");
        default:
      }
    },
    NavIcon: function() {
      switch (this.$router.currentRoute.path) {
        case "/NewForm":
          return "chevron-left";
          break;
        case "/":
          return "bars";
          break;
        case "/settings":
          return "chevron-left";
        default:
      }
    }
  },
  async mounted() {}
};
</script>

<style lang="scss">
$picnic-white: #1b2431;
.modal {
  color: white;
}

footer > .button {
  color: white;
}
@import "../node_modules/picnic/src/picnic.scss";

.loader-container {
  display: grid;
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 900px;
  margin: auto;
  backdrop-filter: blur(10px);
  z-index: 1;
}

// SVG styles.
.loader {
  animation: 2s linear infinite svg-animation;
  max-width: 100px;
  margin: auto;
}
// SVG animation.
@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

// Circle styles.
circle {
  animation: 1.4s ease-in-out infinite both circle-animation;
  display: block;
  fill: transparent;
  stroke: white;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
}

// Circle animation.
@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}

.top-bar {
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0px;
  display: grid;
  filter: contrast(110%);
  background-color: #1b2431;
  color: white;
  max-width: 900px;
  margin: auto;

  grid-template-columns: 50px 1fr;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  overflow: hidden;
  max-width: 900px;
  margin: auto;
}

.header {
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 50px;
}

.header > h2 {
  margin: auto;
  padding: 0px;
}
.back-button {
  display: flex;
  width: 50px;
  height: 50px;
  grid-area: 1;
}

::-webkit-scrollbar {
  display: none;
}
html,
body {
  background-color: #111B29;
  margin: 0px;
  padding: 0px;
}
.main-container {
  width: 100vw;

  height: calc(100vh - 50px);
  margin-top: 50px;
}

button {
  outline: none;
  color: white;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  box-shadow: none;
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
  background-color: #1b2431 !important;
  filter: contrast(110%);
}

::placeholder,
::-webkit-resizer {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.553);
  background-color: #1b2431;
}
</style>
