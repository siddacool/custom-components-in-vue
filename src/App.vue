<template>
  <Home />
</template>

<script lang="ts">
import Home from './view/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
}

#app {
  min-height: inherit;
}
</style>
