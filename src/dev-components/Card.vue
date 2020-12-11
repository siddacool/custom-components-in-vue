<template>
  <section class="bg-white px-6 py-8 rounded mb-8">
    <h1 class="text-2xl mb-2">{{ name }}</h1>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Card',
  props: {
    name: String,
  },
  setup() {
    
  },
});
</script>
