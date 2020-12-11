<template>
  <TextField
    class="cc__search"
    @keyDown.enter="(e) => $emit('search', e.target.value, e)"
  >
    <template v-slot:before>
      <div class="pr-0.5 pl-2">🔍</div>
    </template>
    <template v-slot:after>
      <button
        type="button"
        class="pl-0.5 pr-2 focus:outline-none"
        @click="() => $emit('clear')"
      >
        ❌
      </button>
    </template>
  </TextField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'Search',
  components: {
    TextField,
  },
});
</script>

<style lang="scss"></style>
